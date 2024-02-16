---
slug: date202427
title: PHP+MYSQL实现翻页功能
tags: [PHP]
authors: [xinyuu]
---
#### 为什么要做分页功能

分页功能可以在个别网络环境较差的情况下大幅缩短浏览器对资源的响应时间，且分页后网页更加美观规整。

<!-- truncate -->


#### 后台实现

##### 构建SQL语句

分页其实利用的是`MySQL`中`limit`关键字来实现的，例如我们查询一个表中的前四条数据：

`SELECT * FROM acgtime.bangumi WHERE title LIKE '%$word%' AND status LIKE '%$week%' LIMIT 0,4;`

limit后需要两个参数，第一个参数代表从第几条开始取；第二个参数代表一次取几条。
那么上述SQL语句表达的意思为从第 0 条开始取，取 4条（实则 0 为第 1 条，计数从 0 开始）。

我们把取到的前四条数据作为第一页。

那么继续取第二页，还是 4 条数据，则SQL语句为：
`SELECT * FROM acgtime.bangumi WHERE title LIKE '%$word%' AND status LIKE '%$week%' LIMIT 4,4;`

##### 第三页：

`SELECT * FROM acgtime.bangumi WHERE title LIKE '%$word%' AND status LIKE '%$week%' LIMIT 9,4;`



##### 定义每页显示的条数

`$pageSize = 4;`

##### 定义当前页

`$page = 1;`

##### 计算`limt`需要的第一个参数

`$start = ($page - 1) * $pageSize;`

所以SQL语句为：

`SELECT * FROM acgtime.bangumi WHERE title LIKE '%$word%' AND status LIKE '%$week%' LIMIT $start,$pageSize;`

这时改变`$page`的值，就可以查询对应页的数据。

##### 通过地址栏传参得到`$page`参数来定义当前页

为了更加的灵活我们通过地址栏传参得到想要显示的页数，所以第四步的代码改为：

`if ($_GET['page']) {
	$page = $_GET['page'];`
`} else {`
	`$page = 1; // 接收不到按照 1 处理，即默认第 1 页`
`}`

#### 前端实现

当点击`上一页`，我们需要给当前页`$page - 1`；
当点击`下一页`，我们需要给当前页`$page + 1`；

在当前页的基础上确定上一页：

`$up = $page - 1;`

在当前页的基础上确定下一页：

`$next = $page + 1;`



但是`$up`和`$next`并不是无限加减的，当已经是第一页的时候，`$up`不可再继续减，所以在确定上一页的时候需要加一个判断。

`if ($page == 1) {`

` $up = 1; ` 

`} else {` 

`$up = $page - 1; `

`}`

同理，确定下一页的时候也需要判断，什么时候不可以继续下一页了呢？当当前页已经是最后一页的时候不可继续下一页，最后一页如何判定，取决于当前表的总条数，当前表如果有 10 条数据，每页显示 2 条，那么需要分 10 / 2 = 5 页，这个 5 就是最后一页，如果有 11 条数据，那么需要分 11 / 2 = 5.5 页，说明分 5 页还剩下 1 条，所以直接分 6 页，即向上取整，那么这个 6 就是最后一页。

求出总条数：


`$query = mysqli_query($connect, $sql);`
`$num = mysqli_num_rows($query);`

根据总条数和每页显示的条数求出需要分几页：

`$totalPage = ceil($num / $pageSize)`

所以在判断下一页的时候改为：

`if ($page == $totalPage) {`
	`$next = $totalPage;`
`} else {`
	`$next = $page + 1;`	
`}`

本章结束。
