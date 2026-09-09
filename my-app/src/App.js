import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

let name = "Mithun"
function App() {
  return (
  <>
  
<Navbar title='TestUtils' aboutText='About us'/>
<div className='container my-3'>
  <TextForm/>
  {/* <About/> */}
</div>

  </>
  );
}

export default App;
