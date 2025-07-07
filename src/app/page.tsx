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

  return (
    <>
      <Hero hero={hero} />
      <About />
      <Projects />
      <SocialLinks/>
      <Contact/>
    </>
  )
}
