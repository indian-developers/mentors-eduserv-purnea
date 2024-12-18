import './App.css'
import Header from './Components/Header'
import Error from "./Components/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero';
import Register from './Components/Register';
import Blog from './Components/Blog/Blog';
import Pricing from "../src/Components/Batch/Pricing"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Register />
              <Pricing />
              <Blog />
            </>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>

  )
}

export default App
