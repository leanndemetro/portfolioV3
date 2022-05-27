
import AllSections from "../components/homeSections/allSections"
import HomeNav from "../components/homeSections"
import Footer from "../components/footer"
export default function Home() {
  
  return (
    <div className="flex flex-col h-screen font-sans font-extralight">
  <HomeNav />
      <AllSections />
    <Footer />
  </div>  )
}
