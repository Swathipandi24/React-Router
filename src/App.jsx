import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import All from './components/All'
import FullStackDevelopment from './components/FullStackDevelopment'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'
function App() {
  
  return (
        <>
            
            <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<All/>}/>
                <Route path="/fullstackdevelopment" element={<FullStackDevelopment/>}/>
                <Route path="/datascience" element={<DataScience/>}/>
                <Route path="/cybersecurity" element={<CyberSecurity/>}/>
                <Route path="/career" element={<Career/>}/>
               
              </Routes>
            </BrowserRouter>
        </>
  )
}

export default App