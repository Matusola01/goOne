import React from 'react';
import logo2 from '../public/logo2.png';
import Image from 'next/image';

const Landing = () => {
	return (
		<div>
			<div className="absolute z-0 w-full h-full">
				<video autoPlay loop muted className="w-full h-full object-cover">
					<source
						src="https://res.cloudinary.com/dejpxz0ck/video/upload/ac_none,c_scale,h_459,q_auto:good/v1653917772/SLIDE_9-16_ok_1_onve5w.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="fixed top-0 left-0 z-10 flex items-center h-screen w-screen bg-black/40 justify-center">
				<div className="m-4 skew-y-12">
					<h1 className="text-[#D59A00] font-bold text-9xl" style={{ fontFamily: 'Krona One, sans-serif' }}>
						THIS
					</h1>
				</div>
				<div className="m-4 skew-y-12">
					<h1 className="text-[#40BAEB] font-bold text-9xl" style={{ fontFamily: 'Krona One, sans-serif' }}>
						IS
					</h1>
				</div>
				<div className="m-4 skew-y-12">
					<h1 className="text-[#D59A00] font-bold text-9xl" style={{ fontFamily: 'Krona One, sans-serif' }}>
						GO
					</h1>
				</div>
				<div className="m-4 skew-y-12">
					<h1 className="text-[#40BAEB] font-bold text-9xl" style={{ fontFamily: 'Krona One, sans-serif' }}>
						ON
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Landing;
