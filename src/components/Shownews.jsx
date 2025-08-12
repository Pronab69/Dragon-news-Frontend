import { de } from 'date-fns/locale';
import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Shownews = ({d}) => {
const {

  title,
  rating: { number: ratingNumber },
  total_view,
  author: { name: authorName, published_date: publishedDate, img: authorImg },
id,
  image_url,
  details,


 
} = d;

    return (
        <div className='my-3'>
               <div className=" p-4 bg-white rounded-lg shadow-md">
      {/* User info */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={authorImg}
          alt="Author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{authorName}</p>
          <p className="text-xs text-gray-500">{publishedDate}</p>
        </div>
        <div className="ml-auto flex gap-2 ">
         <CiBookmark className='cursor-pointer'/>
         <IoShareSocialOutline className='cursor-pointer'/>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-semibold text-lg mb-3">
        {title}
      </h2>

      {/* Image */}
      <img
        src={image_url}
        alt="News"
        className="rounded-lg mb-3 w-full object-cover"
      />

      {/* Description */}
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">
      {details.slice(0,100)}...
        <Link to={`/news/${id}`} className="text-red-600 cursor-pointer ml-1 font-semibold hover:underline">Read More</Link>
      </p>

      {/* Rating & Views */}
      <div className="flex items-center justify-between text-gray-600">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(ratingNumber)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              stroke="none"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="ml-1 font-semibold">{ratingNumber}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Shownews;