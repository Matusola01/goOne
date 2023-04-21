import React from 'react';
import Image from 'next/image';
import Mini2 from '../public/Mini2.png';
function Clients() {
	return (
		<div className="bg-black">
			<div className="">
				<div className="flex items-center p-12">
					<h1 className="text-white font-bold text-8xl m-6">NUESTROS</h1>
					<h1 className="text-[#40BAEB] font-bold text-8xl">CLIENTES</h1>
				</div>
				<div className="flex items-center m-12">
					<h2 className="font-semibold text-white text-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dui id turpis egestas
					</h2>
				</div>
				<div className="flex items-centered justify-start">
					<div className="m-6 p-6">
						<Image src={Mini2} alt="logo" style={{ width: '32px', height: '32px' }} className=""></Image>
					</div>
					<h2 className="text-white font-regular text-2xl p-12">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dui id turpis egestas
					</h2>
				</div>
				<div className="flex items-centered justify-start">
					<div className="m-6 p-6">
						<Image src={Mini2} alt="logo" style={{ width: '32px', height: '32px' }} className=""></Image>
					</div>
					<h2 className="text-white font-regular text-2xl p-12">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dui id turpis egestas
					</h2>
				</div>
				<div className="flex items-centered justify-start">
					<div className="m-6 p-6">
						<Image src={Mini2} alt="logo" style={{ width: '32px', height: '32px' }} className=""></Image>
					</div>
					<h2 className="text-white font-regular text-2xl p-12">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dui id turpis egestas
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Clients;
