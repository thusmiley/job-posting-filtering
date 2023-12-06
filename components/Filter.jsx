import Image from "next/image";
import closeIcon from "../public/images/icon-remove.svg";

const Filter = () => {
  return (
    <section className="p-5 bg-white rounded-[5px] flex justify-between items-center text-[13px] leading-[24px] tracking-[-.1px] font-bold box-shadow mb-10">
      <div className="flex flex-wrap gap-4">
        <div className="bg-darkCyan/10 rounded-l-[5px] inline-flex">
          <p className="py-1 px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px]">Frontend</p>
          <div className="bg-darkCyan w-8 h-8 rounded-r-[5px] grid place-content-center">
            <Image src={closeIcon} className="w-[14px] h-[14px]" alt="" />
          </div>
        </div>
        <div className="bg-darkCyan/10 rounded-l-[5px] inline-flex">
          <p className="py-1 px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px]">CSS</p>
          <div className="bg-darkCyan w-8 h-8 rounded-r-[5px] grid place-content-center">
            <Image src={closeIcon} className="w-[14px] h-[14px]" alt="" />
          </div>
        </div>
        <div className="bg-darkCyan/10 rounded-l-[5px] inline-flex">
          <p className="py-1 px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px]">JavaScript</p>
          <div className="bg-darkCyan w-8 h-8 rounded-r-[5px] grid place-content-center">
            <Image src={closeIcon} className="w-[14px] h-[14px]" alt="" />
          </div>
        </div>
        <div className="bg-darkCyan/10 rounded-l-[5px] inline-flex">
          <p className="py-1 px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px]">Senior</p>
          <div className="bg-darkCyan w-8 h-8 rounded-r-[5px] grid place-content-center">
            <Image src={closeIcon} className="w-[14px] h-[14px]" alt="" />
          </div>
        </div>
        <div className="bg-darkCyan/10 rounded-l-[5px] inline-flex">
          <p className="py-1 px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px]">HTML</p>
          <div className="bg-darkCyan w-8 h-8 rounded-r-[5px] grid place-content-center">
            <Image src={closeIcon} className="w-[14px] h-[14px]" alt="" />
          </div>
        </div>
      </div>
      <p className="text-darkGrayishCyan ml-4">Clear</p>
    </section>
  );
};

export default Filter;
