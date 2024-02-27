import { HeroParallax } from '@/components/ui/hero-parallax';
import Navbar from '../components/Navbar';



const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:"/2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/3.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/6.jpg",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/8.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/9.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/10.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/11.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/12.jpg",
  },
];



export default function Home() {
  return (
    <main className="bg-background text-foreground ">
      <Navbar />

      <HeroParallax products = {products}/>
      
      <section className='w-full h-screen hero -mt-20'></section>
      {/* <h1 className="text-4xl text-gradient">hello</h1> */}

    </main>
  );
}
