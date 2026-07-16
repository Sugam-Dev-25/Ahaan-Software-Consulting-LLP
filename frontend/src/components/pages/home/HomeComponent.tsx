import { CaseStudies } from "./components/CaseStudies"
import { OurProcess } from "./components/OurProcess"
import { OurTechnology } from "./components/OurTechnology"
import {ServicesSection} from "./components/ServiceSection"

export const HomeComponent = () => {
  return (
    <div>
      <ServicesSection/>
      <OurTechnology/>
      <OurProcess/>
      <CaseStudies/>
    </div>
  )
}
