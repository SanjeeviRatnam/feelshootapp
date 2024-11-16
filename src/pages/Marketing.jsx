// src/data/dummyData.js
import seoimage from '../images/seo.jpg';
import socialmedia from '../images/social-media.jpg';
import ppc from '../images/ppc.jpg';
import contentmarketing from '../images/content-marketing.jpg';
import emailmarketing from '../images/email-marketing.jpg';
import React, { useState } from 'react';


const marketingData = [
  {
    id: 1,
    title: 'SEO Optimization',
    description: 'Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as "natural" or "organic" results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search, news search, and industry-specific vertical search engines.',
    image: seoimage,
  },
  {
    id: 2,
    title: 'Social Media Marketing',
    description: 'Social media marketing can help promote a product or service and establish connections with customers. Social media marketing can be divided into paid media, earned media, and owned media. Using paid social media firms run advertising on a social media platform. Earned social media appears when firms do something that impresses stakeholders and they spontaneously post content about it. Owned social media is the platform markets itself by creating/promoting content to its users.',
    image: socialmedia,
  },
  {
    id: 3,
    title: 'PPC Advertising',
    description: 'Pay-per-click (PPC) is an internet advertising model used to drive traffic to websites, in which an advertiser pays a publisher (typically a search engine, website owner, or a network of websites) when the ad is clicked. PPC display advertisements, also known as banner ads, are shown on websites with related content that have agreed to show ads and are typically not pay-per-click advertising, but instead, usually charge on a cost per thousand impressions (CPM).',
    image: ppc,
  },
  {
    id: 4,
    title: 'Content Marketing',
    description: "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. It is often used in order to achieve the following business goals: attract attention and generate leads, expand their customer base, generate or increase online sales, increase brand awareness or credibility, and engage a community of online users. Content marketing attracts new customers by creating and sharing valuable free content as well as by helping companies create sustainable brand loyalty, providing valuable information to consumers, and creating a willingness to purchase products from the company in the future.",
    image: contentmarketing,
  },
  {
    id: 5,
    title: 'Email Campaigns',
    description: "Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing. It involves using email to send advertisements, request business, or solicit sales or donations. Email marketing strategies commonly seek to achieve one or more of three primary objectives: build loyalty, trust, or brand awareness. The term usually refers to sending email messages with the purpose of enhancing a merchant's relationship with current or previous customers, encouraging customer loyalty and repeat business, acquiring new customers or convincing current customers to purchase something immediately, and sharing third-party ads.",
    image: emailmarketing,
  },
];
  
const Marketing = () => {

   // State to track whether the full description is shown for each service
   const [expandedServiceId, setExpandedServiceId] = useState(null);

   // Toggle the visibility of the full description
   const toggleDescription = (id) => {
     setExpandedServiceId(prevId => (prevId === id ? null : id));
   };

	return (
        <div className='container mx-auto'>
            <div className="text-ternary-dark dark:text-primary-light">
            <h2 className='text-3xl font-bold mb-8 text-center'>Our Marketing Services</h2>
            <p>
               We offer a range of digital marketing services to help you grow your business online. From SEO to social media marketing, our strategies are designed to increase your online presence and drive results.
            </p>
            {marketingData.map((service) => (
            <div key={service.id} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white shadow-lg rounded-lg overflow-hidden mt-5 p-5">
                <div><img className='col-start-2' src={service.image} alt={service.title}  /></div>
                <div><h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                <p className="mt-2">{expandedServiceId === service.id
                ? service.description
                : service.description.slice(0, 100) + '...'}</p>
                {/* Read More Button */}
                <button
                  className="text-blue-500 mt-2 hover:underline"
                  onClick={() => toggleDescription(service.id)}
                >
                  {expandedServiceId === service.id ? 'Read Less' : 'Read More'}
                </button>
                </div>
            </div>
            ))}
            </div>

        </div>
    )
}

export default Marketing;