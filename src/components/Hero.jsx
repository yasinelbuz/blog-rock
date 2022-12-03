import React from "react";
import { Content } from "../Content";

export default function Hero() {
	return (
		<div className="container mx-auto flex justify-between">
			<div className="w-1/3">
				<span className="bg-[#F551FF] inline-block items-center px-4 py-2 mb-[30px]">
					{Content.hero.kategori}
				</span>
				<h1 className="font-bold text-[60px] leading-[80px] text-[#161B3D]">
					{Content.hero.title}
				</h1>
				<p className="text-[22px] text-[#161B3D] leading-7  mt-[30px]">
					{Content.hero.text}
				</p>
			</div>
			<div className="relative">
				<div className="w-[80%] absolute left-0 top-0 bg-[#00E6CA]"></div>
				<img
					src={Content.hero.HeroTeamIMG}
					alt="team"
					className="hero-image w-[80%] object-cover"
				/>
			</div>
		</div>
	);
}
