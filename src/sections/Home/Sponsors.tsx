import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

const Sponsors = () => {
  return (
    <div className="hidden h-[150px] w-full bg-primary-100 py-10 md:block">
      <div className="mx-auto w-5/6">
        <div className="flex w-3/5 items-center justify-between gap-8">
          <img alt="redbull-sponsor" src={SponsorRedBull} />
          <img alt="forbes-sponsor" src={SponsorForbes} />
          <img alt="fortune-sponsor" src={SponsorFortune} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
