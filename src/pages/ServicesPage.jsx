// import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import heroMobile from '../images/hero-mobile.png';
// import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';

const ServicesPage = () => {
	// const [activeTheme] = useThemeSwitcher();

	return (
	  <div className='container mx-auto'>
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
					Microbird
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
					Microbird is one of the world’s most popular short-video communities. Microbird builds a dynamic community with our users together. Based on their interests, zestful users interact with each other from sharing gaming guides to delicious recipes, and they expand their friends' circle from the interest groups.
                </motion.p>
                
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
                   Whether you are trendsetters, artists, pet lovers, or gamers, we believe everyone can unearth their talents and find themselves included in our creative community.
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
							Start a 10 day free trail
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
					src={heroMobile}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
		</div>
	  </div>
	);
};

export default ServicesPage;
