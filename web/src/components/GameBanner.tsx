interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

const GameBanner = ({ bannerUrl, title, adsCount }: GameBannerProps) => {
  return (
    <div className="keen-slider__slide relative rounded-lg overflow-hidden cursor-default">
      <img src={bannerUrl} alt="" className="w-full" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </div>
  );
};

export default GameBanner;
