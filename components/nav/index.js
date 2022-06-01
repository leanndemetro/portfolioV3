import { useRouter } from 'next/router'

  
  export default function Nav() {
    const router = useRouter()
    return (
      <header className="bg-black border-b-[1px] border-b-[#023368]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-[#023368] lg:border-none">
            <div className="flex items-center">
              
              <div className="hidden ml-10 space-x-8 lg:block">
              <button type="button" onClick={() => router.push('/')} className="text-base font-medium text-white hover:text-indigo-200" smooth={+true}>
                  Home</button>
              <button type="button" onClick={() => router.push('/about')} className="text-base font-medium text-white hover:text-indigo-200" smooth={+true}>
                  About</button>
                {/* <button type="button" onClick={() => router.push('/tutorials')} className="text-base font-medium text-white hover:text-indigo-200">
                    Tutorials
                  </button> */}
                  <button type="button" onClick={() => router.push('/contact')} className="text-base font-medium text-white hover:text-indigo-200">
                    Contact
                  </button>
              </div>
            </div>
            <div className="ml-10 space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg> 
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <button type="button" onClick={() => router.push('/')} className="text-base font-medium text-white hover:text-indigo-50">
                Home
              </button>
          <button type="button" onClick={() => router.push('/about')} className="text-base font-medium text-white hover:text-indigo-50">
                About
              </button>
               {/* <button type="button" onClick={() => router.push('/tutorials')} className="text-base font-medium text-white hover:text-indigo-50">
                Tutorials
              </button> */}
           <button type="button" onClick={() => router.push('/contact')} className="text-base font-medium text-white hover:text-indigo-50">
                Contact
              </button>
          </div>
        </nav>
      </header>
    )
  }
  