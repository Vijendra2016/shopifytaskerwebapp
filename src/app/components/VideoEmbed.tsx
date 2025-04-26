import React from 'react';

const VideoEmbed = ({ src, title }) => {
  // Adding autoplay, loop, and controls=0 parameters
  const autoplaySrc = `${src}?autoplay=1&loop=1&controls=0`; 

  return (
    <div style={{ position: 'relative', aspectRatio: '16/9' }}>
      <iframe 
        loading="lazy"
        title={title}
        src={autoplaySrc}
        style={{
          border: 'none', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          height: '50%', 
          width: '100%',
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      />
    </div>
  );
};

export default VideoEmbed;
