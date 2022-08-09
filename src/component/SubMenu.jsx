import React from 'react'

const SubMenu = ({rotate,toggleRotate,title,childrens}) => {
    let nog = 0;
  return (
     <>
       <div className=""
      
       >
       <section className=' p-2 hover:border-[#00a8e8] border cursor-pointer duration-300 '
  
  >
    <div className="flex justify-between items-center"
      onClick={toggleRotate}
    >
      <div className='text-base md:text-lg lg:text-xl  xl:text-2xl '>
          <span >
              {title}
          </span>
      </div>
      <div className="">
          <img src="/down.png" alt="" className={` transition-all duration-150 ease-linear ${rotate ?"rotate-[-90deg]": "rotate-[0deg]"}`} />
      </div>
    </div>
    <div id='sideBarMenu' className={`text-sm md:text-base lg:text-lg xl:text-xl pt-[0.25em] transition-all duration-500   ${rotate?"h-[180px] overflow-hidden  ":"h-0 overflow-hidden"}`}>
       {
          childrens.map((child,key)=>{
               let count = key + 1
               nog =  count/10 
              return (
                  <p 
                  style={{  transitionDelay:`${key+1 && nog+"s"}`}}  
                  className={`p-[0.3em] transition-all duration-300  ${rotate?"ml-[0] opacity-100":"opacity-0 ml-[60px] "}`}  key={key}>
                    {child.title}
                </p>
              )
          })
       }
    </div>
  </section>
       </div>
     </>
  )
}

export default SubMenu
