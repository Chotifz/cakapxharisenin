const { Star } = require("lucide-react");

function StarRating({ rating, total }) {
  const percentage = (rating / 10) * 100;

  return (
    <div className="flex items-center justify-start gap-2 mt-1">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            name="star"
            className={`text-gray-400 w-[14px] ${
              percentage >= (i + 1) * 20 ? "text-yellow-500" : ""
            }`}
          />
        ))}
      </div>

      <span className="text-xs font-bold text-yellow-500 ">({total} )</span>
    </div>
  );
}

export default StarRating;
