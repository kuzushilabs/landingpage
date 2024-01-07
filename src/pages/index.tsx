import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Spline from '@splinetool/react-spline';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const handleContactClick = () => {
    window.open('https://calendly.com/saxenasahab/between-two-ferns', '_blank');
  };

  return (
    <>
      <div className="relative min-w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <Spline
          className="absolute w-full h-full"
          scene="https://prod.spline.design/AHdTLBTO6jQVwZVB/scene.splinecode"
        />
        <div className="relative bottom-10 inline-flex font-urbanist text-white text-6xl sm:text-8xl md:text-9xl lg:text-[144px] xl:text-[144px] font-bold">
          {/* <div className="z-10 text-center font-urbanist text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold"> */}
          kuzushi labs
        </div>
        <div className="relative inline-flex font-urbanist text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {/* <div className="z-10 text-center font-urbanist text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold"> */}
          we build stuff
        </div>
        <button
          className="relative sm:text-xl md:text-xl lg:text-xl text-black font-urbanist font-bold mt-32 sm:mt-32 md:mt-32 lg:mt-32"
          onClick={handleContactClick}
        >
          {/* <button className="z-10 text-base md:text-lg lg:text-xl text-black font-bold mt-8 md:mt-16 lg:mt-32"> */}
          <div className="absolute inset-x-0 h-full -bottom-2 bg-gray-200 rounded-2xl"></div>

          <div className="relative bg-gray-100 border border-gray-100 rounded-2xl py-2 px-10 sm:py-3 sm:px-20 md:py-3 md:px-20 lg:py-3 lg:px-20 transition transform duration-200 hover:translate-y-1 active:translate-y-2">
            contact us
          </div>
        </button>
      </div>
      {/** Section 2 - details of expertise */}
      {/* <div className="relative min-w-full min-h-screen flex flex-col justify-center items-center bg-black border-t p-4 md:p-8">
        <div className="text-white text-xl font-urbanist font-semibold">
          We are a bunch of crypto degens bringing order to the chaos.
        </div>
      </div> */}
    </>
  );
}
