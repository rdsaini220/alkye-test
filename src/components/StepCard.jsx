import React from 'react'
import Logo from './Logo'
import Heading1 from './Heading1'

const StepCard = ({ children, step, title, titleDesc, description  }) => {
  return (
    <div className='step-card block bg-[#fff] rounded-[50px] py-12 md:py-24 px-8 md:px-20'>
        <Logo/>
        <div className="grid md:grid-cols-12 gap-6 md:gap-x-16 mt-12">
            <div className="md:col-span-5">
                <span className='uppercase'>{step}</span>
                <Heading1 title={title} />
                <p className='text-xs leading-6 md:text-2xl md:leading-[50px]'>{titleDesc}</p>
            </div>
            <div className="md:col-span-7">
                  {children}                  
            </div>
        </div>
        {
          description && <p className='text-sm leading-8 mt-12'>{description}</p>
        }
    </div>
  )
}

export default StepCard