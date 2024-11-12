import { useState, createContext } from 'react';
import { privacyPolicyData as privacyPolicyJson } from '../data/privacyPolicyData';

const PrivacyPolicyContext = createContext();

export const PrivacyPolicyProvider = ({ children }) => {
	const [privacyPolicyData, setPrivacyPolicyData] = useState(
		privacyPolicyJson
	);

	return (
		<PrivacyPolicyContext.Provider
			value={{ privacyPolicyData, setPrivacyPolicyData }}
		>
			{children}
		</PrivacyPolicyContext.Provider>
	);
};

export default PrivacyPolicyContext;
