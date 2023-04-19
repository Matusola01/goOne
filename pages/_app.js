import '../styles/globals.css';
import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
				{/* <link href="url('https://fonts.googleapis.com/css2?family=Road+Rage&display=swap'" rel="stylesheet" /> */}
			</Head>
			<div>
				<div className="relative z-50">
					<Navbar />
				</div>
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
