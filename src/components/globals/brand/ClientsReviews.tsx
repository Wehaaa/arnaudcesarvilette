import React from 'react';
import { Star as StarIcon } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  content: string;
}

interface ReviewCardProps extends Omit<Review, 'id'> {}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, content }) => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-10 mb-6 break-inside-avoid-column border border-gray-200">
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-800 text-[90%]!">{name}</h3>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon 
              key={index} 
              className="w-4 h-4 text-yellow-500" 
              fill="currentColor"
            />
          ))}
        </div>
        <p className="text-slate-600 leading-[175%]">{content}</p>
      </div>
    </div>
  );
};

interface ClientsReviewsProps {
  reviews: Review[];
  className?: string;
}

const ClientsReviews: React.FC<ClientsReviewsProps> = ({ reviews = [], className = '' }) => {
  if (!reviews.length) return null;
  
  return (
    <div className={`container mx-auto ${className}`}>
      <div 
        className="columns-1 sm:columns-[320px] gap-6"
        style={{ columnFill: 'balance' }}
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            content={review.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsReviews;