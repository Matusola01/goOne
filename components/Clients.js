import { motion } from 'framer-motion';

const Client = () => {
	return (
		<motion.section
			className="min-h-screen flex justify-center items-center bg-white"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-screen-lg mx-auto p-8">
				<h1 className="text-3xl font-bold mb-4">About Us</h1>
				<p className="text-gray-600 leading-loose">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sapien in nulla blandit
					fermentum. Nam quis velit vitae eros suscipit lobortis.
				</p>
			</div>
		</motion.section>
	);
};

export default Client;
