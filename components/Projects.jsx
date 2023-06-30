import Image from "next/image";
import Link from "next/link";
import React from "react";
import Falcon from "../public/assets/projects/F_A_L_C_O_N.png";
import NeoFi from "../public/assets/projects/NeoFi.png";
import TIL from "../public/assets/projects/Today I Learned.png";
import TTC from "../public/assets/projects/ThreeJS T-Shirt Customizer.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="3D T-Shirt Customizer"
            backgroundImg={TTC}
            projectUrl="/ttc"
            tech="React Three Fiber"
          />
          <ProjectItem
            title="NeoFi"
            backgroundImg={NeoFi}
            projectUrl="/nf"
            tech="React JS"
          />
          <ProjectItem
            title="Today I Learned!"
            backgroundImg={TIL}
            projectUrl="/til"
            tech="React JS"
          />
          <ProjectItem
            title="F.A.L.C.O.N"
            backgroundImg={Falcon}
            projectUrl="/falcon"
            tech="React Three Fiber"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
