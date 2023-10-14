import React from "react"
import { close, hamburger, logo } from "../assets/icons"
import { navLinks } from "../constants"
import Button from "./Button"
// ` `
const Nav = () => {
  const[click, setClick] = React.useState(false)
  const handleClick = () => setClick(prevClick => !prevClick)
  return (
    <header className='padding-x py-6 absolute z-10 w-full bg-White'>
      <nav className="flex justify-between items-center max-container">
      <a href="/" className="lg:ml-[30px]">
        <img
          src={logo}
          alt='Logo'
          width={130}
          height={29}
          
        />
      </a>
      
      <div>
      <ul className={`flex-1 flex justify-center items-center gap-12 max-lg:hidden ${click ? '' : ''} `}>
        {navLinks.map((item) => (
          <li key={item.label}>
          <a
            href={item.href}
            className='text-GrayishBlue text-[15px] hover:text-DarkBlue hover:border-b-4 hover:border-LimeGreen transition duration-300 pb-[29px] font-mono tracking-tight cursor-pointer'
          >
          {item.label}

          </a>
          </li>
        ))}
      </ul>
      
      </div>
      <div className='hidden max-lg:block'>
        <div onClick={handleClick}>
          {click ? <img
          src={close}
          alt='close'
          width={17}
          height={17}
        /> : <img
          src={hamburger}
          alt='hamburger'
          width={25}
          height={25}
        />}         
        </div>
      </div>
      <div className="max-lg:hidden mr-[22px]">
        <Button label='Request Invite'/>
      </div>
      </nav>
      <div className="flex justify-center items-center text-center lg:hidden">
      <ul className={`flex-1 block absolute justify-center px-40 py-10 rounded bg-white items-center gap-10 mt-[400px] ${click ? 'block' : 'hidden'} `}>
        {navLinks.map((item) => (
          <li key={item.label}>
          <a
            href={item.href}
            className='leading-[3rem] text-GrayishBlue text-[20px] hover:text-DarkBlue font-mono tracking-tight cursor-pointer hover:LimeGreen'
            onClick={handleClick}
          > 
            {item.label}
          </a>
          </li>
        ))}
      </ul>
      </div>
    </header>
  )
}

export default Nav