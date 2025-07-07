'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'

type Social = {
  platform: string
  url: string
}

export default function SocialLinks() {
  const [socials, setSocials] = useState<Social[]>([])

  useEffect(() => {
    client
      .fetch(`*[_type == "social"]{
        platform,
        url
      }`)
      .then((data) => setSocials(data))
  }, [])

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <FaGithub size={24} />
      case 'linkedin':
        return <FaLinkedin size={24} />
      case 'twitter':
        return <FaTwitter size={24} />
      default:
        return <FaGlobe size={24} />
    }
  }

  return (
    <section className="bg-gray-950 text-white py-20 px-6 scroll-mt-20" id="socials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-purple-400">Connect with Me</h2>

        <motion.div
          className="flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {socials.map((social) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:text-purple-500 transition text-lg"
              whileHover={{ scale: 1.1 }}
            >
              {getIcon(social.platform)}
              {social.platform}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}