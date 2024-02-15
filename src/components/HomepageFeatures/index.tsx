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
    title: 'User-Focused Voting with Golang',
    Svg: require('@site/static/img/go_logo.svg').default,
    description: (
      <>
      Utilizing Golang for Elliptic Curve Cryptography (ECC), 
      Linkable Ring Signatures, and optimized memory usage, 
      ensuring robust security measures without compromising performance.
      </>
    ),
  },
  {
    title: 'Effortless Voting Journey with NextJS',
    Svg: require('@site/static/img/nextjs_logo.svg').default,
    description: (
      <>
      Harnessing the power of Next.js for effortless deployment on Vercel's platform, 
      leveraging Node.js environment, 
      and delivering a responsive interface for an unparalleled user experience.
      </>
    ),
  },
  {
    title: 'Secure Outcome with Fabric',
    Svg: require('@site/static/img/hyper_ledger_fabric.svg').default,
    description: (
      <>
      Leveraging Hyperledger Fabric technology to securely store and maintain the integrity of votes, 
      ensuring tamper-proof records and 
      providing a trusted platform for conducting elections with utmost transparency and security.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center feature-item-component">
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
