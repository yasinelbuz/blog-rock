import React from "react";
import { Content } from "@/Content";

export default function AboutUs() {
	return (
		<div className="container mx-auto mt-12">
			<div className="relative w-full md:w-[90%] mx-auto">
				<div className="md:w-[450px] overflow-hidden h-auto md:h-[600px] bg-blue-100">
					<img
						src={Content.aboutUs.img}
						className="w-full md:w-full md:h-full object-cover"
					/>
				</div>
				<div className="md:left-[350px] md:top-[50%] -translate-y-1/2 md:right-0 bg-gray-100 h-[300px] relative md:absolute p-8">
					<div className="h-full flex flex-col justify-around items-start">
						<h2>{Content.aboutUs.kategori}</h2>
						<h1 className="font-bold text-3xl">
							{Content.aboutUs.title}
						</h1>
						<p>{Content.aboutUs.text}</p>
						<button className="bg-green-200 px-8 py-2">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
