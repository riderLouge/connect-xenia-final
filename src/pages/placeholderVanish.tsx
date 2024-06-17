"use client";

// import { Meteors } from "@/components/ui/meteors";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's is ConnectXenia?",
    "How to book?",
    "What are the refund policy?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4 ] mt-[-200px]">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-white">
        Ask ConnectXenia Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />   

    </div>
  );
}
