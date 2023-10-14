import React from 'react'
import { Services } from '../constants'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <section id='about' className='padding-x'>
      <div className='flex-1 max-sm:flex flex-col items-center justify-center'>
      <h1 className="text-DarkBlue max-sm:text-[30px] md:text-[3rem]">Why choose Easybank?</h1>
          <p className="sm:max-w-sm text-GrayishBlue sm:mt-4 mt-4 max-sm:text-center">We leaverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-1 grid-cols-1 sm:gap-4 gap-14" >
        {Services.map((service =>(
          <AboutCard key= {service.label} {...service}/>
        )))}
      </div>
    </section>
  )
}

export default About