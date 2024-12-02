const PostCard = ({ title, description }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden border">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default PostCard;
  