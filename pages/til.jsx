import Image from "next/image";
import React from "react";
import TIL from "../public/assets/projects/Today I Learned.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const twitch = () => {
  return (
    <div className="w-full">
      <Head>
        <title>UTTEJ | Today I Learned</title>
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
          src={TIL}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Today I Learned!</h2>
          <h3>React JS / Supabase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This Project was made when I was Learning React from the Full Stack
            Crash Course by Jonas on Udemy. I&#39;ve used React, SCSS, and
            Supabase for this project. The users will be able to share their
            thoughts, which will be saved in supabase and they can also react to
            them.
          </p>
          <a
            href="https://github.com/UttejK/An-App-in-a-weekend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://uttejk-today-i-learned.netlify.app/"
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
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Supabase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
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

export default twitch;
