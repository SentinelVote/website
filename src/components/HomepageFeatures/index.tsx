import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Effortless Voting Journey',
    Svg: require('@site/static/img/vs_undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Seamless registration and voting experience via user-friendly webpages. 
        Your data is securely stored, and votes are transmitted to the 
        blockchain for a smooth, trustworthy process.
      </>
    ),
  },
  {
    title: 'User-Focused Voting Confidence',
    Svg: require('@site/static/img/vs_undraw_docusaurus_react.svg').default,
    description: (
      <>
        Intuitive registration leads to secure, hassle-free voting. SentinelVote 
        ensures data security and integrity while providing an easy, transparent voting process.
      </>
    ),
  },
  {
    title: 'Simplified Voting, Secure Outcome',
    Svg: require('@site/static/img/vs_undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Register and vote effortlessly with SentinelVote's user-centric design. 
        Your data's security and encrypted votes' integrity are maintained for 
        a seamless journey onto the blockchain.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
