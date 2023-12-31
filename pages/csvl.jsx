import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import CSVL from "../public/assets/projects/CSVLoader.png";

import Link from "next/link";
import Head from "next/head";

const property = () => {
  // console.log(CSVL);
  return (
    <div className="w-full">
      <Head>
        <title>UTTEJ | CSV Loader</title>
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
          src={CSVL}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CSV Loader for Blender</h2>
          <h3>Python, Blender</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a script for the open source software Blender. The users can
            simply load the script.py into Blender&#39;s in-built text editor
            and run it when they have an active selection in the 3D Viewport.
            This Project is not a web project, so I&#39;ve shared the code from
            where the project can be downloaded and also the link to
            Blender&#39;s official website, so that the users can download the
            latest build directly from the source. The goal of this project to
            use the features of a csv file and drive the attributes that can be
            used to do impressive things within Blender. The Environment Scene
            shown in the cover image and{" "}
            <a
              href={CSVL.src}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              here
            </a>{" "}
            was created using the same script.
          </p>
          <a
            href="https://github.com/UttejK/CSVLoader"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Blender</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Blender
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

export default property;
