const Button = ({ id, title, rightIcon, leftIcon, containerClass, onClick = () => { } }) => {
	return (
		<button
			id={id}
			onClick={onClick}
			className={
				`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 ${containerClass} `}
		>
			{leftIcon}

			<span className="relative inline-flex overflow-hidden hover:text-violet-500">
				<div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 text-right">
					{title}
				</div>
				<div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-right">
					{title}
				</div>
			</span>

			{rightIcon}
		</button>
	);
};

export default Button;
