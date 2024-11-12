
import { PrivacyPolicyProvider } from '../context/PrivacyPolicyContext';
import PrivacyPolicy from '../components/privacy/PrivacyPolicy';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<PrivacyPolicyProvider>
				<PrivacyPolicy />
			</PrivacyPolicyProvider>
		</motion.div>
	);
};

export default PrivacyPage;
