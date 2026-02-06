import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'

interface ReviewCardProps {
  name: string
  district: string
  rating: number
  comment: string
}

const ReviewCard = ({ name, district, rating, comment }: ReviewCardProps) => {
  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-primary text-lg">{name}</h3>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaMapMarkerAlt className="text-secondary" />
            <span>{district}</span>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
              size={18}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">"{comment}"</p>
    </div>
  )
}

export default ReviewCard
