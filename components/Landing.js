import React from 'react';
import logo2 from '../public/logo2.png';
import Image from 'next/image';

const Landing = () => {
	return (
		<div className="container">
			<div className="absolute z-0 w-full h-full">
				<video autoPlay loop muted className="w-full h-full object-cover">
					<source
						src="https://res.cloudinary.com/dejpxz0ck/video/upload/ac_none,c_scale,h_459,q_auto:good/v1653917772/SLIDE_9-16_ok_1_onve5w.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="absolute top-0 left-0 z-10 flex items-center h-screen w-screen bg-black/40 justify-center">
				<div className="mt-36 text-white font-bold text-8xl rotate-90">
					<h1 className="p-0 m-0 text-[#D59A00]">THIS</h1>
				</div>
				<div className="text-white font-bold text-7xl">
					<h1 className="p-0 m-0 text-[#40BAEB]">IS</h1>
				</div>
				<div className="text-white font-bold text-9xl">
					<h1 className="p-0 m-0 text-[#D59A00]">GO</h1>
				</div>
				<div className="text-white font-bold text-6xl">
					<h1 className="p-0 m-0 text-[#40BAEB]">ON</h1>
				</div>
			</div>
		</div>
	);
};

export default Landing;
