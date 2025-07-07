'use client'

import { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client"
import { motion } from 'framer-motion'
import Image from 'next/image'

type AboutData = {
  heading: string
  description: string
  experienceYears: number
  profileImage: string
}

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null)

  useEffect(() => {
    client.fetch(`*[_type == "about"][0] {
  heading,
  description,
  experienceYears,
  "profileImage": profileImage.asset->url
}`).then((data) => setAbout(data))
  }, [])

  if (!about) return <div className="text-white">Loading...</div>

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src={about.profileImage}
            alt="Profile"
            width={300}
            height={300}
            className="rounded-xl border-4 border-purple-500 object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          <h2 className="text-4xl font-bold">{about.heading}</h2>
          <p className="text-gray-300 text-lg">{about.description}</p>
          <p className="text-purple-400 font-semibold text-lg">
            Experience: {about.experienceYears}+ Years
          </p>
        </motion.div>
      </div>
    </section>
  )
}
