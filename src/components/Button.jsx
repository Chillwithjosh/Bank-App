const Button = ({label}) => {
  return (
    <button className="rounded-full hover:opacity-90 cursor-pointer bg-gradient-to-r from-LimeGreen from-50% via-BrightCyan to-blue-500 to-88% text-white py-[7px] px-5 font-semibold">
        {label}
    </button>
  )
}

export default Button