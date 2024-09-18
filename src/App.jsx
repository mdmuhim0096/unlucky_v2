import React from 'react'
import "./index.css";
import About from './components/About';
import Feedbacks from "./components/Feedbacks";
import Experienc from "./components/Experience";
import Navbar from './components/Navbar';
import Tech from "./components/Tech";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>

            <div className='relative z-10 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repate bg-center'>
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <About />
            <Experienc />
            <Tech />
            <Works />
            <Feedbacks />
            <Contact />
        </BrowserRouter>
    );
}

export default App;