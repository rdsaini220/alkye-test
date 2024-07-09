const Heading1 = ({ title, className }) => {
  return (
    <h1 className={`text-2xl leading-7 md:text-5xl md:leading-[55px] text-black font-medium ${className}`}>{title}</h1>
  )
}

export default Heading1