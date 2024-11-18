import React from 'react';
import cloudcomputing from '../images/cloud-computing.jpg';
import cloudstorage from '../images/cloud-storage.jpeg';
import cloudsecurity from '../images/cloud-security.jpeg';
import backup from '../images/backup.jpeg';
import cloudtranformation from '../images/cloud-tranformation.jpg';
import cloudexpansion from '../images/cloud-expansion.jpg';

const cloudServices = [
  {
    id: 1,
    title: 'Cloud Computing',
    description:
      'Leverage powerful, scalable computing resources hosted in the cloud to support your enterprise applications.',
    image: cloudcomputing,
  },
  {
    id: 2,
    title: 'Cloud Storage',
    description:
      'Store your data securely with our cloud storage solutions that offer high availability and redundancy.',
    image: cloudstorage,
  },
  {
    id: 3,
    title: 'Cloud Security',
    description:
      'Protect your sensitive data with state-of-the-art encryption, secure access, and compliance with regulations.',
    image: cloudsecurity,
  },
  {
    id: 4,
    title: 'Data Backup & Disaster Recovery',
    description:
      'Ensure business continuity by using cloud-based backup and disaster recovery solutions that safeguard your data.',
    image: backup,
  },
];

const caseStudies = [
  {
    id: 1,
    title: 'Cloud Transformation for XYZ Corp',
    description:
      'XYZ Corp successfully migrated to the cloud, reducing costs and improving performance by 30%.',
    image: cloudtranformation,
  },
  {
    id: 2,
    title: 'Global Cloud Expansion for ABC Ltd.',
    description:
      'ABC Ltd. expanded its global reach using cloud infrastructure, supporting millions of new customers.',
    image: cloudexpansion,
  },
];

const CloudServices = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-ternary-dark dark:text-primary-light">
      {/* Cloud Services Overview Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Cloud Services</h2>
        <p className="text-xl text-gray-700 mb-4">
          Our cloud services are designed to meet the diverse needs of businesses, from data storage to powerful computing
          resources. Take advantage of scalable and secure solutions to help grow your business in the cloud.
        </p>
      </section>

      {/* Cloud Services Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {cloudServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center border border-gray-200"
          >
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Case Studies Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center border border-gray-200"
            >
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover rounded-t" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-700">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default CloudServices;
