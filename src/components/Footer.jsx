import React from "react";
import { Content } from "./../Content";

export default function Footer() {
	return (
		<div className="container mx-auto">
			<div className="w-[90%] mx-auto border-t border-gray-300 py-8 mt-12">
				<div className="md:flex justify-between">
					<div className="mb-12 flex flex-col items-start gap-6 flex-shrink-1 w-[400px]">
						<img src={Content.footer.logo} alt="" />
						<p>{Content.footer.text}</p>
						<div className="flex gap-2">
							<img
								src={Content.footer.icons.facebookIcon}
								alt=""
							/>
							<img
								src={Content.footer.icons.instagramIcon}
								alt=""
							/>
							<img
								src={Content.footer.icons.twitterIcon}
								alt=""
							/>
						</div>
					</div>
					<div className="w-[2/3] flex gap-16">
						{Content.footer.categories.map((item) => (
							<div>
								{
									<>
										<h2 className="font-bold text-gray-300 text-2xl">
											{item.title}
										</h2>
										<div className="flex flex-col">
											{item.categori.map((list) => (
												<a href="#">{list}</a>
											))}
										</div>
									</>
								}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="md:w-[90%] mx-auto mb-4 p-4 bg-gray-100">
				{Content.footer.downText}
			</div>
		</div>
	);
}
