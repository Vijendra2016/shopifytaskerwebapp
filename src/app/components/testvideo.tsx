const VideoSection = () => {
    return (
      <div className="w-full h-[500px] relative">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/64a8329f0200796d9bea1ec9%2F66fb06a3dfd43ff352832662_barrel_2024_reel_%28cpg%29%20%28720p%29-transcode.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  };
  
  export default VideoSection; // ✅ Make sure it's exported properly
  