import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Spline from '@splinetool/react-spline';
import Lottie from 'lottie-react';
import RocketLogo from '../../public/assets/logo.json';
const inter = Inter({ subsets: ['latin'] });
import { useEffect, useRef, useState } from 'react';
import { set } from '@project-serum/anchor/dist/cjs/utils/features';

interface Card {
  title: string;
  description: string;
}

interface TabData {
  [key: string]: Card[];
}

const tabData: TabData = {
  'LLM Integrations': [
    { title: 'Feature 1', description: 'Description for Feature 1' },
    { title: 'Feature 2', description: 'Description for Feature 2' },
    { title: 'Feature 3', description: 'Description for Feature 3' },
  ],
  'Web App': [
    { title: 'Web Feature 1', description: 'Description for Web Feature 1' },
    { title: 'Web Feature 2', description: 'Description for Web Feature 2' },
    { title: 'Web Feature 3', description: 'Description for Web Feature 3' },
  ],
  Finetuning: [
    { title: 'Finetuning Feature 1', description: 'Description for Feature 1' },
    { title: 'Finetuning Feature 2', description: 'Description for Feature 2' },
    { title: 'Finetuning Feature 3', description: 'Description for Feature 3' },
  ],
};

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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isOutOfViewRef = useRef(true); // Ref to track 'out of view' state
  const scrollDirectionRef = useRef('down');

  useEffect(() => {
    const currentSection = sectionRef.current;

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
      { threshold: 0.8 } // 60% of the section must be visible to trigger
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
            <div className="pl-2 pr-4 py-2 cursor-pointer ">About Us</div>
            <div className="px-4 py-2 cursor-pointer">Results</div>
            <div className="px-4 py-2 cursor-pointer">Services</div>
            <div className="px-4 py-2 cursor-pointer">Process</div>
            <div className="px-4 py-2 cursor-pointer">FAQs</div>
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
              <div className="px-4 py-2 cursor-pointer">About Us</div>
              <div className="px-4 py-2 cursor-pointer">Results</div>
              <div className="px-4 py-2 cursor-pointer">Services</div>
              <div className="px-4 py-2 cursor-pointer">Process</div>
              <div className="px-4 py-2 cursor-pointer">FAQs</div>
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
          <div className="relative inline-flex font-urbanist text-[#aaaaaa] text:xl sm:text-2xl max-w-xl lg:font-medium text-center mt-2 ">
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
        ref={sectionRef}
        className={`relative min-w-full min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-[#030303] transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 blur-0' : 'opacity-100 blur-lg'
        }`}
      >
        <div className="text-white text-3xl xs:text-4xl sm:text-5xl font-urbanist text-center mx-8 leading-tight">
          Here at Kuzushi Labs we engineer{' '}
          <span className="italic font-instrumentSerif font-thin tracking-tighter">
            AI
          </span>{' '}
          native solutions. We are committed to creating innovative{' '}
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
      <div className="service-container p-16 relative min-w-full min-h-screen flex flex-col justify-between items-center font-urbanist gap-8 bg-[#030303]">
        <div className="header-container w-full flex flex-col items-center justify-between gap-4">
          <div className="text-center font-urbanist px-4">Services</div>
          <div className="text-6xl text-center py-1">
            How can we help{' '}
            <span className="font-instrumentSerif italic tracking-tighter font-thin">
              you?
            </span>
          </div>
          <div className="text-center text-[#aaaaaa] max-w-[450px]">
            From ideation to execution we got you covered with our wide range of
            services
          </div>
        </div>
        <div className="details-container flex flex-col justify-between items-center flex-1 gap-8">
          {/* Tabs */}
          <div className="flex flex-row items-center justify-center">
            {Object.keys(tabData).map((tab) => (
              <div
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 cursor-pointer ${
                  activeTab === tab ? 'text-white font-bold' : 'text-[#aaaaaa]'
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
                className="card w-[250px] h-[250px] bg-[#121212] p-4 rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <h2 className="font-bold text-lg">{card.title}</h2>
                <p className="text-[#aaaaaa]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
