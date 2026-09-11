import Hero from "../components/Hero"
import HomeProperties from "../components/HomeProperties"
import InfoBoxes from "../components/InfoBoxes"

const Homepage = async() => {
  return (
    <div>
        <Hero />
        <InfoBoxes />
        <HomeProperties />
    </div>
  )
}

export default Homepage
 