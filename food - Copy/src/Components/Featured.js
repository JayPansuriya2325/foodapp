import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {

    const sliders = [
        {
            url: "https://wallpapercave.com/wp/wp9455160.jpg"
          },
          {
            url: 'https://www.desktopbackground.org/download/o/2010/06/14/33012_full-hd-1080p-food-wallpapers-desktop-backgrounds-hd_1920x1080_h.jpg'
          },
          {
            url: 'https://png.pngtree.com/thumb_back/fh260/background/20230905/pngtree-korean-noodles-restaurant-photoshoot-on-food-photography-image_13249678.jpg',
          }
    ]

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    
    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group    '>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>
        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider} size={25}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider} size={25}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems, slideIndex)=>(
                    <div
                    key={slideIndex}
                    onClick={()=>moveToNextSlide(slideIndex)}
                     className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Featured
