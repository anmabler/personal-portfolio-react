const Card = ({ title, description, imageUrl }) => {
    return (
      <div className=" rounded overflow-hidden shadow-lg">
        {imageUrl && <img className="" src={imageUrl} alt={title} />}
        <div className="px-6 py-4 text-start">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 ">{description}</p>
        </div>
      </div>
    );
  };
export default Card