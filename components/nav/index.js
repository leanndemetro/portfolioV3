
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Contact', href: '/contact' }
  ]
  
  export default function Nav() {
    return (
      <header className="bg-black border-b-[1px] border-b-[#023368]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-[#023368] lg:border-none">
            <div className="flex items-center">
              
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-200">
                    {link.name}
                  </a>
                ))}
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
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
            <a key='about' href='/about' className="text-base font-medium text-white hover:text-indigo-50">
                About
              </a>
          </div>
        </nav>
      </header>
    )
  }
  