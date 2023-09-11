import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function ImageSlider() {

    const image = [{
        url: 'https://res.cloudinary.com/dzdlxfeee/image/upload/v1693386020/cd6hetsfwc2r5saoatlf.jpg'
    }, {
        url: 'https://res.cloudinary.com/dzdlxfeee/image/upload/v1693385961/nfv0rahrgc1onfbio4nu.jpg'
    },
    {
        url: 'https://res.cloudinary.com/dzdlxfeee/image/upload/v1693385923/ffuxs5caw2y5erxhucuc.jpg'
    },
    {
        url: 'https://res.cloudinary.com/dzdlxfeee/image/upload/v1693385890/t5q30khbjjgadknlgmlb.jpg'
    }];

    const [currentindex, setcurrentIndex] = useState(0)

    const prevSlide = () => {
        const firstSlide = currentindex === 0;
        const newSlide = firstSlide ? image.length - 1 : currentindex - 1;
        setcurrentIndex(newSlide);
    }
    const nextSlide = () => {
        const lastSlide = currentindex === image.length - 1;
        const nextSlide = lastSlide ? 0 : currentindex + 1;
        setcurrentIndex(nextSlide)
    }
    return (
        <>
            <h1 className='text-center font-sans font-bold text-3xl mt-10'>Photo Gallery</h1>
            <div className='max-w-[900px] h-[350px] relative group flex mt-10 mx-auto p-5'>

                <div style={{ backgroundImage: `url(${image[currentindex].url})` }} className='w-full h-full bg-center bg-cover bg-no-repeat duration-75'></div>

                {/* left & right arrow */}
                <div className=' hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
                    <AiOutlineArrowLeft onClick={prevSlide} size={40} />
                </div>

                <div className=' hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
                    <AiOutlineArrowRight onClick={nextSlide} size={40} />
                </div>

            </div>
        </>
    )
}

export default ImageSlider;