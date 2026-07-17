import { CaseStudies } from "./components/CaseStudies"
import HomeBanner from "./components/HomeBanner"
import { OurProcess } from "./components/OurProcess"
import { OurTechnology } from "./components/OurTechnology"
import {ServicesSection} from "./components/ServiceSection"

export const HomeComponent = () => {
  return (
    <div>
      <HomeBanner/>
      <ServicesSection/>
      <OurTechnology/>
      <OurProcess/>
      <CaseStudies/>
    </div>
  )
}
