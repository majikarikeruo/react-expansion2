import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import SongItem from "./Components/SongItem";
import Heading from "./Components/Heading";
import SearchPanel from "./Components/SearchPanel";
import React from "react";

interface Song {
  trackName: String;
}

function App() {
  const [artist, setArtist] = useState<String>("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchSongsByArtist = async () => {
    try {
      setLoading(true);
      const requestURL = `https://itunes.apple.com/search?country=jp&term=${artist}&media=music`;
      const response = await fetch(requestURL);
      const data = response.json();
      return data;
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (): Promise<void> => {
    const data = await fetchSongsByArtist();
    setSongs([...data.results]);
  };

  useEffect(() => {
    const fetchData = () => setTimeout(() => setLoading(false), 1000);
    fetchData();
  }, []);

  return (
    <div className="App p-8">
      {loading && <Loading />}
      {
        <>
          <Heading text="アーティスト音楽試聴データ検索サイト" />
          <SearchPanel
            artist={artist}
            setArtist={setArtist}
            handleSearch={handleSearch}
          />
          {songs.length > 0 && (
            <div className="mt-8">
              {songs.map((song, index) => (
                <SongItem song={song} key={index} />
              ))}
            </div>
          )}
        </>
      }
    </div>
  );
}

export default App;
