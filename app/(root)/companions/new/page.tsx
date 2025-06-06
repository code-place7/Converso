import Companionform from "@/components/Companionform";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Newcompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center ">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Maker </h1>
        <Companionform />
      </article>
    </main>
  );
};

export default Newcompanion;
