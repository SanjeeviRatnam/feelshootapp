import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 44, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 80, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 19, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-10">
		    <div className="text-center text-justify font-general-medium text-primary-dark dark:text-primary-light">
				<p className="text-2xl font-bold sm:mt-10 mb-7">
					Our creative talent has been influencing branding around the world for a long time
				</p>
				<p >
				With more than a 3 Years of experience. We are worry about the details so you need don't have to. When you work with our agency, you can be sure that your website meets every standard.
				</p>
			</div>
			</div>
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Satisfied clients"
					counter={<span id="experienceCounter" />}
					measurement="K+"
				/>

				<CounterItem
					title="Success Projects"
					counter={<span id="githubStarsCounter" />}
					measurement="K+"
				/>

				<CounterItem
					title="Active Engagement"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Awards Winning"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>

			</div>
		</div>
	);
};

export default AboutCounter;
