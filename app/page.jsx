import Hero from "../components/Hero"
import HomeProperties from "../components/HomeProperties"
import InfoBoxes from "../components/InfoBoxes"
import connectDB from "../config/database"

const Homepage = async() => {
  await connectDB();
  return (
    <div>
        <Hero />
        <InfoBoxes />
        <HomeProperties />
    </div>
  )
}

export default Homepage
 