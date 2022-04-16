import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import FirstMainSection from './FirstMainSection';
import SecondMainSection from './SecondMainSection';
import Footer from './Footer';

function App() {
  return (
    <div id="App">
      <SideBar></SideBar>
      <div id='Main'>
        <Header></Header>
        <FirstMainSection/>
        <SecondMainSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;



// se sobrar tempo adicionar: animações na navegação