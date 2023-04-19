import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

// function NavLink({ to, children }) {
// 	return (
// 		<a href={to} className={`mx-4`}>
// 			{children}
// 		</a>
// 	);
// }

function MobileNav({ open, setOpen }) {
	return (
		<div
			className={`fixed z-50 block top-0 left-0 h-screen w-screen bg-[#40BAEB] transform ${
				open ? '-translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out filter drop-shadow-md `}
		>
			<div className="flex items-center justify-center filter  bg-[#40BAEB] h-20">
				{' '}
				<Image
					alt="GOON"
					src={logo}
					placeholder="blur"
					width={65}
					height={65}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
			</div>

			<div className="relative flex z-50 items-center flex-col ml-4  ">
				<a
					className="text-9xl xl:text-9xl min-[320px]:text-8xl text-black font-semibold my-4 hover:text-[#D59A00] hover:scale-125"
					style={{ fontFamily: 'Krona One, sans-serif' }}
					href="/#"
					onClick={() =>
						setTimeout(() => {
							setOpen(!open);
						}, 200)
					}
				>
					ABOUT
				</a>
				<a
					className="text-9xl xl:text-9xl min-[320px]:text-8xl text-black font-semibold my-4 hover:text-[#D59A00] hover:scale-125"
					style={{ fontFamily: 'Krona One, sans-serif' }}
					href="/#"
					onClick={() =>
						setTimeout(() => {
							setOpen(!open);
						}, 200)
					}
				>
					SERVICES
				</a>
				<a
					className="text-9xl xl:text-9xl min-[320px]:text-8xl text-black font-semibold my-4 hover:text-[#D59A00] hover:scale-125"
					style={{ fontFamily: 'Krona One, sans-serif' }}
					href="/#"
					onClick={() =>
						setTimeout(() => {
							setOpen(!open);
						}, 200)
					}
				>
					CLIENTS
				</a>
				<a
					className="text-9xl xl:text-9xl min-[320px]:text-8xl text-black font-semibold my-4 hover:text-[#D59A00] hover:scale-125"
					style={{ fontFamily: 'Krona One, sans-serif' }}
					href="/#"
					onClick={() =>
						setTimeout(() => {
							setOpen(!open);
						}, 200)
					}
				>
					THE AGENCY
				</a>
				<a
					className="text-9xl xl:text-9xl min-[320px]:text-8xl text-black font-semibold my-4 hover:text-[#D59A00] hover:scale-125"
					style={{ fontFamily: 'Krona One, sans-serif' }}
					href="/#"
					onClick={() =>
						setTimeout(() => {
							setOpen(!open);
						}, 200)
					}
					id="text2"
				>
					CONTACT US
				</a>
			</div>
		</div>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center">
			<MobileNav open={open} setOpen={setOpen} />
			<div className="w-3/12 flex items-center">
				<Image
					alt="GOON"
					src={logo}
					placeholder="blur"
					width={65}
					height={65}
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
			</div>
			<div className="w-9/12 flex justify-end items-center">
				<div
					className="z-50 flex relative w-8 h-8 flex-col justify-between items-center"
					onClick={() => {
						setOpen(!open);
					}}
				>
					{/* hamburger button */}
					<span
						className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
							open ? 'rotate-45 translate-y-3.5 bg-black' : 'hover:bg-[#D59A00]'
						}`}
					/>
					<span
						className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
							open ? 'invisible' : 'w-full hover:bg-[#D59A00]'
						}`}
					/>
					<span
						className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
							open ? '-rotate-45 -translate-y-3.5 bg-black' : 'hover:bg-[#D59A00]'
						}`}
					/>
				</div>
			</div>
		</div>
	);
}
