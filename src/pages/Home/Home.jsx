import Header from "../../components/header/Header";
import HomeContainer from "../../components/homeContainer/HomeContainer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <HomeContainer />
      </div>
      <MailList/>
    </div>
  );
}
