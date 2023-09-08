import React from "react";

interface SearchPanelProps {
  artist: String;
  setArtist: (value: string) => void;
  handleSearch: () => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  artist,
  setArtist,
  handleSearch,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mr-3">
        <input
          className="border border-gray-300 border-solid py-2 px-4"
          onChange={(e) => setArtist(e.currentTarget.value)}
        />
      </div>
      <button
        className={`text-white font-bold py-2 px-4 rounded ${
          artist ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500"
        }`}
        onClick={() => handleSearch()}
        disabled={!artist}
      >
        検索
      </button>
    </div>
  );
};

export default SearchPanel;
