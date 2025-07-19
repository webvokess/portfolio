import { create } from "zustand";

interface usePlayerSoundType {
  isIdle: boolean;
  setIsIdle: (value: boolean) => void;
}

export const usePlayerSound = create<usePlayerSoundType>(
  (set) => ({
    isIdle: true,
    setIsIdle: (value: boolean) =>
      set((state) => ({
        isIdle: value,
      })),
  })
);

interface useLoaderSceneType {
  isSceneLoaded: boolean;
  isMusicLoaded: boolean;
  hideLoader: boolean;
  playMusic: boolean;
  setMusicLoaded: (value: boolean) => void;
  setSceneLoaded: (value: boolean) => void;
  setHideLoader: (value: boolean) => void;
  setPlayMusic: (value: boolean) => void;
}

export const useLoaderScene = create<useLoaderSceneType>(
  (set) => ({
    isMusicLoaded: false,
    isSceneLoaded: false,
    hideLoader: false,
    playMusic: false,
    setMusicLoaded: (value: boolean) =>
      set((state) => ({
        isMusicLoaded: value,
      })),
    setSceneLoaded: (value: boolean) =>
      set((state) => ({
        isSceneLoaded: value,
      })),
    setHideLoader: (value: boolean) => {
      set((state) => ({
        hideLoader: value,
      }));
      const threeDixiesLabels =
        document.getElementsByClassName(
          "three-dixie-clock"
        );
      setTimeout(() => {
        Array.from(threeDixiesLabels).forEach((label) => {
          if (
            label.classList.contains("text-glow-animation")
          ) {
            label.classList.add("text-glow--blinking");
          }
          label.classList.remove("three-label--hidden");
          label.classList.add("three-label--block");
        });
      }, 1000);
    },

    setPlayMusic: (value: boolean) =>
      set((state) => ({ playMusic: true })),
  })
);
