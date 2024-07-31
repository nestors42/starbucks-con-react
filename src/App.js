import Header from "./Components/Header";
import Main from "./Components/Main";
import Gallery from "./Components/Gallery"
import "./css/Header.css";
import './css/Main.css';
import './css/Gallery.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ButtonHeader from "./subComponents/ButtonHeader";


function App() {
  return (
    <>
      <Header />
      <Main />
      <Gallery />
    </>
  );
}

export default App;
