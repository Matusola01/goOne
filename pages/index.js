import Head from 'next/head';
import About from '../components/About';
import Navbar from '../components/NavBar';
import Landing from '../components/Landing';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Landing />
			<About />
		</div>
	);
}
