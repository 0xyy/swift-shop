export const Subtitle = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
	return (
		<header className="flex w-full items-center space-x-1">
			<p className="text-gradient text-xl font-semibold uppercase tracking-wide text-gray-700">
				{title}
			</p>
			<div className="h-[2px] flex-grow bg-gray-200"></div>
			<div className="text-pink-400">{icon}</div>
			<span className="text-gradient text-lg">{text}</span>
		</header>
	);
};
