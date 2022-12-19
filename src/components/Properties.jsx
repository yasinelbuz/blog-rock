import { Content } from "../Content";

export default function Properties() {
	return (
		<div className="container flex flex-col justify-around md:items-start md:flex-row">
			{Content.properties.map((item, index) => (
				<PropertiesBox
					key={index}
					title={item.title}
					text={item.text}
					buttonText={item.buttonText}
				/>
			))}
		</div>
	);
}

const PropertiesBox = (prop) => {
	const { icon, title, text, buttonText } = { ...prop };
	return (
		<div className="flex flex-col justify-center items-center mt-20 md:w-[300px]">
			<div className="bg-[#F551FF] mb-[30px] p-[15px] rounded-full w-[90px] h-[90px] flex justify-center items-center text-white text-[45px]">
				{icon}
			</div>
			<div className="text-[30px] text-center font-bold mb-[30px]">
				{title}
			</div>
			<div className="text-[18px] text-center mb-[10px]">{text}</div>
			<div>
				<button className="bg-[#2820FC] border border-[#2820FC] px-4 py-1 text-white">
					{buttonText}
				</button>
			</div>
		</div>
	);
};
