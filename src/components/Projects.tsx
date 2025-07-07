'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

type Project = {
  title: string
  description: string
  image?: string
  liveDemo?: string
  github?: string
  techStack?: string[]
  slug: { current: string }
}

export default function Projects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    if (sectionRef.current && projects.length > 0) {
      const cards = sectionRef.current.querySelectorAll('.project-card')

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      ScrollTrigger.refresh()
    }
  }, [projects])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-gray-950 py-20 px-6 text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-md mb-4 object-cover"
                />
              )}

              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>

              {project.techStack && (
                <p className="text-sm text-purple-300 mb-4">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </p>
              )}

              <div className="flex gap-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-600 text-purple-400 px-4 py-2 rounded hover:bg-purple-600 hover:text-white transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
