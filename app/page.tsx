import Image from 'next/image';
import Navbar from './components/organisms/Navbar';
import Header from './components/organisms/Header';
import About from './components/organisms/About';
import Projects from './components/organisms/Projects';
import Footer from './components/organisms/Footer';

export default function Home() {
  return (
    <main>
        <Navbar></Navbar>
      	<Header></Header>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
    </main>
    )
}
