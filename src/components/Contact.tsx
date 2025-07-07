'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

type ContactInfo = {
  email: string
  phone: string
  address: string
}

export default function Contact() {
  const [contact, setContact] = useState<ContactInfo | null>(null)

  useEffect(() => {
    client
      .fetch(`*[_type == "contact"][0] {
        email,
        phone,
        address
      }`)
      .then(setContact)
  }, [])

  if (!contact) return <div className="text-white">Loading...</div>

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-purple-400">Contact Me</h2>

        <motion.div
          className="space-y-6 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex justify-center items-center gap-2">
            <MdEmail className="text-purple-500" size={24} />
            {contact.email}
          </p>
          <p className="flex justify-center items-center gap-2">
            <MdPhone className="text-purple-500" size={24} />
            {contact.phone}
          </p>
          <p className="flex justify-center items-center gap-2">
            <MdLocationOn className="text-purple-500" size={24} />
            {contact.address}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
