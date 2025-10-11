import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';
import { experiences } from './Data/MockData';
const Experience = () => {

    return (
        <div className="relative w-full overflow-clip mt-14">
            <Timeline data={experiences} />
        </div>
    );
}

export default Experience