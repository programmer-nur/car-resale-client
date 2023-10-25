import React from 'react';

const Contract = () => {
    return (
        <div className="flex min-h-screen font-roboto justify-center mx-28 items-center">
	<div className="flex flex-col px-10 w-1/2 items-center justify-between">
		<div className="space-y-2 ">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contract Us</h2>
			<div className="text-black">We will contact you back in 5 hours max. Please check your email in 5 hours. You can also contact our regional distributor directly.</div>
		</div>
	</div>
	<form novalidate="" className="w-1/2  bg-white p-8 mx-24 rounded-lg">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="input input-bordered w-full" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="input input-bordered w-full" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="5" className="input input-bordered w-full"></textarea>
		</div>
		<button type="submit" className="btn btn-primary w-full mt-3 rounded-full text-white animate-pulse">Send Message</button>
	</form>
</div>
    );
};

export default Contract;