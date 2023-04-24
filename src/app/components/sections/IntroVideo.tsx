export const IntroVideo = () => {
  return (
    <div className="flex justify-center text-sm text-gray-500 py-10">
      <video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        controls={true}
        poster="https://via.placeholder.com/500x280.png?text=Video+thumbnail"
        className={"w-[85%] sm:w-[75%] lg:w-[65%] xl:w-[55%]"}
      />
    </div>
  );
};
