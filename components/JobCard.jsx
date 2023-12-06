import Image from "next/image";
import photosnap from "../public/images/photosnap.svg";

const JobCard = () => {
  return (
    <div className="p-6 bg-white rounded-[5px] box-shadow mt-10">
      <div className="relative border-b-[1px] border-[#B7C4C4] w-full pb-4">
        <Image src={photosnap} alt="logo photosnap" className="w-[48px] h-[48px] absolute -top-12"></Image>
        <div>
          <div className="flex justify-start items-center">
            <h2 className="text-[13px] text-darkCyan te">Photosnap</h2>
            <p className="text-[11px] leading-[14px] tracking-[-.08px] text-white bg-darkCyan rounded-[12px] py-[6px] px-2 ml-4 mr-2">NEW!</p>
            <p className="text-[11px] leading-[14px] tracking-[-.08px] text-white bg-veryDarkGrayishCyan rounded-[12px] py-[6px] px-2">FEATURED</p>
          </div>
          <h3 className="my-2 text-[15px] leading-[24px] text-veryDarkGrayishCyan">Senior Frontend Developer</h3>
          <p className="text-[13px] leading-[24px] tracking-[-.1px] text-darkGrayishCyan">
            <span>1d ago</span> • <span>Full Time</span> • <span>USA only</span>
          </p>
        </div>
      </div>
      <div className="pt-4">
        <span className="py-[10px] px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px] bg-darkCyan/10 rounded-[5px] font-bold">Frontend</span>
      </div>
    </div>
  );
};

export default JobCard;
