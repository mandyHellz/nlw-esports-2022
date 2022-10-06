import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";
import CreateAdModal from "./components/CreateAdModal";
import { useKeenSlider } from "keen-slider/react";
import logo from "/Logo.svg";
import "./styles/main.css";
import "keen-slider/keen-slider.min.css";

const sliderConfigs = {
  loop: true,
  initial: 0,
  mode: "free-snap",
  slides: {
    perView: 1,
    spacing: 10,
  },
  breakpoints: {
    "(min-width: 400px)": {
      slides: {
        perView: 2,
        spacing: 20,
      },
    },
    "(min-width: 640px)": {
      slides: {
        perView: 3,
        spacing: 40,
      },
    },
    "(min-width: 768px)": {
      slides: {
        perView: 4,
        spacing: 40,
      },
    },
    "(min-width: 1024px)": {
      slides: {
        perView: 5,
        spacing: 40,
      },
    },
    "(min-width: 1280px)": {
      slides: {
        perView: 6,
        spacing: 40,
      },
    },
  },
};

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [sliderOptions, setSliderOptions] = useState({});
  const [games, setGames] = useState<Game[]>([]);
  const [sliderRef] = useKeenSlider(sliderOptions);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  useEffect(() => {
    setSliderOptions(sliderConfigs);
  }, [games]);

  return (
    <div className="min-w-xs max-w-[1244px] mx-auto px-2 flex flex-col items-center my-12 sm:my-20">
      <img src={logo} alt="logo" className="w-1/2 sm:w-fit" />

      <h1 className="text-5xl sm:text-6xl text-white text-center sm:text-left font-black mt-12 sm:mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="keen-slider mt-12 sm:mt-16" ref={sliderRef}>
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
