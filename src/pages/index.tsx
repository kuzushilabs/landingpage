import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Spline from '@splinetool/react-spline';
import Lottie from 'lottie-react';
import RocketLogo from '../../public/assets/logo.json';
import LLMIntegration from '../../public/assets/llm-integration.json';
import AgentsV0 from '../../public/assets/agents-v0.json';
import AgentsV1 from '../../public/assets/agents-v1.json';
import AgentsV2 from '../../public/assets/agents-v2.json';
import Insights from '../../public/assets/insights.json';
import Frontend from '../../public/assets/frontend.json';
import Backend from '../../public/assets/backend.json';
import Fullstack from '../../public/assets/fullstack.json';
import Finetuning from '../../public/assets/finetuning.json';
import DomainSpecific from '../../public/assets/domain-specificv1.json';
import Onpremise from '../../public/assets/onpremisev1.json';
import Ideation from '../../public/assets/ideation.json';
import Develop from '../../public/assets/develop.json';
import Launch from '../../public/assets/launch.json';
const inter = Inter({ subsets: ['latin'] });
import { useEffect, useRef, useState } from 'react';

interface Card {
  title: string;
  description: string;
  icon?: any;
  height?: string;
  width?: string;
}

interface TabData {
  [key: string]: Card[];
}

const tabData: TabData = {
  'LLM Integrations': [
    {
      title: 'LLMs',
      description:
        'Easily plug into any platform with custom LLM integrations. Chat, image, audio or automation, we make AI fit right into your workflow',
      icon: LLMIntegration,
    },
    {
      title: 'Agents',
      description:
        'Automate routine tasks, workflows & decision-making. Create personalized experiences for your users',
      icon: AgentsV2,
    },
    {
      title: 'Insights',
      description:
        'Leverage LLMs to extract key insights from complex data. Make informed decisions faster with AI that understands and summarizes information for you',
      icon: Insights,
    },
  ],
  'Web App': [
    {
      title: 'Frontend Excellence',
      description:
        'Build visually stunning, lightning-fast web apps that engage users. We bring your ideas to life, seamlessly.',
      icon: Frontend,
    },
    {
      title: 'Robust Backend',
      description:
        'Scale effortlessly with robust, secure, & high-performance solutions. We ensure your web app is built to last',
      icon: Backend,
    },
    {
      title: 'Full Stack Agility',
      description:
        'Get the best of both worlds with our full-stack expertise. From concept to deployment, we handle everything',
      icon: Fullstack,
    },
  ],
  Finetuning: [
    {
      title: 'Finetuned Models',
      description:
        'Fine-tune state-of-the-art LLMs to fit your unique business needs. Get personalized models that outperform out-of-the-box solutions',
      icon: Finetuning,
    },
    {
      title: 'Domain-Specificity',
      description:
        'Optimize your AI for specialized industries. Whether healthcare, finance, or e-commerce, we craft models that speak your language',
      icon: DomainSpecific,
    },
    {
      title: 'On-Premise Deployment',
      description:
        'Deploy LLMs on your own infrastructure. Keep your data secure and compliant, with no external dependencies',
      icon: Onpremise,
    },
  ],
};

const processData: Card[] = [
  {
    title: 'Ideation',
    description:
      'We’ll get on a call to ideate with you & understand your vision and goals',
    icon: Ideation,
  },
  {
    title: 'Development',
    description:
      "With your business goals in mind, we'll design & develop the product",
    icon: Develop,
  },
  {
    title: 'Launch',
    description:
      'We will launch the product & continue to support you with updates & more',
    icon: Launch,
  },
];

