// styles
import './App.css'

// components
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Slider from './components/Slider'
import Mission from './components/Mission'
import Mappa from './components/Mappa'
import Form from './components/Form'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Menu/>
        <Slider/>
      </div>
      <Mission/>
      <div className="container">
        <Mappa/>
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
