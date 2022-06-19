import skills from "../../assets/skillsData.json"

const people = [
    {
        name: 'Alyssa De Metro',
        role: 'Full-Stack Software Developer',
        imageUrl:
            '/images/AlyssaDeMetro.jpg'
    },
]

export default function About() {
    return (
        <div className="bg-black">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="space-y-5 col-span-2 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">About Alyssa</h2>
                        <p className="text-base text-white">
                            Alyssa De Metro is a 27 year old Orlando Native with a passion for technology. Her journey into programming began in her youth, coding out websites just for fun.
                            <br></br>
                            <br></br>
                            In 2020 she completed the University of Central Florida Full-Stack Web Developer Bootcamp, and began work as a freelance developer for local non-profits and small businesses. Since November of 2021 she has worked full time as a Full-Stack Software Engineer at Dabble Lab.
                            <br></br>
                            <br></br>
                            During this period she has found her true passion for programming, as well as for research and learning new technologies. Her current role includes working with a variety of large Global Companies, often using different technology stacks and languages daily. She has a love for technical writing, creating documentation and tutorials, and a passion for teaching and assisting others on their programming journey.
                        </p>
                    </div>
                    <div className="lg:col-span-1">
                        <ul
                            role="list"
                            className=""
                        >
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                                        </div>
                                        <div className="text-lg leading-6 text-white font-medium space-y-1">
                                            <h3>{person.name}</h3>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:pt-6 pt-6 pb-0  grid grid-cols-3 gap-8 ">
                    <div className="space-y-5 col-span-2 sm:space-y-4">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Technical Writing</h2>
                <p className="text-base text-white">
                    Alyssa has a passion for writing technical documentation and tutorials. She has a background in writing technical documentation for large companies, and has spearheaded a number of projects, including the creation of a documentation website and system for a well known global company.
                    </p>
                    <div className="text-base text-white">
                    Please see my second website containg my tutorials at 
                    <br></br>
                    <a className="pt-12 hover:italic text-2xl "target="__blank" href="https://tutorials-alyssademetro.vercel.app">tutorials-alyssademetro.vercel.app</a>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 md:pt-16 pb-0 gap-8 pt-6">
                    <div className="space-y-5 col-span-1 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Education</h2>
                        <p className="text-lg text-white">
                            University of Central Florida, Orlando, FL - 2020
                         </p>
                         <span className="text-base text-white">
                         Full-Stack Developer Bootcamp Certificate - View my Certificate on <a className="hover:italic" target="__blank" href="https://api.badgr.io/public/assertions/tDt35IJZQT-VVtAvMjxGfA?identity__email=leanndemetro%40gmail.com"> Badgr</a>
                         </span>
                        <br></br>
                         <p className=" text-base text-white">
                         Completion of the following: 12-week program, 240 contact hours plus individual & group projects utilizing HTML/CSS, Javascript, third-party APIs (jQuery, Bootstrap), API Consumption, Git, MySQL, Node.js, Authentication, ORM, Template Engines, and Express.js.
                         </p>
                    </div>
                    <div className="space-y-5 text-white col-span-1 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Technical Skills</h2>
                        <p className="sm:text-base md:text-lg">
                        {skills.map((skill) => (
                            <a key={skill.name} className="hover:italic cursor-pointer" target="__blank" href={skill.href}>{skill.name} - </a>  
                        ))}
                        <span>and more...</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}