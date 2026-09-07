import logo from './logo.svg';
import './App.css';

let name = "Mithun"
function App() {
  return (
  <>
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </nav>
  <div className="container">
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore atque molestias earum quia, id, molestiae unde optio exercitationem consequatur maxime veritatis doloribus soluta, ad eum officiis corporis assumenda voluptates?</p>
  </div>
  </>
  );
}

export default App;
