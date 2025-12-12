const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />
      {/* Loading Text */}
      <p className="text-lg font-medium tracking-wide">Loading Portfolio...</p>
      {/* Optional Animated Dots */}
      <div className="flex space-x-2 mt-2">
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
