import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Cover from './Components/Cover';
import Skils from './Components/Skils';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cover />
      <About/>
      <Skils/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
