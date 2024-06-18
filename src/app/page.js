import Image from "next/image";
import Header from "./components/Header";
import './page.css'
import '../app/globals.css';
import Content from "./components/Content";


export default function Home() {
  return (
    <main className="">
     
      <Header />
      <Content />
    </main>
  );
}



