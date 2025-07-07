'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type HeroData = {
  name: string
  tagline: string
  intro: string
  heroImage: string
}

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between p-6">
      <motion.div
        className="space-y-6 md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I am {hero.name}</h1>
        <p className="text-xl text-purple-400">{hero.tagline}</p>
        <p className="text-lg text-gray-300">{hero.intro}</p>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src={hero.heroImage}
          alt={hero.name}
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-purple-500"
        />
      </motion.div>
    </section>
  )
}
