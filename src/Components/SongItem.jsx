import React from "react";

interface SongItemProps {
  song: Song;
}

interface Song {
  trackName: String;
}

const SongItem: React.FC<SongItemProps> = ({ song }) => {
  return (
    <div className="border border-gray-300 border-solid py-2 px-4 mb-2 hover:bg-blue-700 hover:text-white cursor-pointer">
      {song.trackName}
    </div>
  );
};

export default SongItem;
