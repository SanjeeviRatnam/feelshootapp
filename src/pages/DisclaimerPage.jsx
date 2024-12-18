
const disclaimerDetails = [
  {
      id: 1,
      details:
          'Content Accuracy and Ownership: MicroBird strives to provide accurate and up-to-date information on its website. However, we do not guarantee the accuracy, completeness, or reliability of any information on the site. The content is for general informational purposes only and should not be considered professional advice. Users are encouraged to verify information and seek appropriate guidance before making decisions based on the content.',
  },
  {
      id: 2,
      details:
          'MicroBird as an Intermediary: MicroBird operates as an intermediary and technology provider, recognized under the provisions of the Information Technology Act of 2000, along with its Rules. As an intermediary, MicroBird does not own or control the content posted by users on its platform. We expressly disclaim all warranties and shall not be liable for any violations under civil or criminal law that may arise from the content.',
  },
  {
      id: 3,
      details:
          'User Responsibilities: Users of the MicroBird website are responsible for the content they post, share, or upload. It is essential to comply with applicable laws, rules, regulations, policies, guidelines, and norms. MicroBird serves as an intermediary and is not responsible for any content posted by users. MicroBird reserves the right to publish, remove, or modify content at its discretion, with or without prior notice to users.',
  },
  {
      id: 4,
      details:
        'Third-Party Links: The website may contain links to third-party websites for additional information or resources. MicroBird does not endorse or control the content on these external sites and is not responsible for their accuracy, legality, or availability. Users access third-party websites at their own risk.',
  },
  {
      id: 5,
      details:
      'Right to Modify or Terminate: MicroBird reserves the right to disable or terminate user accounts, remove or disable content, and modify or discontinue the website at any time. Termination of user accounts or access may include the removal of content, and MicroBird is not liable for any loss of data or content resulting from such actions.',
  },
]

const DisclaimerPage = () => {
  return (
    <div className="container text-primary-dark dark:text-primary-light">
      <div className="font-general-medium text-center text-left text-2xl font-bold mt-14 sm:mt-20 mb-7">
        <h1>Disclaimer</h1>
      </div>

      <p className="mb-5 text-justify">Last Updated: 28th October 2023</p>

      <p className="mb-5 text-justify">
        Welcome to the MicroBird website. Before you proceed, please carefully read and understand the following disclaimer. By using this website, you agree to comply with the terms outlined herein. If you do not agree with any part of this disclaimer, please refrain from using the website.
      </p>

      <ol className="list-disc text-justify mb-5">
        {disclaimerDetails.map((details) => (
        <li className="mb-3" key={details.id}>
          <strong>{details.id}. </strong>{details.details}
        </li>
        ))}
      </ol>
    </div>

  );
};

export default DisclaimerPage;
