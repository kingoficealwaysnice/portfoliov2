/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Khushal Singh - Machine Learning Engineer & Blockchain Developer',
  description: 'Learn about my journey as a Machine Learning Engineer and Blockchain Developer, specializing in AI-powered decentralized applications and Web3 technologies.',
  keywords: [
    'Khushal Singh',
    'About Khushal Singh',
    'Machine Learning Engineer',
    'Blockchain Developer',
    'Web3 Developer Profile',
    'AI Developer Journey',
    'Decentralized Applications',
    'Smart Contract Developer',
    'DeFi Expert',
    'Machine Learning Expertise',
    'Blockchain Development Services',
    'AI Blockchain Integration',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
