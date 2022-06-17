import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Work from './container/Work/Work';
import './App.scss';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			{/* <Work /> */}
			<Skills />
			{/* <Testimonial /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
