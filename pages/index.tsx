'use client'
import Image from "next/image";
import plusIcon from "../assets/images/users-plus.svg"
import serverIcon from "../assets/images/server-01.svg"
import userImage1 from "../assets/images/user-image1.svg"
import targetIcon from "../assets/images/target-05.svg"
import percentIcon from "../assets/images/percent-03.svg"
import cpuIcon from "../assets/images/cpu-chip-01.svg"
import childIcon from "../assets/images/childIcon.svg"
import cubeIcon from "../assets/images/cube-01.svg"
import shieldIcon from "../assets/images/shield-tick.svg"
import dataflowIcon from "../assets/images/dataflow-03.svg"
import smileIcon from "../assets/images/man-smile.svg"
import barIcon from "../assets/images/bar-chart-circle-01.svg"
import backgroundImage from "../assets/images/backgroundCover1.png"
import backgroundCoverImage from "../assets/images/backgroundCoverImage.svg"
import roundImage from "../assets/images/roundBackgroundCoverImage.png"

import plus from "../assets/images/plus-icon.svg"
import minus from "../assets/images/minus-icon.svg"
import { useState } from "react";
export default function Index() {
  const [tab, setTab]  = useState(0)

  return (
    <main>
      <section className='container mx-auto max-w-[1237px] px-5 pt-16' id="home">
          <article className='container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0'>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[7.5rem] dark:text-white">LOREM IPSUM</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">

              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.8rem] text-white text-[1.42rem] mb-3">DOLER SIT</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.</p>
                <div className="mt-5">
                  <Image alt="plus-icon" src={plusIcon} width="20" height="20" className=" mr-2"  />
                </div>
              </div>
              
              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase ">Lorem ipsum dolor sit</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.</p>
                <div className="mt-5">
                  <Image alt="server-icon" src={serverIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>

              <div className="md:my-0 my-8">
                <Image alt="user-image" src={userImage1} width="500" height="500" className=" mr-2" />
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase lg:mt-10 max-sm:mt-16">Lorem ipsum dolor sit</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <div className="mt-5">
                  <Image alt="server-icon" src={targetIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>

            </div>
          </article>

          <article className="text-white pt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">Lorem ipsum</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <div className="mt-5">
                  <Image alt="server-icon" src={percentIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>

              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">dolor sit amet</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <div className="mt-5">
                  <Image alt="server-icon" src={cpuIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>

              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
              <div></div>

              <div>
                <Image alt="child-icon" className="w-full" src={childIcon} />
              </div>

              <div className="max-sm:my-32 max-sm:my-10">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">Lorem ipsum dolor</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <div className="mt-5">
                  <Image alt="server-icon" src={cubeIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>
            </div>

          </article>

          <article className="lg:mt-[20rem] py-10 mb-10 lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer" id="about">
            <div className="absolute w-[100%] h-[400px] backgroundCoverImage">
              <Image alt="background-cover-image" src={backgroundCoverImage} layout="fill" objectFit="cover"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 transition-all h-[25rem] items-center">
              <div className="relative h-[25rem]">
                <h1 className="mb-4 font-bold tracking-tight leading-none text-[7.5rem] text-white uppercase">about <br/>us</h1> 
                <div className="absolute top-[6.5rem] left-[13rem] w-[300px] h-[300px] hover:hidden backgroundRectangleImage">
                  <Image alt="round-image" className="rounded-full" src={roundImage} layout="fill" />
                </div>
              </div>
              <p className="leading-8 text-[#FFFFFF] opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>    
          </article>
      </section>
          <article>
            <div className="overflow-hidden flex relative h-[50px]">
              <Image src={backgroundImage} alt="background-image" layout="fill" />
              <div className=" animate-marquee whitespace-nowrap text-white flex align-center">
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
              </div>

              <div className=" animate-marquee whitespace-nowrap text-white flex align-center">
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
              </div>

              <div className=" animate-marquee whitespace-nowrap text-white flex align-center">
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
                <span className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">lorem ipsum</span>
              </div>
            </div>
          </article>
      <section className='container mx-auto max-w-[1237px] px-5 pt-16' id="dolor">

          <article className='container mx-auto max-w-[1237px] pt-16'>
            <h1 className="lg:mb-24 sm:mb-5 text-4xl font-bold text-white md:text-5xl lg:text-8xl dark:text-white uppercase md:w-9/12 xs:w-full">lorem ipsum dolor set</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">

              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">Lorem ipsum dolor</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="mt-5">
                  <Image alt="plus-icon" src={shieldIcon} width="20" height="20" className=" mr-2"  />
                </div>
              </div>
              
              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">dolor sit amet</h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="mt-5">
                  <Image alt="server-icon" src={dataflowIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>

              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-16">
              <div></div>
              <div>
                <Image src={smileIcon} alt="man-smile-icon" className="w-full"/>
              </div>
              <div>
                <h1 className="max-sm:mt-10 font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">Lorem ipsum</h1>
                <p className="leading-7 text-[#FFFFFF] opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="mt-5">
                  <Image alt="bar-icon" src={barIcon} width="20" height="20" className=" mr-2" />
                </div>
              </div>
            </div>
            
          </article>

          <article className="pt-20 lg:mt-[15rem] md:mt-[5rem]">
            <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase">lorem ipsum dolor</h1>
          </article>
      </section>
      <footer className="lg:mt-[4rem] lg:pb-[17rem]">        
        {[1,2,3,4,5].map((_,index)=>(
            <div className="cursor-pointer" onClick={()=>setTab(index)} key={index}>
            <div className=" rounded p-2 pb-2 ">
                <div className="relative h-[45px]">
                    {tab ===index &&
                      <Image src={backgroundImage} alt="background-image" layout="fill"/>
                    }
                    <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
                        <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem]">Lorem ipsum dolor sit amet</p>
                        <div>
                          <button className="w-full text-left text-white font-semibold focus:outline-none" >
                            <Image alt="plus-icon" src={tab === index ? plus : minus} />
                          </button>
                        </div>
                    </div>
                    
                </div>
                
                {tab===index &&
                <div className='container mx-auto max-w-[1237px] px-5 '>
                    <p className="flex justify-around max-w-[77rem] leading-7 mt-5 text-[#a1a1a1]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                }
            </div>  
            </div>
        ))}
    </footer>
    </main>
  );
}
