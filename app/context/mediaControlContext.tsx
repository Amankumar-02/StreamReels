// context/VolumeContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type VolumeContextType = {
  isMuted: boolean;
  setIsMuted: (val: boolean) => void;
  volume: number;
  setVolume: (val: number) => void;
};

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export const MediaControlProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

  return (
    <VolumeContext.Provider value={{ isMuted, setIsMuted, volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

export const useVolume = () => {
  const context = useContext(VolumeContext);
  if (!context) throw new Error("useVolume must be used within MediaControlProvider");
  return context;
};  
