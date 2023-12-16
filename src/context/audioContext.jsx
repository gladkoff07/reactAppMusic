import { createContext, useState } from "react";
import tracksList from "../assets/tracksList";

export const AudioContext = createContext({});

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracksList[0]);
  const [isPlaying, setPlaying] = useState(false);

  const handleToggleAudio = (track) => {
    console.log("click>>", track.title);
  };

  const value = { currentTrack, isPlaying, handleToggleAudio };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
