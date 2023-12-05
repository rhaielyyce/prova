import Image from 'next/image'
import logo from '@/img/Logo.png'
import background from '@/img/background.png'
import logotwo from '@/img/logotwo.png'

export default function Home() {
  return (
    <main className='bg-zinc-800 max-h-screen h-screen flex flex-col items-center lg:bg-zinc-800'>
      

      <div className='flex flex-col lg:bg-white lg:flex lg:flex-col lg:items-center lg:rounded-2xl lg:w-96 lg:h-[430px] lg: lg:mt-24'>
       
         <Image className=' lg:sr-only not-sr-only w-48 ml-12 mt-40 mb-60 ' src={logo} alt='cover' />
         <Image className=' sr-only lg:not-sr-only lg:h-7 lg:w-44 lg:mt-12 ' src={logotwo} alt='cover'/>
      
          <div className='flex flex-col lg:w-96 lg:h-96 lg:mt-10 lg:ml-14 lg:flex lg:flex-col '>
        

            <label className='text-white mb-1 lg:text-black ' htmlFor="">Nome de usuário</label>
            <input className='bg-zinc-700 border mb-8 border-white rounded-md w-80 h-14 lg:border-gray-500 lg:bg-white  lg:h-12' type="text" />

            <label className='text-white mb-1 lg:text-black lg:mt-[-15px]' htmlFor="">Senha</label>
            <input className=' bg-zinc-700 border mb-8 border-white rounded-md w-80 h-14  lg:border-gray-500 lg:bg-white  lg:h-12' type="password" name="" id="" />

            <button className='text-white bg-fuchsia-800 mb-5 rounded-md w-80 h-14 lg:mt-[-20px]'>Entrar</button>
 
            <button className='text-fuchsia-800 font-bold bg-white  rounded-md w-80 h-14 lg:bg-gray-300 lg:h-10 lg:mt-[-10px]'>Esqueci minha senha</button>
          </div>

      </div>
    </main>
    
  )
}
