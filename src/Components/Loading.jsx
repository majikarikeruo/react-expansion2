const Loading = () => {
  return (
    <div className="loading fixed top-0 left-0 w-full h-full bg-white">
      <div className="flex justify-center items-center py-20 w-full h-full">
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
