import Head from 'next/head';
import About from '../components/About';
import Navbar from '../components/NavBar';
import Landing from '../components/Landing';

export default function Home() {
	return (
		<div className="bg-black">
			{/* <div className="relative z-50">
				<Navbar />
			</div> */}
			<Landing />
			{/* <About /> */}
		</div>
	);
}
