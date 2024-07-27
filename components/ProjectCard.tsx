"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { Project } from "./sections/ProjectSection"

interface Props {
  item: Project
}

export default function ProjectCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      cardRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power1.inOut",
      }
    )
  }, [])

  // useEffect(() => {
  //   let ignore = false
  //   if (!item.githubApi) return
  //   async function fetchData() {
  //     const response = await fetch(item.githubApi)
  //     const data = await response.json()
  //     const stargazersCount = data.stargazers_count
  //     const stargazersUrl = data.stargazers_url

  //     if (stargazersCount && stargazersUrl && !ignore) {
  //       setStarCount(stargazersCount)
  //     }
  //   }

  //   fetchData()
  //   return () => {
  //     ignore = true
  //   }
  // }, [item.githubApi])

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden col-span-1 w-full flex flex-col shadow-sm border rounded-[0.75rem] h-[380px]"
    >
      <Image priority alt={item.title} src={item.image} />

      <div className="flex-1  group relative after:content-[''] after:rounded-full after:absolute after:content after:z-[10] after:w-[32px] after:h-[32px] after:bg-accentColor after:scale-[1] after:bottom-[-24px] after:right-[-24px] after:origin-center after:transition-transform after:duration-500 after:ease-out hover:after:scale-[25] overflow-hidden p-4 flex flex-col items-start justify-between">
        <div className="w-full px-4 absolute left-[50%] -translate-x-1/2 z-20 flex flex-col gap-2 items-start ">
          <div className="w-full flex justify-between items-center">
            <div className="text-accentColor group-hover:text-white font-medium">
              {item.title}
            </div>
            <div className="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="scale-[0.7] group-hover:-rotate-12"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <div className="font-medium text-sm"></div>
            </div>
          </div>
          <div className="text-black text-sm group-hover:text-white">
            {item.description}
          </div>
        </div>

        <div className="w-full px-4 left-[50%] -translate-x-1/2 bottom-[10%] absolute z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {item.techStacks.map((tech, index) => {
              return index % 2 === 0 ? (
                <div
                  key={index}
                  className="px-2 py-[3px] shadow-sm border border-accentColor bg-white rounded-xl text-sm text-black flex justify-center items-center"
                >
                  {tech}
                </div>
              ) : (
                <div
                  key={index}
                  className="px-2 py-[3px] shadow-sm bg-accentColor group-hover:border-[0.01px] rounded-xl text-sm text-white flex justify-center items-center"
                >
                  {tech}
                </div>
              )
            })}
          </div>

          {item.githubURL && (
            <a
              href={item.githubURL}
              title={`See '${item.title}' on Github`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <div className="group-hover:text-white">Visit</div>
              <svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>web</title> <path d="M0 15.656v-0.031c0.281-3.625 1.594-6.344 3.875-8.063 2.25-1.75 4.688-2.594 7.344-2.594 2.781-0.031 5.375 0.906 7.688 2.781 2.344 1.844 3.5 4.594 3.5 8.156v0.219c0 3.594-1.156 6.281-3.5 8.125-2.344 1.875-4.938 2.813-7.719 2.813h-0.125c-2.719-0.031-5.219-0.969-7.531-2.844-2.313-1.844-3.5-4.688-3.531-8.563zM10.531 10.75v-4.938h-0.75c-0.156 0.188-0.281 0.406-0.406 0.594s-0.25 0.375-0.375 0.594c-0.125 0.188-0.281 0.438-0.375 0.625-0.125 0.188-0.219 0.375-0.313 0.594-0.188 0.313-0.344 0.625-0.469 0.906-0.156 0.281-0.281 0.563-0.375 0.813 0.188 0.125 0.406 0.281 0.656 0.375 0.281 0.094 0.563 0.188 0.844 0.25 0.313 0.063 0.594 0.094 0.844 0.125 0.281 0.031 0.531 0.063 0.719 0.063zM11.844 5.813v4.906c0.156 0 0.344 0.031 0.531 0 0.188 0 0.406-0.031 0.594-0.063 0.344-0.063 0.75-0.156 1.063-0.25 0.344-0.125 0.656-0.281 0.875-0.469-0.375-0.906-0.781-1.625-1.188-2.313s-0.875-1.281-1.375-1.781v-0.031h-0.5zM8.469 6.094v-0.031c-0.219 0.094-0.438 0.25-0.688 0.344-0.219 0.094-0.5 0.219-0.719 0.344-0.438 0.219-0.875 0.469-1.313 0.75-0.406 0.281-0.813 0.594-1.156 0.906 0.125 0.125 0.281 0.25 0.406 0.344s0.281 0.219 0.438 0.344c0.125 0.063 0.281 0.156 0.438 0.281 0.156 0.094 0.344 0.219 0.531 0.344 0.25-0.563 0.5-1.156 0.813-1.688 0.313-0.563 0.656-1.094 1-1.563 0.031-0.063 0.063-0.125 0.125-0.188 0.031-0.031 0.063-0.125 0.125-0.188zM18.031 8.406v-0.031c-0.781-0.594-1.469-1.094-2.156-1.406s-1.375-0.625-2-0.875c0.5 0.5 0.938 1.125 1.219 1.719 0.313 0.625 0.625 1.281 0.875 1.906 0.125-0.063 0.281-0.125 0.469-0.25 0.156-0.094 0.375-0.188 0.563-0.281 0.188-0.125 0.344-0.25 0.531-0.375 0.188-0.156 0.375-0.281 0.5-0.406zM17.5 15.375h3.594c0-1.156-0.25-2.25-0.719-3.375-0.438-1.094-1.063-2-1.844-2.781v-0.031c-0.156 0.25-0.375 0.469-0.594 0.625-0.25 0.156-0.469 0.281-0.719 0.406-0.156 0.094-0.313 0.219-0.469 0.281-0.156 0.094-0.375 0.156-0.531 0.25 0.125 0.25 0.25 0.531 0.375 0.781 0.094 0.281 0.25 0.594 0.313 0.875 0.188 0.5 0.313 1.031 0.438 1.563 0.094 0.469 0.156 0.969 0.156 1.406zM6.188 10.75v-0.031c-0.25-0.125-0.531-0.219-0.75-0.344-0.219-0.156-0.438-0.313-0.625-0.438-0.188-0.094-0.375-0.219-0.531-0.344s-0.281-0.25-0.406-0.375c-0.813 0.781-1.406 1.656-1.781 2.688-0.406 1.031-0.688 2.188-0.813 3.438h3.844c0-0.875 0.125-1.719 0.344-2.563 0.188-0.875 0.469-1.531 0.719-2.031zM10.531 15.344v-3.594c-0.25 0.031-0.563 0.031-0.844 0-0.313-0.031-0.625-0.125-0.906-0.219-0.25-0.063-0.563-0.125-0.813-0.219-0.281-0.063-0.563-0.188-0.781-0.313-0.188 0.313-0.344 0.688-0.469 1.094-0.156 0.375-0.25 0.781-0.344 1.156-0.063 0.375-0.094 0.781-0.125 1.125s-0.063 0.688-0.063 0.969h4.344zM11.844 11.813v3.531h4.625c0-0.188 0-0.406-0.031-0.656-0.063-0.219-0.094-0.5-0.125-0.75-0.094-0.375-0.188-0.781-0.313-1.156-0.125-0.344-0.25-0.688-0.406-0.969-0.063-0.156-0.125-0.344-0.188-0.469-0.094-0.156-0.188-0.25-0.25-0.344-0.344 0.25-0.813 0.406-1.375 0.531-0.531 0.125-1.156 0.25-1.719 0.281h-0.219zM5.125 16.375h-3.844c0 0.531 0.094 1.125 0.25 1.844 0.156 0.75 0.469 1.438 0.813 2.188 0.156 0.375 0.344 0.75 0.531 1.125 0.219 0.344 0.469 0.719 0.719 1.063 0.188-0.125 0.375-0.219 0.531-0.313 0.188-0.094 0.406-0.219 0.594-0.313 0.219-0.094 0.438-0.188 0.688-0.313 0.219-0.094 0.5-0.219 0.781-0.344-0.25-0.781-0.531-1.531-0.719-2.375-0.219-0.813-0.344-1.625-0.344-2.531v-0.031zM10.531 20.031v-3.656h-4.344c0 0.25 0.031 0.625 0.094 1 0.031 0.375 0.125 0.781 0.188 1.188 0.125 0.438 0.219 0.875 0.344 1.25s0.25 0.688 0.375 0.969c0.563-0.219 1.125-0.375 1.5-0.469 0.406-0.125 0.781-0.219 1.156-0.25h0.344c0.125-0.031 0.25-0.031 0.344-0.031zM11.844 16.375v3.625c0.219 0.031 0.469 0.063 0.719 0.094 0.281 0.031 0.625 0.094 0.906 0.156l0.469 0.094c0.156 0.063 0.344 0.094 0.5 0.125 0.188 0.063 0.375 0.094 0.563 0.156 0.156 0.063 0.313 0.094 0.438 0.156 0.406-1.031 0.656-1.875 0.813-2.594 0.156-0.688 0.219-1.281 0.219-1.781v-0.031h-4.625zM21.094 16.406v-0.031h-3.594v0.188c-0.031 0.594-0.125 1.281-0.25 2-0.125 0.688-0.406 1.5-0.781 2.5 0.5 0.25 0.969 0.5 1.344 0.75s0.719 0.531 0.969 0.781c0.531-0.531 1-1.25 1.406-2.188 0.406-0.906 0.688-1.844 0.844-2.844 0.031-0.188 0.031-0.375 0.063-0.563v-0.594zM10.531 25.906v-4.875c-0.781 0.125-1.438 0.281-1.938 0.406s-0.875 0.25-1.125 0.375c0.188 0.469 0.375 0.875 0.563 1.25 0.188 0.344 0.406 0.719 0.594 1.031 0.063 0.125 0.188 0.25 0.281 0.406 0.094 0.125 0.156 0.281 0.25 0.406 0.094 0.156 0.188 0.344 0.281 0.531 0.125 0.156 0.219 0.344 0.344 0.469h0.75zM11.844 25.906h0.719c0.281-0.219 0.563-0.531 0.781-0.875 0.25-0.344 0.531-0.75 0.719-1.094 0.219-0.406 0.438-0.781 0.625-1.156s0.344-0.719 0.469-0.969c-0.344-0.125-0.813-0.25-1.281-0.375s-1.125-0.25-2.031-0.375v4.844zM18.031 23.344v-0.031c-0.063-0.094-0.188-0.219-0.281-0.313s-0.25-0.219-0.406-0.313c-0.125-0.094-0.281-0.188-0.469-0.281s-0.438-0.219-0.656-0.344c-0.125 0.25-0.344 0.688-0.656 1.281-0.281 0.594-0.781 1.313-1.406 2.094 0.781-0.125 1.469-0.406 2.094-0.781 0.688-0.344 1.281-0.813 1.781-1.313zM6.406 22.344v-0.031c-0.219 0.125-0.563 0.281-0.906 0.438-0.375 0.156-0.781 0.344-1.156 0.594 0.219 0.188 0.438 0.375 0.625 0.5 0.188 0.156 0.406 0.281 0.594 0.406 0.344 0.219 0.75 0.438 1.156 0.625s0.906 0.375 1.531 0.563c-0.219-0.25-0.375-0.563-0.531-0.813s-0.344-0.5-0.5-0.75-0.281-0.531-0.406-0.781c-0.156-0.25-0.281-0.5-0.406-0.75z"></path> </g></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
