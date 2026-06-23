import React from 'react'
import graphImage from '../assets/Graph.png'

const DashboardHome = () => {
  return (
    <div className='h-auto w-[70vw] m-auto mb-28 '>

      {/* HEADER SECTION */}
      <div className='w-full h-auto lg:h-20  bg-white mt-4 rounded-2xl grid justify-center p-5 items-center md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1'>
        <div className=' flex flex-col items-start '>
          <div className='text-sm text-gray-600 flex w-fit justify-center items-center'>
            <p>Total Portfolio Value</p>
            <span className="material-symbols-outlined !text-[16px]">info</span>
          </div>
          <div className=' text-2xl '>$12033.00</div>
        </div>

        <div className='ml-16 flex flex-col items-start'>
          <div className='text-sm text-gray-600'>Wallet Balance</div>
          <div className='!font-bold flex justify-center items-center'>
            <p className='text-2xl'>$29840.00</p>
            <p className='text-[10px] text-gray-600 px-0.5 bg-black/5 inline h-4'>BTC</p>
          </div>
        </div>

        <div className='!font-bold flex justify-center items-center'>
          <p className=' text-2xl'>$0343</p>
          <p className='text-[10px] text-gray-600 px-0.5 bg-black/5 inline h-4'>INR</p>
        </div>

        <div className='flex pl-20 gap-5 flex-row  lg:flex-row '>
          <button className='flex justify-center items-center px-3.5 py-1.5 w-28 h-10 bg-violet-800 text-white hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl'>
            <span className="material-symbols-outlined">vertical_align_bottom</span>
            <p className='text-sm'>Deposit</p>
          </button>
          <button className='flex justify-center items-center px-3.5 py-1.5 w-28 h-10 bg-violet-800 text-white hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl'>
            <span className="material-symbols-outlined">publish</span>
            <p className='text-sm'>Withdraw</p>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <main className='flex xl:h-80 gap-6 h-auto mt-3 w-full xl:flex-row flex-col justify-between items-center'>

        {/* GRAPH AREA */}
        <div className='xl:h-full xl:w-[45%] w-full h-[45%] bg-white rounded-2xl p-5'>
          <div className='upper h-10 w-full flex'>
            <div className="left flex justify-center flex-col w-[50%] h-full">
              <p className='text-sm text-gray-600'>Current Price</p>
              <div className='flex items-center gap-2 w-fit'>
                <p className='text-2xl'>$26343</p>
                <div className='flex items-center text-sm text-green-600'>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  <span>0.04%</span>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center w-[40%] h-full gap-2">
              <button className='flex justify-center items-center px-3.5 py-1.5 bg-violet-800 text-white hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl'>
                <span className="material-symbols-outlined">add</span>
                <p className='text-sm'>Buy</p>
              </button>
              <button className='flex justify-center items-center px-3.5 py-1.5 bg-violet-800 text-white hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl'>
                <span className="material-symbols-outlined">remove</span>
                <p className='text-sm'>Sell</p>
              </button>
            </div>
          </div>

          <div className='middle flex w-full h-10 justify-between items-center pt-10'>
            <div></div>
            <ul className='flex px-1 py-0.5 bg-black/10 text-gray-600 w-fit gap-3 text-xs mr-4'>
              <li>1H</li>
              <li>1D</li>
              <li>1W</li>
              <li>1M</li>
            </ul>
          </div>

          <div className="lower">
            <img className='mt-10 w-full ' src={graphImage} alt="Crypto Graph Placeholder" />
            <ul className='flex w-full h-11 justify-between items-center text-xs text-gray-600'>
              <li>7:17PM</li>
              <li>12:55AM</li>
              <li>6:14PM</li>
              <li>7:16PM</li>
              <li>9:18PM</li>
            </ul>
          </div>
        </div>

        {/* TRANSACTIONS AREA */}
        <div className='right-main xl:h-full xl:w-[45%] w-full h-[45%] bg-white rounded-2xl pl-5 pr-5'>
          <div className='h-12 w-full flex justify-start items-center text-sm text-gray-600'>Recent Transactions</div>
          <ul className='flex flex-col gap-7'>
            <li className='flex justify-between items-center'>
              <div className="left flex justify-center items-center gap-2.5">
                <span className="material-symbols-outlined p-1.5 rounded-full bg-black/10">attach_money</span>
                <div>
                  <p className='text-sm'>INR Deposit</p>
                  <p className='text-xs text-gray-600'>2022-06-09 7:06 PM</p>
                </div>
              </div>
              <div className="right">
                <p className='!font-bold'>+$29840.00</p>
              </div>
            </li>
            <li className='flex justify-between items-center'>
              <div className="left flex justify-center items-center gap-2.5">
                <span className="material-symbols-outlined p-1.5 rounded-full bg-black/10">currency_bitcoin</span>
                <div>
                  <p className='text-sm'>BTC Sell</p>
                  <p className='text-xs text-gray-600'>2022-05-27 8:17 PM</p>
                </div>
              </div>
              <div className="right">
                <p className='!font-bold'>- 12.48513391 BTC</p>
              </div>
            </li>
            <li className='flex justify-between items-center'>
              <div className="left flex justify-center items-center gap-2.5">
                <span className="material-symbols-outlined p-1.5 rounded-full bg-black/10">attach_money</span>
                <div>
                  <p className='text-sm'>INR Deposit</p>
                  <p className='text-xs text-gray-600'>2022-10-09 7:26 PM</p>
                </div>
              </div>
              <div className="right">
                <p className='!font-bold'>+ ₹81,123.10</p>
              </div>
            </li>
          </ul>
          <button className='w-full h-10 rounded-2xl mt-7 bg-black/10 hover:cursor-pointer hover:bg-black/15 !font-semibold'>View All</button>
        </div>

      </main>

      {/* FOOTER SECTION */}
      <footer className='xl:h-24 h-48 w-full mt-4 flex xl:flex-row flex-col justify-between items-center'>
        <div className="left p-5 xl:w-[45%] w-full xl:h-full h-[45%] bg-white rounded-2xl flex justify-center  items-start flex-col">
          <button className='flex justify-center items-center px-4 py-1.5 bg-violet-800 text-white hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl text-sm'>Loans</button>
          <div className='text-sm mt-2'>Learn more about Loans – Keep your Bitcoin, access its value without selling it</div>
        </div>

        <div className="right  xl:w-[45%] w-full xl:h-full h-[45%] rounded-2xl flex justify-center overflow-hidden items-start flex-col bg-violet-600 relative">
          <img className='absolute z-0 w-full h-full object-cover' src="/Visual.png" alt="Promo Visual" />
          <button className='relative z-10 ml-5 flex justify-center items-center px-4 py-1.5 bg-white text-black hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl text-sm'>Contact</button>
          <div className='relative z-10 mt-2 ml-5 text-white text-sm pr-4'>Learn more about our real estate, mortgage, and corporate account services</div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardHome