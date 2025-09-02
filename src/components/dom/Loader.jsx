import SplitType from 'split-type';
import clsx from 'clsx';
import gsap from 'gsap';
import styles from '@src/components/dom/styles/loader.module.scss';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function Loader() {
  const [lenis, introOut, setIntroOut, setIsLoading, setIsAbout] = useStore(
    useShallow((state) => [
      state.lenis,
      state.introOut,
      state.setIntroOut,
      state.setIsLoading,
      state.setIsAbout,
    ]),
  );

  const progressRef = useRef(null);
  const fullNameRef = useRef(null);
  const shortNameRef = useRef(null);
  const root = useRef(null);
  const router = useRouter();

  // Skip loader entirely if already completed on previous visit
  useEffect(() => {
    const hasCompletedLoader =
      typeof window !== 'undefined' &&
      sessionStorage.getItem('loaderCompleted');
    if (hasCompletedLoader && !introOut) {
      setIntroOut(true);
      setIsLoading(false);
      lenis?.start();
    }
  }, [introOut, setIntroOut, setIsLoading, lenis]);

  useIsomorphicLayoutEffect(() => {
    let ctx;

    // Check if loader has already completed to skip on route changes
    const hasCompletedLoader =
      typeof window !== 'undefined' &&
      sessionStorage.getItem('loaderCompleted');

    // Skip loader entirely if already completed
    if (!introOut && !hasCompletedLoader) {
      setIsAbout(router.asPath === '/about');

      // Ultra-fast loading - initial load takes 0.5s, route changes are instant
      const isInitialLoad =
        typeof window !== 'undefined' && !sessionStorage.getItem('hasVisited');

      ctx = gsap.context(() => {
        gsap.to(progressRef.current, {
          duration: isInitialLoad ? 0.3 : 0.05,
          ease: 'power2.inOut',
          innerText: `${100}%`,
          roundProps: 'innerText',
          snap: {
            innerText: 1,
          },
          onComplete: () => {
            gsap.set('header', {
              autoAlpha: 0,
              ease: 'power2.inOut',
            });

            const splitted = new SplitType(fullNameRef.current, {
              types: 'lines',
              tagName: 'span',
            });
            splitted.lines.forEach((line) => {
              gsap.to(line, {
                ease: 'power4.inOut',
                top: '-12vw',
                duration: isInitialLoad ? 0.1 : 0.05,
              });
            });
            gsap.to(shortNameRef.current, {
              opacity: 1,
            });
            const splittedShort = new SplitType(shortNameRef.current, {
              types: 'lines',
              tagName: 'span',
            });
            splittedShort.lines.forEach((line) => {
              gsap.to(line, {
                ease: 'power4.inOut',
                top: '0px',
                duration: isInitialLoad ? 0.1 : 0.05,
              });
            });

            const splittedProgress = new SplitType(progressRef.current, {
              types: 'lines',
              tagName: 'span',
            });
            splittedProgress.lines.forEach((line) => {
              gsap.to(line, {
                ease: 'power4.inOut',
                top: '-12vw',
                duration: isInitialLoad ? 0.1 : 0.05,
              });
            });
            lenis.scrollTo(0, { force: true });
            gsap.set(document?.getElementById('layout'), {
              height: '90%',
            });

            gsap.set('main', {
              x: '100%',
              scale: 0.9,
              opacity: 1,
              border: '2px solid #f0f4f1',
              borderRadius: '1.3888888889vw',
            });

            gsap.to(root.current, {
              scale: 0.9,
              ease: 'power2.inOut',
              delay: isInitialLoad ? 0.1 : 0.02,
              duration: isInitialLoad ? 0.1 : 0.05,
              borderRadius: '1.3888888889vw',
            });
            gsap.to(root.current, {
              ease: 'power2.inOut',
              delay: isInitialLoad ? 0.2 : 0.04,
              duration: isInitialLoad ? 0.1 : 0.05,
              x: '-100%',
            });

            gsap.to('main', {
              ease: 'power2.inOut',
              delay: isInitialLoad ? 0.2 : 0.04,
              duration: isInitialLoad ? 0.1 : 0.05,
              x: '0px',
            });
            gsap.to('main', {
              ease: 'power2.inOut',
              delay: isInitialLoad ? 0.3 : 0.06,
              duration: isInitialLoad ? 0.1 : 0.05,
              scale: 1,
              borderRadius: 0,
            });
            gsap.to(document?.getElementById('layout'), {
              ease: 'power2.inOut',
              delay: isInitialLoad ? 0.3 : 0.06,
              duration: isInitialLoad ? 0.1 : 0.05,
              height: '100%',
            });
            gsap.to('header', {
              delay: isInitialLoad ? 0.4 : 0.08,
              duration: isInitialLoad ? 0.1 : 0.05,
              ease: 'power2.inOut',
              autoAlpha: 1,
            });
            gsap.to('main', {
              ease: 'power2.inOut',
              delay: isInitialLoad ? 0.5 : 0.1,
              height: 'auto',
              border: 'none',
              pointerEvents: 'auto',
              onComplete: () => {
                setIntroOut(true);
                setIsLoading(false);
                lenis.start();
                sessionStorage.setItem('loaderCompleted', 'true');
                sessionStorage.setItem('hasVisited', 'true');
              },
            });
          },
        });
      });
    } else if (ctx) {
      ctx.kill();
    }

    return () => {
      if (ctx) {
        ctx.kill();
      }
    };
  }, [lenis, introOut]);

  return (
    <div
      id="loader"
      ref={root}
      className={clsx(styles.root, 'layout-block-inner')}
    >
      <div className={styles.innerContainer}>
        <div className={styles.fullNameContainer}>
          <h2 ref={fullNameRef} className={clsx(styles.fullName, 'h2')}>
            {introOut ? 'Loading' : 'Khushal Singh'}
          </h2>
        </div>

        {!introOut && (
          <div className={styles.shortNameContainer}>
            <h2 ref={shortNameRef} className={clsx(styles.shortName, 'h2')}>
              Call me Khushal
            </h2>
          </div>
        )}

        {!introOut && (
          <div className={styles.progressContainer}>
            <h1 ref={progressRef} className={clsx(styles.progress, 'h1')}>
              0%
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Loader;
