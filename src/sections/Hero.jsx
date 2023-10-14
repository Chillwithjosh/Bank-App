import { bgintrodesktop, bgintromobile } from "../assets/icons"
import { imagemockups } from "../assets/images"
import Button from "../components/Button"
// 6 8 9
const Hero = () => {
  return (
    <section className="max-container mb-[4px] w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-xl:flex-col-reverse pb-20">
        <div className="relative  flex flex-col justify-center sm:items-start w-full padding-x sm:pt-[10rem] items-center">
          <h1 className="text-DarkBlue  max-sm:text-[2rem] md:text-[5rem]">
          <span className="relative">Next generation</span>
          <br/>
          <span className="inline-block sm:mt-1 pl-2">digital banking</span> 
        </h1>
          <p className="sm:max-w-sm text-GrayishBlue sm:mt-10 mt-4">Take your fianacial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <div className="sm:mt-10 mt-6">
          <Button label='Request Invite' />
          </div>
        </div>
        <div className="">
          <img
            src={bgintrodesktop}
            width={1000}
            height={100}
            className="absolute  top-0 max-lg:hidden"
          />
          <img
            src={bgintromobile}
            className="absolute object-cover w-full sm:hidden"
          />
          <img
            src={imagemockups}
            className="relative top-0 sm:ml-[77px] "
          />
        </div>
    </section>
  )
}

export default Hero