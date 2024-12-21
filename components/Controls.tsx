import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { CurrentSlideData, Data } from "@/app/page"
import { Dispatch, ReactNode, SetStateAction } from "react";
import Progress from "./Progress";

type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
    data: Data[];
    initData: Data;
    handleData: Dispatch<SetStateAction<Data[]>>;
    handleTransitionData: Dispatch<SetStateAction<Data>>;
    handleCurrentSlideData: Dispatch<SetStateAction<CurrentSlideData>>;
    sliderData: Data[]
}

const Controls = ({
    transitionData,
    currentSlideData,
    data,
    initData,
    handleData,
    handleTransitionData,
    handleCurrentSlideData,
    sliderData
}:
Props
) => {
    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initData,
            ...prevData.slice(0, prevData.length - 1)
        ]);
        handleCurrentSlideData({
            data: transitionData ? transitionData : sliderData[0],
            index: sliderData.findIndex((e) =>
            e.img === data[data.length - 1].img)
        });
        handleTransitionData(data[data.length - 1])
    }

    const handleNext = () => {
        handleData((prev) => prev.slice(1));
        handleCurrentSlideData({
            data: transitionData ? transitionData : initData,
            index: sliderData.findIndex((e) => e.img === data[0].img)
        });
        handleTransitionData(data[0]);
        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData : initData
            ])
        }, 500)
    }
  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  )
}

export default Controls;

const SliderButton = ({
    children, 
    handleClick
} : {
    children: ReactNode;
    handleClick: () => void
}) => {
    return (
    <button className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black"
    onClick={handleClick}
    >
        { children }
    </button>
    )
}
