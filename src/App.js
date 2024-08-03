import Header from "./Components/Header";
import Main from "./Components/Main";
import Gallery from "./Components/Gallery";
import Contacts from "./Components/Contacts";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import "./css/Header.css";
import './css/Main.css';
import './css/Gallery.css';
import './css/Contacts.css';
import './css/Cards.css';
import './css/Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ButtonHeader from "./subComponents/ButtonHeader";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Gallery />
      <Contacts />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
