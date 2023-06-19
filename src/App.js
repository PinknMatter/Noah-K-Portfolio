import React from 'react';
import "./App.css";
import Home from './components/Routes/home';
import { Route, Routes } from "react-router-dom";
import Resume from './components/Routes/Resume';
import About from './components/Routes/About';
import Work from './components/Routes/Work';
import CaseStudy from './components/Work/Casestudy';
import Video from "./components/Work/22-06-43";





class App extends React.Component {

  render() {

    return (
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/22-06-43" element={<Video />} />

        </Routes>


      </div>

    );
  }
}
export default App;
