import Footer from "./Footer";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import ForStudent from "./ForStudents";
import Header from "./Header";
import News from "./News";
import Professions from "./Professions";
import UsefulLinks from "./UsefulLinks";
import Maps from "./Maps";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About/>
      <Professions/>
      <ForStudent/>
      <News/>
      <UsefulLinks/>
      <Maps/>
      <Contact/>
      <Footer/>
    </>
  );
}
