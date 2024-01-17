import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '查询文档',
    Svg: require('@site/static/img/code1.svg').default,
    description: (
      <>
        您可以在此处查询到Cocomoe在近三年编辑过的所有的文档。
      </>
    ),
  },
  {
    title: '参与编辑',
    Svg: require('@site/static/img/code_star.svg').default,
    description: (
      <>
        发现错误?仅需了解Markdown的语法您就可以帮助我们修正文档！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
