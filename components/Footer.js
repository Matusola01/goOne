import React from 'react';

const Footer = () => {
	return (
		<footer class="fixed bottom-0 left-0 right-0 bg-transparent border-2 border-black">
			<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{' '}
					<a href="https://flowbite.com/" class="hover:underline">
						GO ONE
					</a>
					. All Rights Reserved.
				</span>
				<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a href="#" class="mr-4 hover:underline md:mr-6 ">
							/INS
						</a>
					</li>
					<li>
						<a href="#" class="mr-4 hover:underline md:mr-6">
							/FB
						</a>
					</li>
					<li>
						<a href="#" class="mr-4 hover:underline md:mr-6">
							/IN
						</a>
					</li>
					<li>
						<a href="#" class="hover:underline">
							/@
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;