import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Buyzaar connects users with a wide range of products through a smooth and user-friendly interface.Our goal is to deliver convenience, reliability, and smart shopping in one place.</p>
           <p>It redefines online shopping with a seamless blend of technology and convenience.From browsing to checkout, we ensure a fast, secure, and enjoyable experience.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Our mission is to empower users with smart, efficient, and secure shopping solutions.We strive to build a platform driven by innovation and reliability.Where technology seamlessly meets everyday convenience.</p>
           </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We ensure that every product meets high standards of quality and reliability.Our platform is built to deliver consistent performance and secure transactions.Providing users with a smooth, trustworthy, and satisfying shopping experience every time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>We prioritize convenience by making shopping simple, fast, and accessible anytime.Our platform is designed to provide an easy and hassle-free browsing and checkout experience.Helping users save time while enjoying a smooth and effortless shopping journey.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We are committed to delivering exceptional customer service with prompt and reliable support.Our team ensures that every query and concern is handled with care and efficiency.Providing a smooth, responsive, and customer-focused experience at every step.</p>
        </div>
        
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
