"use client";

import Image from "next/image";

const JobCard = (props) => {
  const {
    job: { company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools },
    addFilter,
  } = props;

    const tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }

  return (
    <div
      className={`${featured ? "border-l-[5px] border-darkCyan" : ""} p-6 bg-white rounded-[5px] box-shadow slide-in mt-10 md:flex md:justify-between md:items-center md:py-8 md:px-10 md:mt-6`}
    >
      <div className="relative border-b-[1px] border-[#B7C4C4] w-full pb-4 md:flex md:items-center md:pb-0 md:border-none lg:w-auto">
        <Image src={logo} alt={`logo ${company}`} width={48} height={48} className="w-[48px] h-[48px] absolute -top-[60px] md:relative md:top-0 md:w-[88px] md:h-[88px] md:mr-6" />
        <div className="mt-3 md:mt-0">
          <div className="flex justify-start items-center">
            <h2 className="text-[13px] text-darkCyan te font-bold">{company}</h2>
            {isNew && <p className="text-[11px] leading-[14px] tracking-[-.08px] text-white bg-darkCyan rounded-[12px] pt-[6px] pb-1 px-2 ml-4 mr-2 font-bold">NEW!</p>}
            {featured && <p className="text-[11px] leading-[14px] tracking-[-.08px] text-white bg-veryDarkGrayishCyan rounded-[12px] pt-[6px] pb-1 px-2 font-bold">FEATURED</p>}
          </div>
          <a href="#" className="my-2 text-[15px] font-bold leading-[24px] text-veryDarkGrayishCyan hover:text-darkCyan cursor-pointer transition-colors duration-200 ease-in">
            {position}
          </a>
          <p className="text-[13px] leading-[24px] tracking-[-.1px] text-darkGrayishCyan font-normal">
            <span className="mr-[10px]">{postedAt}</span> • <span className="mx-[10px]">{contract}</span> • <span className="ml-[10px]">{location}</span>
          </p>
        </div>
      </div>
      <div className="pt-4 flex flex-wrap gap-4 md:ml-[20px] md:pt-0">
        {tags.map((tag, index) => (
          <button
            key={index}
            type="button"
            value={tag}
            className="py-1 px-2 text-darkCyan text-[13px] font-bold leading-[24px] tracking-[-.1px] bg-darkCyan/10 rounded-[5px] cursor-pointer hover:bg-darkCyan hover:text-white transition-colors duration-100 ease-in"
            onClick={addFilter}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
