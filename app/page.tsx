"use client"

import BackgroundImage from "@/components/BackgroundImage"
import Controls from "@/components/Controls"
import Header from "@/components/Header"
import SlideInfo from "@/components/SlideInfo"
import Slides from "@/components/Slides"
import { sliderData } from "@/lib/data"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
export type Data = {
  id: number,
  img: string,
  title: string,
  description: string,
  location: string
}

export type CurrentSlideData = {
  data: Data,
  index: number
}

export default function Home() {
  const [data, setData] = useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<Data>(initialData);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({ data: initialData, index: 0 })
  return (
    <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
      <AnimatePresence>
        <BackgroundImage transitionData={transitionData} currentSlideData={currentSlideData} />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo transitionData={transitionData} currentSlideData={currentSlideData} />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls 
                transitionData={transitionData} 
                currentSlideData={currentSlideData} 
                data={data}
                initData={initialData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
               />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const initialData = sliderData[0]
