import { client } from '@/sanity/lib/client'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import SocialLinks from '@/components/Social'
import Contact from '@/components/Contact'
export default async function Home() {
  const hero = await client.fetch(`*[_type == "hero"][0] {
    name,
    tagline,
    intro,
    "heroImage": heroImage.asset->url
  }`)


  const about = await client.fetch(`*[_type == "about"][0] {
  heading,
  description,
  experienceYears,
  "profileImage": profileImage.asset->url
}`)


const contact = await client.fetch(`*[_type == "contact"][0] {
        email,
        phone,
        address
      }`)

const social = await client.fetch(`*[_type == "social"]{
        platform,
        url
      }`)

const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc) {
  title,
  description,
  "image": image.asset->url,
  liveDemo,
  github,
  techStack,
  slug
}`)

  return (
    <>
      <Hero hero={hero} />
      <About about = {about} />
      <Projects projects = {projects}/>
      <SocialLinks social={social}/>
      <Contact contact = {contact}/>
    </>
  )
}