
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import About from './containers/about/About';
import Home from './containers/home/Home';
import Portfolio from './containers/portfolio/Portfolio';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';




function App() {

  
  
  return (
    <>  <Navbar />
    <div className="App">
 

     <Routes>
       <Route path='/'element={<Home/>}/>
       <Route path='/about'element={<About/>}/>
       <Route path='/skills'element={<Skills/>}/>
       <Route path='/resume'element={<Resume/>}/>
       <Route path='/portfoilo'element={<Portfolio/>}/>
     </Routes>
    </div>




    




    </>
  );
}

export default App;
