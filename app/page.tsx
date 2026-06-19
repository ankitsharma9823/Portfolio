import AboutMe from "@/components/section/AboutMe"
import Experience from "@/components/section/Experience"
import Hero from "@/components/section/Hero"
import Project from "@/components/section/Project"
import Services from "@/components/section/Service"
import Contact from "@/components/section/Contact"

const page = () => {
  return (
    <div>
      <div>
        <Hero />
        <Project />
        <Experience />
        <AboutMe />
        <Services />
        <Contact />
      </div>
    </div>
  )
}

export default page