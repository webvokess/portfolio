import React, { useState } from "react";
import { Howl } from "howler";
import clsx from "clsx";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { useLoaderScene } from "../../Store/ThreeState";

// const ambientMusic = new Howl({
//   src: ["./sounds/ToPonderGodmode.mp3"],
// });

export const PlayerSound = () => {
  const { setMusicLoaded, playMusic, setPlayMusic } =
    useLoaderScene((state) => state);

  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [firstPlay, setFirstPlay] = useState(true);

  React.useEffect(() => {
    // Cargar la canción
    const sound = new Howl({
      src: ["./sounds/ToPonderGodmode.mp3"],
      html5: true,
      volume: 0.7,
      loop: true,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
        setPosition(0);
      },
      onstop: () => {
        setIsPlaying(false);
        setPosition(0);
      },
      onseek: () => {
        setPosition(sound.seek());
      },
    });

    sound.once("load", () => {
      setMusicLoaded(true);
    });

    setSound(sound);

    return () => {
      // Detener y descargar la canción al desmontar el componente
      sound.stop();
      sound.unload();
    };
  }, []);

  const togglePlay = () => {
    if (sound) {
      if (isPlaying) {
        // fade out
        sound.fade(500, 0, 500);
        setTimeout(() => {
          setIsPlaying(false);
          setPosition(sound.seek());
          sound.pause();
        }, 500);
      } else {
        // fade in
        sound.fade(0, 5, 500).play();
        setIsPlaying(true);
      }
    }
  };

  React.useEffect(() => {
    if (playMusic && sound && firstPlay) {
      sound.play();
      setIsPlaying(true);
      setFirstPlay(false);
    }
  }, [playMusic]);

  const currentTime = () => {
    return sound ? sound.seek() : position;
  };

  const setCurrentTime = (time: number) => {
    if (sound) {
      sound.seek(time);
    }
    setPosition(time);
  };

  return (
    <div
      className={clsx("absolute bottom-0 left-0 z-40 p-5")}>
      <div
        className={clsx(
          "flex gap-3 text-16p items-center flex-col justify-start"
        )}>
        <p
          className={clsx(
            "font-300 font-main text-14p text-white-1000"
          )}>
          Music: To Ponder - GodMode
        </p>
        <div className='flex gap-3 w-full'>
          <div onClick={() => togglePlay()}>
            {isPlaying ? (
              <FaPause
                className={clsx(
                  "cursor-pointer text-14p text-grey-500",
                  "hover:text-white-1000"
                )}
              />
            ) : (
              <FaPlay
                className={clsx(
                  "cursor-pointer text-14p text-grey-500",
                  "hover:text-white-1000"
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
