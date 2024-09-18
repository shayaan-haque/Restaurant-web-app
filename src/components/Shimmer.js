const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-48 h-32 bg-shimmer bg-[length:200%_100%] animate-shimmer rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
