import React from "react";
import { Content } from "@/Content";

export default function Newsletter() {
	return (
		<div className="container mx-auto">
			<div className="w-full md:w-[90%] md:mx-auto bg-blue-600 p-8 mt-8 flex flex-col justify-center items-center gap-2">
				<h1 className="font-bold text-4xl text-white">
					{Content.newsletter.title}
				</h1>
				<p className="text-white text-lg">
					Subscribe my Newsletter for new blog posts, tips & new
					photos. Let's stay updated!
				</p>
				<form className="flex">
					<input
						type="text"
						className="bg-blue-500 border-b border-white outline-none px-4"
					/>
					<button className="bg-green-200 text-black font-bold px-8 py-2">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
}
