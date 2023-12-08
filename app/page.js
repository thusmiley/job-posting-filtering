"use client";

import Filter from "@/components/Filter";
import JobCard from "@/components/JobCard";
import data from "../data/data";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import closeIcon from "../public/images/icon-remove.svg";

export default function Home() {
  const [jobs, setJobs] = useState(data);
  const [filteredJobs, setFilteredJobs] = useState(data);
  const [filterTags, setFilterTags] = useState([]);

  const addFilter = (e) => {
    e.preventDefault();
    const addedFilter = e.target.value;
    if (!filterTags.includes(addedFilter)) {
      setFilterTags([...filterTags, addedFilter]);
    } else {
      const index = filteredJobs.indexOf(job);
      console.log(index);
      setFilteredJobs(filteredJobs.splice(index, 1));
      console.log(filteredJobs);
    }
  }

  return (
    <main className="relative min-h-screen container px-6 mx-auto -mt-8 mb-10 md:mb-20 max-w-[1110px] md:px-[128px]">
      <Filter filterTags={filterTags} setFilterTags={setFilterTags} />

      <div className={`${filterTags.length > 0 ? "md:mt-10" : "mt-[90px] md:mt-[76px]"} `}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} addFilter={addFilter} />
        ))}
      </div>
    </main>
  );
}
