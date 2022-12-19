import React from "react";
import { Content } from "@/Content";

export default function Hero() {
	return (
		<div className="container block lg:flex justify-between mt-[70px]">
			<div className="w-full lg:w-[558px] flex-0 mb-[10px] lg:mb-[30px]">
				<span className="bg-[#F551FF] inline-block items-center px-4 py-2 mb-[10px] lg:mb-[18px]">
					{Content.hero.kategori}
				</span>
				<h1 className="font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[60px] lg:leading-[80px] text-[#161B3D]">
					{Content.hero.title}
				</h1>
				<p className="text-[22px] text-[#161B3D] leading-7 mt-[10px] md:mt-[30px]">
					{Content.hero.text}
				</p>
			</div>

			<div className="relative w-full h-[300px] lg:h-auto flex-1">
				<div className="w-[90%] h-[90%] absolute left-0 top-0 bg-[#00E6CA]"></div>
				<img
					src={Content.hero.HeroTeamIMG}
					alt="team"
					className="absolute right-0 bottom-0 w-[90%] h-[90%] object-cover"
				/>
			</div>
		</div>
	);
}
