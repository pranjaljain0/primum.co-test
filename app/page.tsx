"use client";

import Image from 'next/image'
import InputWrapper from './components/InputWrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className='flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-[url(/bg-main-desktop.png)] bg-no-repeat'>
        <Image src={"/bg-card-front.png"} alt='card front' width={447} height={244} className='m-10' />
        <Image src={"/bg-card-back.png"} alt='card front' width={447} height={244} className='ml-20' />
      </div>
      <div className='flex flex-1 items-center justify-center h-full'>
        <form className='flex flex-col w-1/2'>
          <label className='text-lg'>CARDHOLDER NAME</label>
          <InputWrapper component={<input placeholder='John Doe' className='p-2 rounded w-full text-lg' />} />
          <label className='text-lg'>CARD NUMBER</label>
          <InputWrapper component={<input placeholder='1234 XXXX XXXX 1234' className='p-2 rounded w-full text-lg' />} />
          <span>Wrong format, numbers only</span>

          <div className='flex'>
            <div className='flex flex-col flex-1 pr-1'>
              <label>EXP. DATE</label>
              <div className='flex'>
                <InputWrapper component={<input placeholder='MM' className='p-2 rounded w-full text-lg' />} />
                <InputWrapper component={<input placeholder='YY' className='p-2 rounded w-full text-lg' />} />
              </div>
              <span>Can't be blank</span>
            </div>

            <div className='flex flex-col flex-1'>
              <label>CVC</label>
              <InputWrapper component={<input placeholder='123' className='p-2 rounded w-full text-lg' />} />
              <span>Can't be blank</span>
            </div>
          </div>
          <button className='rounded p-2 bg-slate-50 text-black mt-4'>Confirm</button>
        </form>
      </div>
    </main >
  )
}
