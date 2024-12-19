import './App.css'
import Header from './Components/Header'
import Error from "./Components/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero';
import Register from './Components/Register';
import Blog from './Components/Blog/Blog';
import Batch from "../src/Components/Batch/Batch"
import Footer from './Components/Footer';
import Call from './Components/Call';
import ContactPop from './Components/ContactPop';
import Social from './Components/Social';
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
              <Batch />
              {/* <Blog /> */}
            </>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Call />
      <Social />
      <ContactPop />
      <Footer />
    </Router>

  )
}

export default App
