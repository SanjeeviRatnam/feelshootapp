// import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import developerLight from '../../images/about2.jpg';
// import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';
// import { Button } from 'react-scroll';
// import { Link } from 'react-router-dom';

const AppMain = () => {
	// const [activeTheme] = useThemeSwitcher();

	return (
		<div className='block sm:flex sm:gap-10 mt-10 sm:mt-10'>
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full sm:w-2/3 text-left">          
            	<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Feelshoot
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-6 text-lg md:text-xl  text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					The millennials have simply intensified this startup fever, to say the least. To keep pace with this burgeoning field, people need a community, a platform that constantly revamps itself with the latest happenings and trends in the world of startups.
                </motion.p>
                <hr />
                <motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-6 text-lg md:text-xl  text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
                    feelshoot is among India's leading platforms to share their invaluable knowledge, skill, and experiences.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						href="/projects"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Learn More"
					>
						{/* <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle> */}
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Learn More
						</span>
					</a>
				</motion.div>
                </div>
                <motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-1/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={developerLight}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
		</div>
	);
};

export default AppMain;
