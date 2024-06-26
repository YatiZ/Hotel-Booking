import { Image as ImageType } from '@/models/room'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HotelPhotoGallery:FC <{photos: ImageType[]}> = ({photos}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const openModal = (index: number) =>{
    setCurrentPhotoIndex(index)
    setShowModal(true)
  }
  const handlePrevious =()=>{
    setCurrentPhotoIndex(prevIndex => prevIndex === 0? photos.length - 1 : prevIndex - 1)
  }

  const handleNext = () =>{
    setCurrentPhotoIndex(prevIndex => prevIndex ===  photos.length -1 ? 0 : prevIndex + 1)
  }
  console.log(showModal)
  console.log('Photos: ',photos[currentPhotoIndex].url)
  console.log("Open model", currentPhotoIndex)
  return (
    <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 relative gap-5 px-3'>
            <div className='h-[540px] relative rounded-2xl overflow-hidden'>
                <div className='hidden md:flex justify-center items-center w-full h-full'>
                    <Image src={photos[currentPhotoIndex].url} alt={`Room Photo ${currentPhotoIndex + 1}`} 
                     className='img scale-animation cursor-pointer'
                     width={150}
                     height={150}
                     onClick={openModal.bind(this, 0)}
                    />
                </div>

                <div className='md:hidden flex justify-center items-center w-full h-full'>
                    <Image src={photos[currentPhotoIndex].url} alt={`Room Photo ${currentPhotoIndex + 1}`} 
                     className='img scale-animation cursor-pointer'
                     width={150}
                     height={150}
                     onClick={openModal.bind(this, 0)}
                    />
                </div>
            </div>

            <div className='md:hidden flex justify-between items-center'>
              <div className='flex space-x-2'>
                <FaArrowLeft className='cursor-pointer' onClick={handlePrevious}/>
                <FaArrowRight className='cursor-pointer' onClick={handleNext}/>
              </div>
              <span>
                {currentPhotoIndex+1} / {photos.length}
              </span>
            </div>
        </div>
    </div>
  )
}

export default HotelPhotoGallery