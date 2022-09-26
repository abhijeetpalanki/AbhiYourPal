import React from "react";
import { motion } from "framer-motion";
import profileAbout from "../images/profile-about.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src={profileAbout.src}
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          I'm Abhijeet. 💯 I acquired project and time management skills, as
          well as the ability to communicate with team members and clients while
          effectively meeting milestones and deadlines. As a Full Stack
          developer I've worked both with startups and large corporations to
          help build & scale their companies. 🌟 Along the journey I realized my
          passion to code on a multitude of web based projects for a range of
          clients, providing Web Design and Development (C#, .NET Framework,
          MVC, Entity Framework, SQL Server Web API, HTML, CSS, JS, jQuery,
          React.js, Vue.js, Angular, Bootstrap, Responsive Layouts). During my
          Masters Degree, I studied Computer Science, and therefore have a keen
          understanding of web development, object oriented programming and user
          experience design which I put to good use on every project I work on.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
