import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className='flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-[url(/bg-main-desktop.png)] bg-no-repeat'>
        <Image src={"/bg-card-front.png"} alt='card front' width={447} height={244} className='m-10' />
        <Image src={"/bg-card-back.png"} alt='card front' width={447} height={244} className='ml-20' />
      </div>
      <div className='flex flex-1 items-center justify-center h-full'>
        <form className='flex flex-col w-1/2'>
          <label>CARDHOLDER NAME</label>
          <input placeholder='John Doe'></input>
          <label>CARD NUMBER</label>
          <input placeholder='1234 XXXX XXXX 1234'></input>
          <label>EXP. DATE</label>
          <input placeholder='MM/YY'></input>
          <label>CVC</label>
          <input placeholder='123'></input>
          <button>Confirm</button>
        </form>
      </div>
    </main >
  )
}
