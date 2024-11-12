import { useContext } from 'react';
import PrivacyPolicyContext from '../../context/PrivacyPolicyContext';

const PrivacyPolicy = () => {
	const { privacyPolicyData } = useContext(PrivacyPolicyContext);

	return (
        <div className="text-primary-dark dark:text-primary-light" >
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-14 sm:mt-20 mb-7">
				{privacyPolicyData.privacyPolicyHeader.title}
			</p>
            <p>{privacyPolicyData.privacyPolicyHeader.updatedDate}</p>
            {privacyPolicyData.privacyPolicyDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</p>
					);
				})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mb-7">
                {privacyPolicyData.collectInfoHeader.title}
			</p>
            <p className="font-general-regular mb-5">
                {privacyPolicyData.collectInfoHeader.details}
            </p>
            <ul>
                {privacyPolicyData.collectInfoDetails.map((details) => {
					return (
						<li
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</li>
					);
				})}
            </ul>
            <p className="font-general-regular mb-5">
                {privacyPolicyData.collectInfoHeader1.details}
            </p>
            <ul>
                {privacyPolicyData.collectInfoDetails1.map((details) => {
					return (
						<li
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</li>
					);
				})}
            </ul>
            {privacyPolicyData.collectInfoDetails2.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
				})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.useOfInfoHeader.title}
			</p>
            <p className="font-general-regular mb-5">
                {privacyPolicyData.useOfInfoHeader.details}
            </p>
            <ul>
                {privacyPolicyData.useOfInfoDetails.map((details) => {
					return (
						<li
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</li>
					);
				})}
            </ul>
            {privacyPolicyData.useOfInfoDetails1.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
				})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.howInfoHeader.title}
			</p>
            {privacyPolicyData.howInfoDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
				})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mb-7">
                {privacyPolicyData.externalLinksHeader.title}
			</p>
            <p className="font-general-regular mb-5">
                {privacyPolicyData.externalLinksHeader.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mb-7">
                {privacyPolicyData.permissionAccessHeader.title}
			</p>
            <p className="font-general-regular mb-5">
                {privacyPolicyData.permissionAccessHeader.details}
            </p>
            {privacyPolicyData.permissionAccessDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</p>
					);
				})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mb-7">
                {privacyPolicyData.cookiesHeader.title}
			</p>
            <p className="font-general-regular mb-5">
                {privacyPolicyData.cookiesHeader.details}
            </p>
            {privacyPolicyData.cookiesDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mt-5"
						>
                            <strong>{details.title}</strong>
							{details.details}
						</p>
					);
				})}
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.cookiesDetail1.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mb-7">
                {privacyPolicyData.googleAnalytics.title}
			</p>
            {privacyPolicyData.googleAnalyticsDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
			})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.googleAdsense.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.googleAdsense.details}
            </p>
            {privacyPolicyData.googleAdsenseDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</p>
					);
			})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.yourRights.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.yourRights.details}
            </p>
            {privacyPolicyData.yourRightsDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5"
						>
							{details.details}
						</p>
					);
			})}
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.yourRightsDetails1.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.compliances.title}
			</p>
            {privacyPolicyData.compliancesDetails.map((section) => (
                <section key={section.id}>
                <strong>{section.section}</strong>
                {section.details.map((detail) => (
                    <p className="font-general-regular mb-5" key={detail.id}>{detail.details}</p>
                ))}
                </section>
            ))}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.confidentiality.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.confidentiality.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.otherInfo.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.otherInfo.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.disclosureInfo.title}
			</p>
            {privacyPolicyData.disclosureInfoDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
			})}
            {privacyPolicyData.disclosureInfoDetails1.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mt-5 mb-5"
						>
							{details.details}
						</p>
					);
			})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.changeYourProfile.title}
			</p>
            {privacyPolicyData.changeYourProfileDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
			})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.security.title}
			</p>
            {privacyPolicyData.securityDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular"
						>
							{details.details}
						</p>
					);
			})}
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.severability.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.severability.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.amendment.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.amendment.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.withdrawal.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.withdrawal.details}
            </p>
            <p className="text-center font-general-medium text-left text-2xl font-bold mt-5 mb-7">
                {privacyPolicyData.contactUs.title}
			</p>
            <p className="font-general-regular mt-5 mb-5">
                {privacyPolicyData.contactUs.details}
            </p>
        </div>
    )

}

export default PrivacyPolicy;