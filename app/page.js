import Image from "next/image";
import closeIcon from "../public/images/icon-remove.svg";
import Filter from "@/components/Filter";
import JobCard from "@/components/JobCard";

export default function Home() {
  return (
    <main className="min-h-screen container px-6 mx-auto -mt-8">
      <Filter />
      <JobCard />
    </main>
  );
}
