/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Khushal Singh - Machine Learning Engineer & Blockchain Developer',
  description:
    'Expert Machine Learning Engineer and Blockchain Developer specializing in AI-powered decentralized applications, Web3 technologies, and intelligent systems for the future of the internet.',
  keywords: [
    'Khushal Singh',
    'machine learning engineer',
    'blockchain developer',
    'web3 developer',
    'AI specialist',
    'decentralized applications',
    'smart contracts',
    'solidity',
    'python',
    'tensorflow',
    'pytorch',
    'ethereum',
    'defi',
    'nft',
    'crypto',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
