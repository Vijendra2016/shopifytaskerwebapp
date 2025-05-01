// VideoPlayer.tsx
import React from 'react';

// Define the allowed size options as a type
type VideoSize = 'small' | 'medium' | 'large' | 'default' | 'custom' | 'tiny';

// Define height options
type HeightOption = 'short' | 'medium' | 'tall' | 'default';

// Define props interface with proper typing
interface VideoPlayerProps {
  size?: VideoSize;
  height?: HeightOption;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  size = 'default',
  height = 'default' 
}) => {
  // Different size options
  const sizeClasses: Record<VideoSize, string> = {
    tiny: "max-w-sm mx-auto", // Small width
    small: "max-w-md mx-auto", // Medium width
    medium: "max-w-xl mx-auto", // XL width
    large: "max-w-3xl mx-auto", // 3XL width
    default: "w-full", // Full width
    custom: "w-2/3 mx-auto" // 2/3 width
  };

  // Height constraint classes
  const heightClasses: Record<HeightOption, string> = {
    short: "max-h-32", // Very short
    medium: "max-h-64", // Medium height
    tall: "max-h-56", // Tall height
    default: "" // No height constraint
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${heightClasses[height]}`}>
      {/* Use a fixed aspect ratio with Tailwind instead of inline style */}
      <div className="aspect-video w-full">
        <iframe
          loading="lazy"
          title="Gumlet video player"
          src="https://play.gumlet.io/embed/680c6ff80d7002c9e68a7e10?preload=true&autoplay=true&loop=true&background=true&disable_player_controls=true"
          className="absolute top-0 left-0 w-full h-full border-none"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;