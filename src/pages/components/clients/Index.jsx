import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start:
                  index === 0
                    ? `top-=${vw(35)}`
                    : `top+=${vw(35 + 5.5555556 * index)}`,
                end:
                  index === 0
                    ? `bottom-=${vw(35 + 5.5555556 * index)}`
                    : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Work Experience</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>JUNE 2025 - AUGUST 2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Venley Capitals</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Finance Intern - Analyzed market trends and
            </div>
            <div className="p-l">
              financial data using Python & SQL. Developed
            </div>
            <div className="p-l">
              predictive models for portfolio optimization.
            </div>
            <div className="p-l">
              Created automated risk assessment tools and
            </div>
            <div className="p-l">
              contributed to ML-driven investment strategies.
            </div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">JUNE 2025 - AUGUST 2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>
                Venley Capitals
              </h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Finance Intern - Analyzed market trends and
              </div>
              <div className="p-l">
                financial data using Python & SQL. Developed
              </div>
              <div className="p-l">
                predictive models for portfolio optimization.
              </div>
              <div className="p-l">
                Created automated risk assessment tools and
              </div>
              <div className="p-l">
                contributed to ML-driven investment strategies.
              </div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>BlueStock</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              Machine Learning Intern - Developed neural
            </div>
            <div className="p-l">
              networks for stock market prediction using
            </div>
            <div className="p-l">TensorFlow and PyTorch. Built sentiment</div>
            <div className="p-l">analysis models for market insights and</div>
            <div className="p-l">optimized trading algorithms with ML.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>BlueStock</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                Machine Learning Intern - Developed neural
              </div>
              <div className="p-l">
                networks for stock market prediction using
              </div>
              <div className="p-l">TensorFlow and PyTorch. Built sentiment</div>
              <div className="p-l">analysis models for market insights and</div>
              <div className="p-l">optimized trading algorithms with ML.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>CAREMEEZ</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">
              A.I Automation Intern - Designed intelligent
            </div>
            <div className="p-l">
              automation workflows using computer vision
            </div>
            <div className="p-l">and NLP. Built AI chatbots and automated</div>
            <div className="p-l">customer service systems. Implemented</div>
            <div className="p-l">ML models for process optimization.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>CAREMEEZ</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">
                A.I Automation Intern - Designed intelligent
              </div>
              <div className="p-l">
                automation workflows using computer vision
              </div>
              <div className="p-l">
                and NLP. Built AI chatbots and automated
              </div>
              <div className="p-l">customer service systems. Implemented</div>
              <div className="p-l">ML models for process optimization.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
