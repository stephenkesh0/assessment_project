import React from 'react'
import { Link } from 'react-router-dom'

const companyLogo = [
  {id: 1, img: "/images/company/brand1.png"},
  {id: 2, img: "/images/company/brand2.png"},
  {id: 3, img: "/images/company/brand3.png"},
  {id: 4, img: "/images/company/brand4.png"},
  {id: 5, img: "/images/company/brand5.png"},
]

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      {/* brand logo */}
      <div className='flex items-center justify-around flex-wrap gap-2 py-5'>
        {
          companyLogo.map(({id, img}) => (
            <div key={id}><img src={img} alt="" /></div>
          ))
        }
      </div>
    </div>
  )
}

export default Category