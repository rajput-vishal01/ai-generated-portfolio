import { useState } from "react";

const VideoPreview = ({ src, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-8 h-8 border-2 border-accent-light border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        onLoadedData={() => setIsLoading(false)}
      />
    </div>
  );
};

export default VideoPreview;
