import React from 'react'

const AboutCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 flex flex-col items-center justify-center#'>
      <img
        src={imgURL}
        width={50}
        height={50}
      />
      <h3 className='text-DarkBlue text-lg font-medium mt-6 text-center'>{label}</h3>
      <p className='text-GrayishBlue mt-6 text-center'>{subtext}</p>
    </div>
  )
}

export default AboutCard