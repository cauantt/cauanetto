import Image from "next/image";
import Header from "./components/Header";
import './page.css'
import '../app/globals.css';
import Content from "./components/Content";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="">
     
      <Header />
      <Content />
      <Footer />
    </main>
  );
}



