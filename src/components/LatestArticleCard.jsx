import React from 'react'

const LatestArticleCard = ({imgURL, customerName, heading, feedback}) => {
  return (
    <div className='bg-white'>
      <div>
        <img
          src={imgURL}
          className='object-cover'
        />
      </div>
      <div className='pt-10 pb-8 pl-6 pr-6'>
        <p className='text-GrayishBlue'>{customerName}</p>
        <h3 className='text-DarkBlue font-medium mt-2 hover:text-LimeGreen cursor-pointer'>{heading}</h3>
        <p className='text-GrayishBlue mt-2'>{feedback}</p>
      </div>
    </div>
  )
}

export default LatestArticleCard