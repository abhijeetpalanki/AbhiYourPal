import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "./../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        className="object-cover w-24 h-24 transition duration-300 ease-in-out border-gray-500 rounded-full md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
      />
      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
