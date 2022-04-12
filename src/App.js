import './App.css';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div id="App">
      <SideBar></SideBar>
      <div id='Main'>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;



// se sobrar tempo adicionar: animações na navegação