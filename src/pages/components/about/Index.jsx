import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import clsx from 'clsx';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function About() {
  const isMobile = useIsMobile();

  return (
    <section className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h1 className={clsx('h1', 'medium')}>Hey, My name&apos;s</h1>
          <h1 className={clsx('h1', 'medium')}>Khushal Singh!</h1>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        <div className={clsx(styles.descWrapper)}>
          <AppearTitle>
            <div className="p-l">
              “My solo learning journey as a self-taught
            </div>
            <div className="p-l">developer empowers me to solve problems</div>
            <div className="p-l">
              creatively and efficiently, supporting the
            </div>
            <div className="p-l">
              successful completion of your project goals”
            </div>
          </AppearTitle>
        </div>
        <div className={clsx(styles.descWrapperBottom)}>
          {!isMobile ? (
            <AppearTitle key="desktop-descWrapperBottom">
              <h6 className="h6">ML and I am from Indore.</h6>
              <h6 className="h6">
                With a strong eye for design and a dedication to
              </h6>
              <h6 className="h6">
                creating seamless user experiences. I specialize in
              </h6>
              <h6 className="h6">
                bringing web applications to life with clean and efficient
              </h6>
              <h6 className="h6">code.</h6>
            </AppearTitle>
          ) : (
            <AppearTitle key="mobile-descWrapperBottom">
              <h6 className="h6"> ML and I am from Indore. With a</h6>
              <h6 className="h6">
                strong eye for design and a dedication to creating seamless
              </h6>
              <h6 className="h6">
                user experiences. I specialize in bringing web applications to
                life
              </h6>
              <h6 className="h6">with clean and efficient code.</h6>
            </AppearTitle>
          )}
          <div className={clsx(styles.buttonContainer)}>
            <ButtonLink href="/about" label="ABOUT ME" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
