import Image from "next/image";
import React from "react";
import NeoFi from "../public/assets/projects/NeoFi.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const netflix = () => {
  return (
    <div className="w-full">
      <Head>
        <title>UTTEJ | NeoFi</title>
        <meta
          name="description"
          content="I&#39;m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={NeoFi}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">NeoFi</h2>
          <h3>React JS / Tailwind / BinanceApi</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and Binance API. I made this
            project in order to try out APIs and explore the reactive nature of
            React JS. The users can use this application to estimate the amount
            of crypto currency they can purchase based on the amount they want
            to invest. The amount of detail put into this project is
            increadible. I&#39;ve even used vector masks for the notch of the
            card.
          </p>
          <a
            href="https://github.com/UttejK/NeoFi-UI"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://uttejk-neofi.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Binance API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
