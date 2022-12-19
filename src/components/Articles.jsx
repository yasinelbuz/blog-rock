import React from "react";
import { Content } from "@/Content";

export default function Articles() {
	return (
		<div className="container flex flex-wrap flex-col md:flex-row items-start mt-20">
			{Content.articles.articleBox.map((article, index) => (
				<ArticlesBox key={index} article={article} />
			))}
		</div>
	);
}

function ArticlesBox(props) {
	return (
		<div className="flex flex-col md:flex-row w-full md:w-1/2 mt-12 ">
			<Images image={props.article.img} />
			<Text text={props} />
		</div>
	);
}

function Images({ image }) {
	return (
		<div className="md:w-1/2 w-full">
			<div className="relative">
				<div className="absolute -left-4 -top-4 bg-[#00E6CA] w-full h-full -z-1"></div>
				<img
					src={image}
					alt=""
					className="w-full object-cover relative"
				/>
			</div>
		</div>
	);
}

function Text(props) {
	const { title, text, kategori } = { ...props.text.article };
	console.log(props.text);
	return (
		<div className="md:w-1/2 w-full  px-8">
			<div className="bg-[#00E6CA] px-4 py-1 inline-block text-sm">
				{kategori}
			</div>
			<div className="text-3xl font-semibold my-2">{title}</div>
			<div>{text}</div>
		</div>
	);
}
