import logo from '/Network-Color1.svg'
import menu from '/menu-icon.svg'
import heroText from '/hero-text.png'
import heroImage from '/hero-image.png'
import wavyImage from '/wavy-image-hero.png'
function App() {
   return (
    <>
      <header className="w-full min-h-[60px] bg-[#ECEADD] flex justify-between px-[24px]">
        <img src={logo}/>
        <img src={menu}/>
      </header>
      <main className='flex flex-col items-center bg-[#ECEADD]'>
        <img src={heroText} className='mt-[24px] ml-[24px]'/>
        <p className='w-[327px] mt-[12px] text-[#183283] text-[18px]'>Empower your franchisees and locations to grow with our intelligent dashboards and tools.</p>
        <button className='text-white bg-[#FF9A63] w-2/3 mt-[24px] h-[56px] rounded-[12px]'>Contact Us</button>
      </main>
      <section className='relative bg-[#ECEADD] pt-[39px] flex'>
        <img src={wavyImage} className='absolute top-[9px] right-1' />
        <img src={heroImage} className='mx-auto z-[10]'/>
        <section className='bg-gradient-to-br h-full  from-[#182E76] to-[#37233B] w-full rounded-tl-[40px] rounded-tr-[40px] absolute top-[60%] min-h-screen'>
          <div className='flex justify-center'>
            Hola
          </div>
        </section>
        </section>
      
    </>
  )
}

export default App
