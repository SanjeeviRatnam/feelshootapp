// components/NewsCard.js
import { Link } from "react-router-dom";
// import NewsModal from '../NewsModal';
// import Button from '../reusable/Button';
// import { useState } from 'react';

const NewsCard = ({ article }) => {
//   const [showModal, setShowModal] = useState(false);

  
// function showNewsModal() {
//   if (!showModal) {
//     document
//       .getElementsByTagName('html')[0]
//       .classList.add('overflow-y-hidden');
//     setShowModal(true);
//   } else {
//     document
//       .getElementsByTagName('html')[0]
//       .classList.remove('overflow-y-hidden');
//     setShowModal(false);
//   }
// }

  return (
    <div className="bg-white rounded-lg overflow-hidden text-primary-dark dark:text-primary-light">
      <img src={article.imageUrl} alt={article.title}  />
      <div className="p-3">
        <h3 className="text-xl font-semibold">{article.title}</h3>
        <p className="text-gray-600 mt-2">{article.summary}</p>
        {/* <span
							onClick={showNewsModal}
							className="text-blue-500 mt-4 block"
							aria-label="Read More"
				>
							<Button title="Read More" />
				</span> */}
        <Link to='/article' className="text-blue-500 mt-4 block" state={article}>Read more</Link>
      </div>
      {/* <div>
				{showModal ? (
					<NewsModal
						onClose={showNewsModal}
						onRequest={showNewsModal}
            article={article}
					/>
				) : null}
				{showModal ? showNewsModal : null}
			</div> */}
    </div>
    
  );
};

export default NewsCard;
