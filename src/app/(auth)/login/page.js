'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
const StepCard = dynamic(() => import('@/components/StepCard'), { ssr: false })


const Page = () => {
  const { login } = useAuth()
  const router = useRouter()
  const [step, setStep] = useState(false)
  const [passwordType, setPasswordType] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    if(username != ''){
      setStep(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({
      username,
      password,
    }).then((res) => res)
    if (result?.token) {
      router.push('/dashboard')
      } else {
        console.log(result);
    }
  };
  return (
    <section className='bg-[#F4F4F4] py-16 md:py-24'>
        <div className='container mx-auto max-w-[1536] px-4 md:px-6'>
          {
            !step ? 
            <StepCard step="Step1" title="Enter your username address to continue" titleDesc={<>Log in to your account. If you don’t have <br className='hidden md:block'/> one, you will be prompted to create one.</>} >
                  <>
                    <div className="mb-7">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder='username' className="h-[50px] md:h-20 w-full text-2xl px-12 bg-white border border-[#939393] text-gray-900 rounded-md md:rounded-lg" />
                    </div>
                    <div className='grid grid-cols-12 gap-2 md:gap-4 items-center'>
                      <div className='col-span-6 md:hidden'>
                          <a href='#'>Have an account?</a>
                      </div>
                      <div className='col-span-6 md:col-end-13 md:col-span-5'>
                          <button type='button' onClick={() => handleNext()} className={`h-[38px] md:h-[75px] w-full text-white bg-black hover:bg-black focus:ring-none text-xs md:text-2xl leading-4 md:leading-[32px] font-bold rounded-lg px-5 py-2.5 me-2 mb-2`} >Continue</button>
                      </div>
                    </div>
                  </>
            </StepCard> : 
            <StepCard 
                step="Step2" 
                title="Create an account to continue" 
                titleDesc={<>You’ll be able to log in to Dingoo with this <br className='hidden md:block'/> username address and password.</>} 
                description={`Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.`}
                >
                  <>
                    <div className="relative mb-7 overflow-hidden">
                        <label htmlFor="password" className="block text-xs leading-6 md:text-2xl md:leading-[48px] mb-2 md:mb-0">Enter a password to create your account with</label>
                        <input id="password" type={passwordType ? 'text' : 'password'}  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className="h-[50px] md:h-20 w-full text-2xl px-12 bg-white border border-[#939393] text-gray-900 rounded-md md:rounded-lg" required />
                        <div onClick={() => setPasswordType(!passwordType)} className="absolute bottom-[25%] end-0 flex items-center pe-10 z-5 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_124)">
                                <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68189 3.96914 7.6566 6.06 6.05999M9.9 4.23999C10.5883 4.07887 11.2931 3.99833 12 3.99999C19 3.99999 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6511 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1961C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.87999" stroke="#636363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1L23 23" stroke="#636363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </g>
                              <defs><clipPath id="clip0_1_124"><rect width="24" height="24" fill="white"/></clipPath></defs>
                            </svg>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-2 md:gap-4 items-center'>
                      <div className='col-span-6 md:col-span-7'>
                          <p className='text-[10px] leading-4 md:text-xl md:leading-7'>Use a minimum of 6 characters (case sensitive) with at least one number or special character.</p>
                      </div>
                      <div className='col-span-6 md:col-span-5'>
                          <button type='button' onClick={handleSubmit} disabled={!password} className={`h-[38px] md:h-[75px] w-full text-white bg-black hover:bg-black focus:ring-none text-xs md:text-2xl leading-4 md:leading-[32px] font-bold rounded-lg px-5 py-2.5 me-2 mb-2`} >Agree & Continue</button>
                      </div>
                    </div>
                  </>
            </StepCard>
          }
        </div>
    </section>
  )
}

export default Page