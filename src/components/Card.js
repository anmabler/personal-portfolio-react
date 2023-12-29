const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="bg-orchid-pink rounded-xl overflow-hidden shadow-lg hover:scale-105  border-orchid-pink hover:border-8">
        {imageUrl && <img className="" src={imageUrl} alt={title} />}
        <div className="px-6 py-4 text-start">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 ">{description}</p>
        </div>
      </div>
    );
  };
export default Card