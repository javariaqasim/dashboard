import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppRouter from './config/router';
import Footer from "./components/footer";




function App() {
  return (
    <div className="App">


      <AppRouter />
      <Footer />



    </div>
  );
}

export default App;