"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function Card3D() {

  const [isSwitch, setIsSwitch] = useState(false)

  const handleSwitch = () => {
    if (!isSwitch) {
      setIsSwitch(true)
    } else {
      setIsSwitch(false)
    }
  }
  return (
    <CardContainer className="inter-var"
    >
      <CardBody
        className={`
          bg-gray-50 relative group/card 
          dark:hover:shadow-4xl dark:hover:shadow-emerald-500/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
          
          /* --- FIX APPLIED HERE --- */
          **w-[90vw]** /* Default (mobile): 90% of viewport width */
          **max-w-md** /* Restrict max size on mobile */
          **sm:w-[20rem]** /* Small screens (sm): Use a smaller size */
          **md:w-[25rem]** /* Medium screens (md): Slightly larger */
          **lg:w-[30rem]** /* Large screens (lg): Original larger size */
          
          h-auto rounded-xl p-6 border
        `}
      >
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </CardItem> */}
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          <div className="flex flex-row gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600"></div>

            <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600"></div>

            <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600"></div>
          </div>
        </CardItem>
        <CardItem translateZ="100" className="mt-4 ">
          <Image
            src={`/assets/${!isSwitch ? "XYMON.png" : "me.png"}`}
            height="700"
            width="700"
            className={`h-full w-full object-cover rounded-xl group-hover/card:shadow-xl`}
            alt="thumbnail"
            onMouseEnter={() => setIsSwitch(true)} // Set state to true when mouse enters
            onMouseLeave={() => setIsSwitch(false)}
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
