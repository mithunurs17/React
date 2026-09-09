import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Mithun"
function App() {
  return (
  <>
  
<Navbar title='TestUtils' aboutText='About us'/>
<div className='container'>
  <TextForm/>
</div>

  </>
  );
}

export default App;
