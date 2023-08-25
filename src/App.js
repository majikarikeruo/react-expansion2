import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);

  /**
   * @function fetchSongsByArtist
   * @param {*} artist
   * @description iTunes APIを使ってアーティスト名で曲を検索して取得する
   * @returns
   */
  const fetchSongsByArtist = async () => {
    const requestURL = `https://itunes.apple.com/search?country=jp&term=${artist}&media=music`;
    const response = await fetch(requestURL);
    const data = await response.json();
    setSongs([...data.results]);
    console.log(data.results);
  };

  /*************************
   * @function handleClick
   * @param {*} artist
   * @returns
   *************************/
  const handleClick = async () => {
    const fetchedSongs = await fetchSongsByArtist(artist);
    console.log(fetchedSongs);
  };

  useEffect(() => {
    if (songs.length > 0) {
    }
  }, [songs]);

  return (
    <div className="App p-8">
      <h1 className="font-bold mb-3">アーティスト音楽試聴データ検索サイト</h1>
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
          onClick={() => handleClick()}
          disabled={!artist}
        >
          検索
        </button>
      </div>
      {songs.length > 0 && (
        <div className="mt-8">
          <div className="">
            {songs.map((option) => (
              <div
                className="border border-gray-300 border-solid py-2 px-4 mb-2 hover:bg-blue-700 hover:text-white cursor-pointer"
                key={option.trackId}
              >
                {option.trackName}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
