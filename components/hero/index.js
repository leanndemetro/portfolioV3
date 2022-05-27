/* This example requires Tailwind CSS v2.0+ */
export default function Hero() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/hero-img.jpg"
            alt=""
          />
          <div className="absolute inset-0 " aria-hidden="true" />
        </div>
        <div className="drop-shadow-2xl font-normal relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-shadow-lg text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">Alyssa De Metro</h1>
          <p className="text-shadow-lg mt-6 text-xl  text-white max-w-3xl">
          Based out of Central Florida, 
          <br></br>
          Alyssa De Metro is a Software Engineer at <a href="/https://dabblelab.com/" className="hover:italic" target="__blank">Dabble Lab.</a>
          </p>
        </div>
      </div>
    )
  }
  