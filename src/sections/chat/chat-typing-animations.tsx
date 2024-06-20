export const TypingAnimation = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-gray-600 rounded-full animate-dot"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full animate-dot animation-delay-200"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full animate-dot animation-delay-400"></div>
        </div>
      </div>
    );
  };