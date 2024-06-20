import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// Import different pages
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Tasks from './Pages/Tasks.js';
import Error from './Pages/Errorpage.js';



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path='Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Tasks' element={<Tasks/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
