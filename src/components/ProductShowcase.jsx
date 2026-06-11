import React from 'react'
import Container from './layouts/Container'
import { HiArrowSmallRight } from "react-icons/hi2"
import { Link } from 'react-router'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";



const ProductShowcase = ({ title, allData }) => {

  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className='text-[#FF8A00]' />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className='text-[#FF8A00]' />);
      } else {
        stars.push(<FaStar key={i} className='text-[#CCCCCC]' />);
      }
    }
    return stars;
  }


  return (
    <div>
      <Container>
        {/* title start here */}
        <div className='flex items-center justify-between pt-15 pb-8'>
          <h2 className='font-pop font-semibold text-[32px] text-[#1A1A1A]'>{title}</h2>
          <Link to='/cat' className='flex items-center gap-2 font-pop font-medium text-[16px] text-[#00B207]'>View all <HiArrowSmallRight className='text-[24px]' /></Link>
        </div>
        {/* title end here */}

        {/* product start here  */}
        <div className='grid grid-cols-6 gap-6'>
          {allData.map(pro => (
              <div key={pro.id} className='hover:border hover:border-[#2C742F] rounded-lg p-4 cursor-pointer'>
                <img src={pro.thumbnail} alt={pro.title} className='w-full object-cover mb-4 rounded-lg' />
                <h3 className='font-pop font-semibold text-[18px] text-[#1A1A1A] mb-2'>{pro.name || pro.title}</h3>
                <p className='font-pop font-medium text-[16px] text-[#1A1A1A] mb-2'>
                  {pro.price ? `$${pro.price}` : ""}
                </p>
                <p className='font-pop font-medium text-[14px] text-[#1A1A1A]'>
                  {pro.rating ? `${pro.rating}` : ""}
                </p>
                <div className='flex items-center gap-1'>
                  {pro.rating ? renderStars(pro.rating) : ""}
                </div>
              </div>
            )
          )}
        </div>
        {/* product end here  */}
      </Container>
    </div>
  )
}

export default ProductShowcase