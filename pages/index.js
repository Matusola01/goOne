import Head from 'next/head';
import About from '../components/About';
import Client from '../components/Clients';
import Hero from '../components/Hero';
import Navbar from '../components/NavBar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Marketing</title>
				<meta name="description" content="Marketing website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Navbar />
				<Hero />
				<About />
				<Client />
			</div>
		</div>
	);
}
