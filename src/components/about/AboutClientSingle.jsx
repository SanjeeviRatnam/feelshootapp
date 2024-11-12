const AboutClientSingle = ({ title, detail }) => {
	return (
		<>
			{/* <img
				src={image}
				className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/> */}
			<div className="text-primary-dark dark:text-primary-light">
			<p className="font-general-medium text-2xl sm:mt-10">{title}</p>
			<p>{detail}</p></div>
		</>
	);
};

export default AboutClientSingle;
