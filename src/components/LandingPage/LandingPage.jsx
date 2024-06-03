import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import LandingOchiFlag from './ochi_logo.jpg'


const LandingPage = () => {
    
    
  return (
    <div  data-scroll data-scroll-section data-scroll-speed ="-0.4" className='h-screen w-full bg-[#e0e0e0] text-black pt-1'>
        
        <div className='Textarea  mt-[11vw] px-20' >
            {["WE CREATE","EYE-OPENING" , "PRESENTATIONS"].map((item,index)=>( 
            <div key = {index} className= {`Masker ${index===1 && " flex items-center"}`}>
                {index==1 && <motion.div  initial={{width: 0}} animate={{width: "8.4vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='h-[80px] w-32 bg-[#9d4040] mt-[18px] rounded-lg mb-1 mr-3 overflow-hidden '>
                   <img src= {LandingOchiFlag} className='bg-cover h-full w-full'  /> </motion.div>}
                <h1 className='font-["Founders Grotesk"] uppercase text-[7.4vw] font-bold tracking-tighter leading-[5.8vw]'>{item}</h1>
            </div>))}
        </div>

        <div className=' border-t-[2px] mt-[8vw] border-[#a6a3a3] flex justify-between items-center py-2 px-14'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='font-normal tracking-wide'>{item}</p>
            ))}
            <div className='ButtonArea '>
               <div className='mt-2  flex gap-3'>
                    <a  href = '' className='font-normal font-md px-4 py-1 rounded-full border-[2px] border-zinc-500 '>START THE PROJECT</a>
                    <a href = '' className='font-normal  mt-[1px] w-8 h-8 rounded-full border-[2px] border-zinc-500 flex items-center justify-center '><ArrowOutwardIcon/></a>
               </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage