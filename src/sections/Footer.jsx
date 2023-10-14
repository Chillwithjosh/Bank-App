import React from 'react'
import { api, logo } from '../assets/icons'
import { socialMedia } from "../constants"
import Button from '../components/Button'

const Footer = () => {
  return (
    <footer id='footer' className='padding-x'>
      <div className='flex-1 flex flex-col sm:flex-row sm:gap-40 items-center justify-center'>
        <div>
          <img
            src={logo}
            className='bg-white rounded-full py-2 px-4 ml-4'
          />
        <div className="flex items-center mt-12">
          {socialMedia.map((icon) =>(
          <div key={icon.id} className="flex justify-center items-center w-11 h-11 rounded-full">
            <img
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className='hover:fill-LimeGreen cursor-pointer'
            />
          </div>
          ))}
        </div>
        </div>
        <div>
          <ul className='text-center'>
            <li className='text-white font-medium mb-2 sm:mb-5 hover:text-LimeGreen cursor-pointer'><a href="#about">About Us</a></li>
            <li className='text-white font-medium mb-2 sm:mb-5 hover:text-LimeGreen cursor-pointer'>Contact</li>
            <li className='text-white font-medium mb-2 sm:mb-5 hover:text-LimeGreen cursor-pointer'><a href="#LatestArticles">Blog</a></li>
          </ul>
        </div>
        <div>
          <ul className=' text-center '>
            <li className='text-white font-medium mb-2 sm:mb-5 hover:text-LimeGreen cursor-pointer'>Careers</li>
            <li className='text-white font-medium mb-2 sm:mb-5 hover:text-LimeGreen cursor-pointer'>Support</li>
            <li className='text-white font-medium mb-2 sm:mb-5 hover:text-LimeGreen cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <Button label='Request Invite' />
          <p className='text-GrayishBlue text-center mt-5'>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer