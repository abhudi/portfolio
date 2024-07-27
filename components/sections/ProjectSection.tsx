"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import ComingSoon from "@/public/assets/projects/coming-soon.png"
import Ecommerce from "@/public/assets/projects/ecommerce.png"
import GuessMyNumber from "@/public/assets/projects/guess-my-number.png"
import Music from "@/public/assets/projects/music-app.png"
import PortfolioV2 from "@/public/assets/projects/portfolio-v2.png"
import VSCode from "@/public/assets/projects/vscode.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Design isn&apos;t about philosophy; it&apos;s about practicality..</div>
              <div>Effective design is clear. Exceptional design is invisible.</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href="https://github.com/abhudi"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Snufy Audio Player",
    description:
      "This is a online music player which is similar to the spotify.",
    techStacks: ["ReactJS", "Javascript", "Gsap"],
    image: VSCode,
    githubURL: "https://snupyfyad.vercel.app/",
    githubApi: "https://snupyfyad.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Website",
    description:
      "It is a Website which is used to find the current rate of the currency website",
    techStacks: ["ReactJS", "GSAP", "Nodejs"],
    image: Ecommerce,
    githubURL: "https://abhicrptoapp.vercel.app/",
    githubApi: "https://abhicrptoapp.vercel.app/",
  },
  {
    id: 3,
    title: "Dashboard",
    description:
      "It is Dummy Dashboard which is useful for data management",
    techStacks: ["ReactJS", "GSAP", "Nodejs"],
    image: Music,
    githubURL: "https://react-dashboard-abhishek-deshmukhs-projects-a7a84ef2.vercel.app/",
    githubApi: "https://react-dashboard-abhishek-deshmukhs-projects-a7a84ef2.vercel.app/",
  },
  {
    id: 4,
    title: "Apple Mobile Site",
    description:
      "It is Apple Product Branding Site , which is developed for the learning purpose.",
    techStacks: ["ReactJS", "3js", "GSAP"],
    image: GuessMyNumber,
    githubURL: "https://github.com/ShinnTNT/Guess-My-Number",
    githubApi: "https://api.github.com/repos/ShinnTNT/Guess-My-Number",
  },
  {
    id: 5,
    title: "Portfolio V2",
    description:
      "An elevated and polished presentation of my work, crafted to showcase my skills and projects through a contemporary and streamlined interface.",
    techStacks: ["ReactJS", "ShadnUI", "GSAP"],
    image: PortfolioV2,
    githubURL: "https://abhishekdeshmukhportfolio.netlify.app/",
    githubApi: "https://abhishekdeshmukhportfolio.netlify.app/",
  },
  {
    id: 6,
    title: "Kamwalaa",
    description: "It is a service base website which provides services like plumber, carpenter etc",
    techStacks: ["HTML", "Bootstrap", "GSAP"],
    image: ComingSoon,
    githubURL: "https://kamwalaa.netlify.app/",
    githubApi: "https://kamwalaa.netlify.app/",
  },
]
