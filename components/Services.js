import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
function Services() {
	return (
		<div className="bg-black">
			<div>
				<Image src={logo} alt="logo"></Image>
			</div>
			<div className="align-items items-center p-6">
				<h1 className="text-white font-bold text-8xl">NUESTROS</h1>
				<h1 className="text-[#40BAEB] font-bold text-8xl">SERVICIOS</h1>
				<div className="m-6 p-6">
					<h2 className="text-white font-regular text-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dui id turpis egestas
						molestie. Sed accumsan mattis velit eget viverra. Mauris in elementum risus. Nunc sed vehicula
						dui. Fusce feugiat rhoncus dui, tincidunt porttitor lacus aliquet id. Aliquam id iaculis ligula.
						Sed eros nibh, dictum a est non, feugiat pharetra enim. Praesent tincidunt eget purus vitae
						fringilla. Vivamus a tincidunt felis, non sagittis tortor. In hac habitasse platea dictumst. Sed
						elementum, ligula sit amet tempus porttitor, lacus felis elementum magna, in faucibus sem est
						sed nulla. Aenean non posuere lectus. Nunc vitae justo quis massa fermentum rutrum vel a est.
						Morbi rutrum elit neque, eu vulputate massa ornare nec. Aliquam tincidunt lorem et imperdiet
						elementum. Pellentesque tellus tellus, mollis sit amet tempor id, porttitor id turpis.
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Services;
