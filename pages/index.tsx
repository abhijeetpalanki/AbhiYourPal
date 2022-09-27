import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Link from "next/link";

import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "./../utils/fetchPageInfo";
import { fetchExperinces } from "./../utils/fetchExperinces";
import { fetchSkills } from "./../utils/fetchSkills";
import { fetchProjects } from "./../utils/fetchProjects";
import { fetchSocials } from "./../utils/fetchSocials";
import { urlFor } from "./../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Abhi Your Pal</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0"
              src={urlFor(pageInfo.profilePic).url()}
              alt={pageInfo.name}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperinces();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};
