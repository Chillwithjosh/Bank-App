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
      {/* <ul className={` w-full block  justify-center items-center gap-12  flex-grow lg:flex lg:items-center lg:w-auto ${click ? ' ' : ''} `}> */}
      <ul className={`flex-1 flex justify-center items-center gap-12 max-lg:hidden ${click ? '' : ''} `}>
        {navLinks.map((item) => (
          <li key={item.label}>
          <a
            href={item.href}
            className='text-GrayishBlue text-[15px] hover:text-DarkBlue hover:border-b-4 hover:border-LimeGreen pb-[29px] font-mono tracking-tight cursor-pointer'
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
      <ul className={`flex-1 block absolute justify-center px-40 py-10 rounded bg-white items-center gap-10 mt-[400px] ${click ? 'block ' : 'hidden'} `}>
        {navLinks.map((item) => (
          <li key={item.label}>
          <a
            href={item.href}
            className='text-[30px] leading-[3rem] text-DarkBlue font-mono tracking-tight cursor-pointer'
          >
          {item.label}

          </a>
          </li>
        ))}
      </ul>
      </div>

    {/* <nav className="flex items-center justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <div onClick={handleClick} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
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
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${click ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
        <ul className={` w-full block  justify-center items-center gap-12  flex-grow lg:flex lg:items-center lg:w-auto ${click ? 'block ' : 'hidden'} `}>
        {navLinks.map((item) => (
          <li key={item.label}>
          <a
            href={item.href}
            className='text-GrayishBlue text-[15px] hover:text-DarkBlue hover:border-b-4 hover:border-LimeGreen pb-[29px] font-mono tracking-tight cursor-pointer'
          >
          {item.label}
          </a>
          </li>
        ))}
      </ul>
       </div>
       <div className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
        <Button label='Request Invite'/>
      </div>
     </div>
   </nav> */}
    </header>
  )
}

export default Nav