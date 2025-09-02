import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">The AI engineer&apos;s role </h3>
            <h3 className="h3">
              is like a neural architect, <span className="medium">designing</span>
            </h3>
            <h3 className="h3">
              intelligent systems that <span className="medium">learn</span> and
            </h3>
            <h3 className="h3">
              <span className="medium">adapt</span> autonomously.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">The AI engineer&apos;s role is like a</h3>
            <h3 className="h3">
              neural architect, <span className="medium">designing</span> intelligent systems
            </h3>
            <h3 className="h3">
              that <span className="medium">learn</span> and <span className="medium">adapt</span> autonomously.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Hey there! I'm a Machine Learning Engineer and Blockchain Developer </h6>
            <h6 className="h6">specializing in AI-powered decentralized applications and Web3 </h6>
            <h6 className="h6">technologies. I combine machine learning expertise with blockchain </h6>
            <h6 className="h6">development to build the future of intelligent systems.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I'm not developing neural networks or smart contracts, you'll find me </h6>
            <h6 className="h6">exploring new consensus mechanisms, optimizing DeFi protocols, or </h6>
            <h6 className="h6">experimenting with cutting-edge AI models for blockchain applications.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>In my free time, I contribute to open-source blockchain projects, research </h6>
            <h6 className="h6">emerging Web3 technologies, and analyze market data with machine learning </h6>
            <h6 className="h6">algorithms to stay at the forefront of decentralized innovation.</h6>

            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Khushal Singh.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I'm a Machine Learning Engineer and Blockchain Developer </h6>
            <h6 className="h6">specializing in AI-powered decentralized applications and Web3 </h6>
            <h6 className="h6">technologies. I combine machine learning expertise with blockchain </h6>
            <h6 className="h6">development to build the future of intelligent systems.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I'm not developing neural networks or smart contracts, you'll find me </h6>
            <h6 className="h6">exploring new consensus mechanisms, optimizing DeFi protocols, or </h6>
            <h6 className="h6">experimenting with cutting-edge AI models for blockchain applications.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>In my free time, I contribute to open-source blockchain projects, research </h6>
            <h6 className="h6">emerging Web3 technologies, and analyze market data with machine learning </h6>
            <h6 className="h6">algorithms to stay at the forefront of decentralized innovation.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and creating something</h6>
            <h6 className="h6">great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Khushal Singh.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
