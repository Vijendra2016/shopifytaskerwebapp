// VideoPlayer.jsx
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
      <iframe
        loading="lazy"
        title="Gumlet video player"
        src="https://play.gumlet.io/embed/680c6ff80d7002c9e68a7e10?preload=true&autoplay=true&loop=true&background=true&disable_player_controls=true"
        className="absolute top-0 left-0 w-full h-full border-none"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      />
    </div>
  );
};

export default VideoPlayer;