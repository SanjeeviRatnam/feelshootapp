import {
	FiInstagram,
	FiTwitter,
	FiFacebook,
} from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import AppFooterCopyright from './AppFooterCopyright';
import { Link } from 'react-router-dom';

const socialLinks = [
	{
		id: 1,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/',
	},
	{
		id: 2,
		icon: <FiTwitter />,
		url: 'https://x.com/i/flow/login?redirect_after_login=%2FMicro_Bird_',
	},
	{
		id: 3,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/micro_bird_/',
	},
	{
		id: 4,
		icon: <FaTelegram />,
		url: 'https://telegram.org/',
	},
];

const quickLinks = [
	{
		id: 1,
		name: 'Services',
		url: '/services',
	},
	{
		id: 2,
		name: 'Software Apps',
		url: '/softwareApps',
	},
	{
		id: 3,
		name: 'Entertainment Apps',
		url: '/entertainmentApps',
	},
	{
		id: 4,
		name: 'Cloud Services',
		url: '/cloudservices',
	},
	{
		id: 5,
		name: 'Consulting',
		url: '/consulting',
	},
	{
		id: 6,
		name: 'Marketing',
		url: '/marketing',
	},
	{
		id: 7,
		name: 'Privacy Policy',
		url: '/PrivacyPolicy',
	},
	{
		id: 8,
		name: 'Terms & Conditions',
		url: '/TermsAndConditions',
	},
	{
		id: 9,
		name: 'Disclaimer',
		url: '/Disclaimer',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
		<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
		  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			
			{/* About Us Section */}
			<div className="text-primary-dark dark:text-primary-light">
			  <h4 className="text-xl font-semibold mb-4">About Us</h4>
			  <p className="text-sm">
				The millennials have simply intensified this startup fever, to say the least.
			  </p>
			  <ul className="flex gap-4 sm:gap-6 mt-4">
				{socialLinks.map((social) => (
				  <Link
					key={social.id}
					to={social.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-2xl"
				  >
					{social.icon}
				  </Link>
				))}
			  </ul>
			</div>
	  
			{/* Quick Links Section */}
			<div className="text-primary-dark dark:text-primary-light">
			  <h4 className="text-xl font-semibold mb-4 sm:text-left">Quick Links</h4>
			  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{quickLinks.map((link) => (
				  <li key={link.id}>
					<Link
					  to={link.url}
					  rel="noopener noreferrer"
					  className="text-sm hover:underline"
					>
					  {link.name}
					</Link>
				  </li>
				))}
			  </ul>
			</div>
	  

		  </div>
		  
		</div>
		<AppFooterCopyright />
	  </div>
	  
	);
};

export default AppFooter;
