import React from "react";
import { useState } from "react";
import { Content } from "../Content";

export default function Header() {
	const [show, setShow] = useState("hidden");
	return (
		<div className="container flex justify-center">
			<div className="w-4/5 flex items-center justify-between h-[88px] mt-40px">
				<div className="">
					<img src={Content.header.logo} alt="Header Logo" />
				</div>
				<div className="flex items-center">
					<img
						src={Content.header.hamburger}
						alt=""
						className="p-[20px] cursor-pointer block lg:hidden"
						onClick={() => {
							show === "hidden"
								? setShow("flex")
								: setShow("hidden");
						}}
					/>
					<div
						className={`${show} flex-col absolute top-20 bottom-0 left-0 right-0 z-50 text-white bg-black lg:relative lg:top-0 lg:text-black lg:bg-transparent lg:block`}
					>
						{Content.header.menu.map((item, index) => (
							<a
								href="#"
								key={index}
								className="p-[20px] inline-block font-semibold text-[17px]"
							>
								{item}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
