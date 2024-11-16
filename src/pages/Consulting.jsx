import React, { useState } from 'react';
import { Button } from 'react-scroll';
import { Link } from 'react-router-dom';

const consultingServices = [
  {
    id: 1,
    title: 'Business Strategy Consulting',
    description: 'We help businesses refine their strategy to improve efficiency, market position, and long-term growth.',
  },
  {
    id: 2,
    title: 'IT Consulting',
    description: 'Our IT consulting services assist you in integrating the latest technologies to streamline business operations.',
  },
  {
    id: 3,
    title: 'Marketing Consulting',
    description: 'We provide data-driven marketing strategies to increase your online presence and customer engagement.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    company: 'XYZ Corporation',
    feedback: 'This consulting service transformed our business approach and helped us achieve double-digit growth.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'ABC Enterprises',
    feedback: 'Highly professional team! Their insights into market strategy helped us reduce costs and increase revenue.',
  },
];

const CaseStudies = [
  {
    id: 1,
    title: 'E-commerce Optimization for ABC Inc.',
    description: 'Our consulting services helped ABC Inc. optimize their e-commerce platform, resulting in a 30% increase in sales.',
  },
  {
    id: 2,
    title: 'Digital Transformation for XYZ Corp.',
    description: 'We led a digital transformation project for XYZ Corp., improving operational efficiency by 25%.',
  },
];

const Consulting = () => {
  
  return (
    <div className='container mx-auto'>
      <div className="text-ternary-dark dark:text-primary-light">
        
        <h2 className="text-3xl text-center font-semibold mb-6">Our Consulting Services</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 bg-white p-5">
          {consultingServices.map((service) => (
            <div key={service.id} >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className='mt-5'>{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-center mb-6">What Our Clients Say</h2>
        <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-white p-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-5 rounded-lg shadow-lg">
              <p className="italic">"{testimonial.feedback}"</p>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <span className="text-gray-500">{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
        </div>


        <h2 className="text-3xl font-semibold text-center mt-10 mb-6">Our Case Studies</h2>
        <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-white p-5">
          {CaseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/contact"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="Get in Touch for Consulting"
				>
					Get in Touch for Consulting<Button title="Get in Touch for Consulting" />
				</Link>
			</div>
        

        

    </div>
    </div>
  );
};

export default Consulting;
