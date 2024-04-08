import Hero from "../../Components/Home/Hero/Hero";
import About from "../../Components/Home/About/About";
import Invite from "../../Components/Home/Invite/Invite";
import Calendar from "../../Components/Home/Calendar/Calendar";
import Identity from "../../Components/Home/Identity/Identity";
import Previous from "../../Components/Home/Previous/Previous";
import LatamHD from "../../Components/Home/LatamHD/LatamHD";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Invite />
      <Calendar />
      <Identity />
      <Previous />
      <LatamHD />
    </>
  );
}

export default Home;
