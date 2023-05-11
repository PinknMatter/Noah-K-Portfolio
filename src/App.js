import React from 'react';
import "./App.css";
import Home from './components/Routes/home';
import { Route, Routes } from "react-router-dom";
import Resume from './components/Routes/Resume';
import About from './components/Routes/About';





class App extends React.Component {

  render() {

    return (
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/About" element={<About />} />

        </Routes>


      </div>

    );
  }
}
export default App;
