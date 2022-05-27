import About from "./about"
import HomeHero from "./hero"


export default function AllSections() {
   
        return (
            <div >
                <div id="home" >
                    <HomeHero />
                 </div>
                <div id="about" >
                    <About />
                 </div>
                
       
            </div>
        )
}
