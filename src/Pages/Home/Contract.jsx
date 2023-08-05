import React from 'react';

const Contract = () => {
    return (
        <div className="grid max-w-screen-xl  sm:py-8 grid-cols-1 gap-8 px-8 py-16 mx-auto sm:rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
	<div className="flex flex-col items-center justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contract Us</h2>
			<div className="text-gray-400">We will contact you back in 5 hours max.</div>
		</div>
		<img src="https://i.ibb.co/fYff66D/contact-us-2993000-340.webp" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-200" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded bg-gray-200" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-200"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-100 hover:bg-orange-200 text-gray-900">Send Message</button>
	</form>
</div>
    );
};

export default Contract;