import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
// Import different pages
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Tasks from './Pages/Tasks.js';



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path='Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Tasks' element={<Tasks/>}/>
        <Route path="*" element={<Navigate to="/ErrorPage" replace={true}/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
