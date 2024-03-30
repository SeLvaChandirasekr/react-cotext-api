

import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {


  return (
    <><div className="fixed-top">
    <Navbar/>
    <Header />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center cardcss">
    <Card  />
    <Footer/>
    </div>
   
  </>
   
  )
}

export default App
