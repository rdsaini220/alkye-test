import dynamic from 'next/dynamic'
const Heading1 = dynamic(() => import("@/components/Heading1"), { ssr: false })
const Logo = dynamic(() => import("@/components/Logo"), { ssr: false })
const SliderCard = dynamic(() => import('@/components/SliderCard'), { ssr: false })

const slideList = [
  {
    id: 1,
    url: '/slide1.png',
    title: 'Slide 1'
  },
  {
    id: 2,
    url: '/slide2.png',
    title: 'Slide 2'
  },
  {
    id: 3,
    url: '/slide3.png',
    title: 'Slide 3'
  },
  {
    id: 4,
    url: '/slide1.png',
    title: 'Slide 4'
  },
]

export default function Dashboard() {
  return (
        <section className='bg-black text-white py-16 md:py-24'>
            <div className='container mx-auto max-w-[1536] px-4 pe-0 md:px-6'>
                <div className='step-card block rounded-[50px] py-12 md:py-24 pe-0 ps-8 md:px-20'>
                    <Logo url='/logo-white.svg'/>
                    <Heading1 title={'Welcome Test'} className="text-white mt-12" />
                    <p className="text-xs leading-6 md:text-2xl md:leading-[50px]">Hope you having a good day!</p>
                    <div className="pt-16 md:pt-20">
                      <Heading1 title={'Photography'} className="text-white mb-6 md:mb-12" />
                      <SliderCard slides={slideList}/>
                    </div>
                    <div className="pt-16 md:pt-20">
                      <Heading1 title={'Learning'} className="text-white mb-6 md:mb-12" />
                      <SliderCard slides={slideList}/>
                    </div>
                </div>          
            </div>
        </section>
  );
}
