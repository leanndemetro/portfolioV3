import '../styles/globals.css'
import Nav from '../components/nav';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return ( 
    <div className="font-sans font-extralight">
  <Nav />
  <Component {...pageProps} />
  <Footer />
  </div> )
}

export default MyApp;