export default function Home() {
  const handleContactClick = () => {
    window.open('https://calendly.com/kuzushilabs/30min', '_blank');
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const [activeTab, setActiveTab] = useState<string>('LLM Integrations');
  const [animate, setAnimate] = useState<boolean>(false);
  const handleTabChange = (tab: string) => {
    // Trigger animation
    setAnimate(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimate(false); // Stop the animation after the transition
    }, 300); // Match the timeout with the duration of animation
  };

  // Intersection Observer
  // const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isOutOfViewRef = useRef(true); // Ref to track 'out of view' state
  const scrollDirectionRef = useRef('down');

  useEffect(() => {
    const currentSection = aboutUsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            scrollDirectionRef.current === 'down' &&
            isOutOfViewRef.current
          ) {
            // Scrolling down and section leaves viewport
            setIsVisible(true);
            isOutOfViewRef.current = false;
            // console.log('Scrolling down - Section out of view to in view');
          } else if (
            !entry.isIntersecting &&
            scrollDirectionRef.current === 'up' &&
            !isOutOfViewRef.current
          ) {
            // Scrolling down and section leaves viewport
            setIsVisible(false);
            isOutOfViewRef.current = true;
            // console.log('Scrolling up - Section in of view to out view');
          }
        });
      },
      { threshold: 0.5 } // 60% of the section must be visible to trigger
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollDirectionRef.current = scrollY > lastScrollY ? 'down' : 'up';
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // **Create refs for the sections**
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLDivElement | null>(null);
  const faqsRef = useRef<HTMLDivElement | null>(null);

  // **Function to handle smooth scrolling to the respective section**
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="relative min-w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div className="fixed top-8 border border-white/10 rounded-lg flex flex-row items-center justify-between bg-[#0D0D0D]/50 pr-4 px-2  z-[1000] font-urbanist w-full lg:w-[625px]">
          <div className="logo w-[48px] h-[64px] mr-1">
            <Lottie
              className="h-full w-full bg-none"
              animationData={RocketLogo}
            />
          </div>
          {/* Desktop Menu */}
          <div className="menu hidden lg:flex flex-row items-center justify-between z-50 text-white">
            <div
              className="pl-2 pr-4 py-2 cursor-pointer"
              onClick={() => scrollToSection(aboutUsRef)}
            >
              About Us
            </div>
            {/* <div
              className="px-4 py-2 cursor-pointer"
              onClick={() => scrollToSection(resultsRef)}
            >
              Results
            </div> */}
            <div
              className="px-4 py-2 cursor-pointer"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </div>
            <div
              className="px-4 py-2 cursor-pointer"
              onClick={() => scrollToSection(processRef)}
            >
              Process
            </div>
            <div
              className="px-4 py-2 cursor-pointer"
              onClick={() => scrollToSection(faqsRef)}
            >
              FAQs
            </div>
            <div
              className="px-6 py-2 ml-4 cursor-pointer bg-primaryPurple rounded-lg text-center hover:bg-[#8a5ae6]"
              onClick={() => {
                console.log('email us');
              }}
            >
              Email Us
            </div>
          </div>
          {/* Mobile Menu (toggle) */}
          <button
            onClick={toggleMenu}
            className="text-[#aaaaaa] lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger Menu Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="lg:hidden flex flex-col items-center bg-[#0a0a0a] text-white absolute top-full z-1000 right-0 min-w-40 pb-4">
              <div
                className="px-4 py-2 cursor-pointer"
                onClick={() => scrollToSection(aboutUsRef)}
              >
                About Us
              </div>
              <div
                className="px-4 py-2 cursor-pointer"
                onClick={() => scrollToSection(resultsRef)}
              >
                Results
              </div>
              <div
                className="px-4 py-2 cursor-pointer"
                onClick={() => scrollToSection(servicesRef)}
              >
                Services
              </div>
              <div
                className="px-4 py-2 cursor-pointer"
                onClick={() => scrollToSection(processRef)}
              >
                Process
              </div>
              <div
                className="px-4 py-2 cursor-pointer"
                onClick={() => scrollToSection(faqsRef)}
              >
                FAQs
              </div>
              <div className="px-6 py-2 mt-4 mx-2 cursor-pointer bg-primaryPurple rounded-lg text-center hover:bg-[#8a5ae6]">
                Email Us
              </div>
            </div>
          )}
        </div>
        <Spline
          className="absolute w-full h-full opacity-70"
          scene="https://prod.spline.design/AHdTLBTO6jQVwZVB/scene.splinecode"
        />
        <div className="flex flex-col items-center z-50 justify-center pt-24">
          <div className="relative bottom-10 font-urbanist text-white text-4xl xs:text-5xl sm:text-6xl lg:text-8xl font-semibold text-center tracking-tight">
            We help you build
            <span className="block mt-4">
              <span className="italic font-instrumentSerif font-thin tracking-tighter">
                really cool
              </span>{' '}
              stuff
            </span>
          </div>
          <div className="relative inline-flex font-urbanist text-[#aaaaaa] text:xl sm:text-2xl max-w-xl lg:font-medium text-center mt-2">
            Kuzushi Labs is an AI-native product studio building fullstack
            AI/LLM apps
          </div>
          <div className="flex flex-row items-center justify-center gap-8 z-50 mt-16 ">
            <button
              className="relative text-xl font-urbanist font-bold  text-white"
              onClick={handleContactClick}
            >
              <div className="absolute inset-x-0 h-full -bottom-1 bg-primaryDarkPurple rounded-2xl"></div>

              <div className="relative bg-primaryPurple hover:bg-[#8a5ae6] rounded-2xl py-2 px-10 sm:py-3 sm:px-20 transition transform duration-200 active:translate-y-1">
                Book a Call
              </div>
            </button>
            {/* <button
            className="relative sm:text-xl md:text-xl lg:text-xl font-urbanist font-bold mt-32 sm:mt-32 md:mt-32 lg:mt-32"
            onClick={handleContactClick}
          >
            <div className="absolute inset-x-0 h-full -bottom-1 bg-primaryDarkPurple rounded-2xl"></div>

            <div className="relative bg-primaryPurple rounded-2xl py-2 px-10 sm:py-3 sm:px-20 md:py-3 md:px-20 lg:py-3 lg:px-20 transition transform duration-200 active:translate-y-1">
              Email Us
            </div>
          </button> */}
          </div>
        </div>
      </div>
      {/** Section 2 - details of expertise */}
      <div
        ref={aboutUsRef}
        className={`relative min-w-full min-h-screen flex flex-col justify-start items-center p-8 sm:p-16 bg-[#030303] transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 blur-0' : 'opacity-100 blur-lg'
        }`}
      >
        <div className="text-white text-3xl xs:text-4xl sm:text-7xl font-urbanist text-center mt-32 px-4 md:px-24 py-8">
          Here at Kuzushi Labs we engineer{' '}
          <span className="italic font-instrumentSerif font-thin tracking-tighter">
            AI native
          </span>{' '}
          solutions. We are committed to creating innovative and inspiring{' '}
          <span className="italic font-instrumentSerif font-thin tracking-tighter">
            world-class
          </span>{' '}
          products. Come transform your ideas into{' '}
          <span className="italic font-instrumentSerif font-thin tracking-tighter">
            powerful realities
          </span>{' '}
        </div>
      </div>
      {/** Section 3 - details of services */}
      <div
        ref={servicesRef}
        className="service-container p-8 sm:p-16 relative min-w-full min-h-screen flex flex-col justify-between items-center font-urbanist gap-8 bg-[#030303] text-white"
      >
        <div className="header-container w-full flex flex-col items-center justify-between gap-4">
          <div className="text-center font-urbanist px-4 text:xl sm:text-2xl">
            Services
          </div>
          <div className="text-3xl xs:text-4xl sm:text-7xl font-urbanist text-center py-1">
            How can we help{' '}
            <span className="font-instrumentSerif italic tracking-tighter font-thin">
              you?
            </span>
          </div>
          <div className="relative inline-flex font-urbanist text-[#aaaaaa] text:xl sm:text-2xl max-w-xl lg:font-medium text-center mt-2 ">
            Integrations. Web apps. Finetuning. We got you covered with our wide
            range of services
          </div>
        </div>
        <div className="details-container flex flex-col justify-between items-center md:flex-1 gap-8 ">
          {/* Tabs */}
          <div className="flex flex-row items-center justify-center mt-16 border border-white/10 rounded-[22px] gap-2 sm:gap-4 p-2">
            {Object.keys(tabData).map((tab) => (
              <div
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={` px-4 py-2 text-center cursor-pointer text-sm sm:text-base ${
                  activeTab === tab
                    ? 'text-white font-bold bg-[#121212] rounded-[14px]'
                    : 'text-[#aaaaaa]'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Cards with animation */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transform transition-all duration-500 ${
              animate
                ? 'translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            {tabData[activeTab].map((card, index) => (
              <div
                key={index}
                className="card max-w-xs min-h-[220px]  bg-[#121212] p-4 rounded-lg shadow-lg flex flex-col justify-between items-center gap-4 text-center"
              >
                <div className={`logo w-16 h-16`}>
                  <Lottie
                    className={`w-full h-full bg-none`}
                    animationData={card.icon}
                  />
                </div>
                <h2 className="font-bold text-lg mt-4">{card.title}</h2>
                <p className="text-[#aaaaaa] text-sm sm:text-base flex-1 mt-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/** Section 4 - details of process */}
      <div
        ref={processRef}
        className="service-container p-8 sm:p-16 relative min-w-full min-h-screen flex flex-col justify-between items-center font-urbanist gap-8 bg-[#030303] text-white"
      >
        <div className="header-container w-full flex flex-col items-center justify-between gap-4">
          <div className="text-center font-urbanist px-4 text:xl sm:text-2xl">
            Process
          </div>
          <div className="text-3xl xs:text-4xl sm:text-7xl font-urbanist text-center py-1 max-w-2xl">
            Our easy 3-step method to{' '}
            <span className="font-instrumentSerif italic tracking-tighter font-thin">
              accelerate
            </span>{' '}
            your roadmap
          </div>
          <div className="relative inline-flex font-urbanist text-[#aaaaaa] text:xl sm:text-2xl max-w-xl lg:font-medium text-center mt-2 ">
            From ideation to execution, we work closely with you every step of
            the way
          </div>
        </div>
        <div className="details-container flex flex-col justify-between items-center md:flex-1 gap-8 ">
          {/* Tabs */}

          {/* Cards with animation */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transform transition-all duration-500 ${
              animate
                ? 'translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            {processData.map((card, index) => (
              <div
                key={index}
                className="card max-w-xs min-h-[220px]  bg-[#121212] p-4 rounded-lg shadow-lg flex flex-col justify-between items-center gap-4 text-center"
              >
                <div className={`logo w-16 h-16`}>
                  <Lottie
                    className={`w-full h-full bg-none`}
                    animationData={card.icon}
                  />
                </div>
                <h2 className="font-bold text-lg mt-4">{card.title}</h2>
                <p className="text-[#aaaaaa] text-sm sm:text-base flex-1 mt-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
