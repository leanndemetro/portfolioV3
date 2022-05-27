import {Link} from 'react-scroll'
  
  export default function HomeNav() {
    return (
      <header className="bg-black border-b-[1px] border-b-[#023368]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-[#023368] lg:border-none">
            <div className="flex items-center">
              
              <div className="hidden ml-10 space-x-8 lg:block">
              <Link activeClass="active" to="home" className="text-base font-medium text-white hover:text-indigo-200" spy={true} smooth={true}>Home</Link>
                  <Link to="about" className="text-base font-medium text-white hover:text-indigo-200" spy={true} smooth={true}>About</Link>
                 
                  <a key='tutorials' href='/tutorials' className="text-base font-medium text-white hover:text-indigo-200">
                    Tutorials
                  </a>
                  <a key='contact' href='/contact' className="text-base font-medium text-white hover:text-indigo-200">
                    Contact
                  </a>
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-[#023368] py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
           <a key='home' href='/' className="text-base font-medium text-white hover:text-indigo-50">
                Home
              </a>
           <button key='about' className="text-base font-medium text-white hover:text-indigo-50">
           <Link to="about" spy={true} smooth={true}>About</Link>
              </button>
           <a key='tutorials' href='/tutorials' className="text-base font-medium text-white hover:text-indigo-50">
                Tutorials
              </a>
           <a key='contact' href='contact' className="text-base font-medium text-white hover:text-indigo-50">
                Contact
              </a>
           
          </div>
        </nav>
      </header>
    )
  }
  