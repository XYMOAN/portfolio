import React from 'react'
import { Card3D } from './Card/Card3D'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

const Header = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col sm:flex-row gap-10 items-center'>
        <Card3D />
        <div className='flex flex-col'>
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Xymon Harold Darcen
          </div>
          <div
            className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Full-Stack Web Developer
          </div>
          <LayoutTextFlip
            text={null}
            words={["Define", "Develop", "Deliver"]}
          />
        </div>
      </div>
      {/* <button
        className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:opacity-80">
        Debug now
      </button> */}
    </div>
  )
}

export default Header