import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>UTTEJ | Resume</title>
        <meta
          name="description"
          content="I&#39;m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px] w-full">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Uttej Kuruma</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/uttej-kuruma/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/uttejk"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Machine Learning{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2">Web Development</p>
            <p className="py-2">Machine Learning</p>
            <p className="py-2">Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I&#39;m Uttej, as a fresher, I have a passion for Data analysis.
          Machine learning, Python and Web development. I&#39;ve worked on
          projects using advanced Machine learning models and multiple
          responsive Websites using React and also ThreeJS. I&#39;ve also
          created a prototype Metaverse using Unreal Engine and Blender,
          focusing on High-performance optimization.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span> | </span>Front-End Developer
            <span> | </span>HTML
            <span> | </span>CSS
            <span> | </span>Javascript
            <span> | </span>FramerMotion
            <span> | </span>Next JS
            <span> | </span>React
            <span> | </span>Tailwind
            <span> | </span>React Three Fiber
            <span> | </span>ThreeJS
            <span> | </span>Python
            <span> | </span>C++
            <span> | </span>Blender
            <span> | </span>Houdini
            <span> | </span>Autodesk Maya
            <span> | </span>Unreal Engine 5<span> | </span>Autodesk Revit
            <span> | </span>Autodesk AutoCAD
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Internship Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">LTIMindtree</span>
            <span className="px-2">|</span>Mumbai, India
          </p>
          <p className="py-1 italic">
            Software Developer Intern - R&D Metaverse Development Project (July
            2022 - December 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built an end-to-end VR system for interpersonal and mass
              communication primarily targeted towards virtual learning and
              classroom environments.
            </li>
            <li>
              Used Blender for 3D asset modelling and Unreal Engine 5 to build
              the virtual world.
            </li>
            <li>
              Optimized the networking to focus on multiuser interactions and
              targeted the rendering towards lower end hardware typically
              associated with students.
            </li>
          </ul>
        </div>
        <a href="/UTTEJ_K_Front_End_Dev_Resume.pdf" target="_blank">
          <p className="text-center py-3 px-8 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Download Detailed Resume
          </p>
        </a>
      </div>
    </>
  );
};

export default resume;
