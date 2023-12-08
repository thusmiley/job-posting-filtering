import Image from "next/image";
import closeIcon from "../public/images/icon-remove.svg";

const Filter = ({ filterTags, setFilterTags }) => {
  const RemoveAllFilters = () => {
    setFilterTags([]);
  };

  return (
    <section
      className={`${
        filterTags.length === 0 ? "hidden slide-out" : "flex slide-in"
      } p-5 bg-white rounded-[5px] justify-between items-center text-[13px] leading-[24px] tracking-[-.1px] font-bold box-shadow mb-[56px] md:py-5 md:px-10 md:mb-10`}
    >
      <div className="flex flex-wrap gap-4">
        {filterTags.map((tag, index) => (
          <div key={index} className="bg-darkCyan/10 rounded-[5px] inline-flex">
            <p className="py-1 px-2 text-darkCyan text-[13px] leading-[24px] tracking-[-.1px]">{tag}</p>
            <div className="bg-darkCyan w-8 h-8 rounded-r-[5px] grid place-content-center hover:bg-veryDarkGrayishCyan cursor-pointer transition-colors duration-200 ease-in">
              <Image src={closeIcon} className="w-[14px] h-[14px]" alt={`remove filter ${tag}`} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-darkGrayishCyan ml-4 cursor-pointer hover:text-darkCyan hover:underline transition-colors duration-200 ease-in" onClick={RemoveAllFilters}>
        Clear
      </p>
    </section>
  );
};

export default Filter;
