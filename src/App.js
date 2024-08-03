import Header from "./Components/Header";
import Main from "./Components/Main";
import Gallery from "./Components/Gallery";
import Contacts from "./Components/Contacts";
import Cards from "./Components/Cards";
import "./css/Header.css";
import './css/Main.css';
import './css/Gallery.css';
import './css/Contacts.css';
import './css/Cards.css';
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
    </>
  );
}

export default App;
