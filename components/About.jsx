import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hey there! I&#39;m Uttej, a passionate fresher with a strong focus
            on web development. I have a diverse skill set and a keen interest
            in creating dynamic and responsive websites. My expertise lies in
            frontend development, where I have worked extensively with
            technologies such as React, Next.js, and Three.js. I have hands-on
            experience building multiple projects, ranging from interactive web
            applications to immersive 3D experiences.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my journey, I have developed a deep understanding of
            frontend technologies and best practices. I am skilled in crafting
            clean and efficient code, optimizing website performance, and
            ensuring a seamless user experience. I am particularly excited about
            leveraging the power of React and Next.js to create intuitive and
            visually appealing interfaces. Additionally, my experience with
            Three.js allows me to bring ideas to life by building immersive and
            interactive 3D experiences on the web.{" "}
          </p>
          <p className="py-2 text-gray-600">
            I am a dedicated learner, always eager to stay up-to-date with the
            latest advancements in web development. With a strong foundation in
            frontend technologies and a passion for creating exceptional user
            experiences, I am ready to contribute to innovative web projects and
            be a valuable asset to any development team.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
