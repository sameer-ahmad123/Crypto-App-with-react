import React from 'react'

const Transcation = () => {

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Processing: "bg-amber-100 text-amber-700", 
  Pending: "bg-gray-200 text-gray-600",
  Cancelled: "bg-red-100 text-red-700",
};
 const array = [
  {
    id: "HD82NA2H",
    date: "2022-06-09",
    time: "07:06 PM",
    type: "INR Deposit",
    subType: "E-Transfer",
    amountPrimary: "+ ₹81,123.10",
    amountSecondary: "",
    status: "Pending"
  },
  {
    id: "HD82NA2H",
    date: "2022-06-07",
    time: "02:48 PM",
    type: "INR Withdraw",
    subType: "Wire Transfer",
    amountPrimary: "- ₹81,123.10",
    amountSecondary: "",
    status: "Processing"
  },
  {
    id: "HD82NA2H",
    date: "2022-06-04",
    time: "09:21 AM",
    type: "Buy",
    subType: "",
    amountPrimary: "+ 12.48513391 BTC",
    amountSecondary: "- $81,123.10",
    status: "Cancelled"
  },
  {
    id: "HD82NA2H",
    date: "2022-06-03",
    time: "01:32 PM",
    type: "Sell",
    subType: "",
    amountPrimary: "- 0.36401628 BTC",
    amountSecondary: "+ $19,378.84",
    status: "Completed"
  },
  {
    id: "HD82NA2H",
    date: "2022-06-03",
    time: "09:02 AM",
    type: "BTC Deposit",
    subType: "",
    amountPrimary: "+ 4.13946104 BTC",
    amountSecondary: "+ $37,929.31",
    status: "Completed"
  },
  {
    id: "HD82NA2H",
    date: "2022-06-01",
    time: "01:56 PM",
    type: "BTC Withdraw",
    subType: "",
    amountPrimary: "- 10.00000000 BTC",
    amountSecondary: "- $62,017.58",
    status: "Completed"
  }
];
  return (
    <div className='lg:h-[70vh] lg:w-[70vw] w-screen h-auto mt-6 m-auto mb-28 '>
      <div className="btn w-full flex h-10 justify-between">
        <div></div>
        <button className='flex justify-center items-center px-3.5 py-1.5 bg-violet-800 text-white hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl'><span class="material-symbols-outlined">
          vertical_align_bottom
        </span><p className='text-sm'>Export CSV</p></button>
      </div>
      <main className='w-full h-[90%]  p-3.5 bg-white mt-1.5 rounded-2xl'>
        <div className="upper flex justify-between flex-col lg:flex-row border-b border-b-gray-200 pb-2.5">
          <ul className="flex justify-center items-center gap-10">
            <li className="flex justify-center items-center gap-2 "><p className="text-sm text-gray-600">All</p> <p className="text-xs text-gray-600 p-0.5 bg-black/5 rounded-2xl">234</p></li>
            <li className="flex justify-center items-center gap-2 "><p className="text-sm text-gray-600">Deposit</p> <p className="text-xs text-gray-600 p-0.5 bg-black/5 rounded-2xl">234</p></li>
            <li className="flex justify-center items-center gap-2 "><p className="text-sm text-gray-600">Withdraw</p> <p className="text-xs text-gray-600 p-0.5 bg-black/5 rounded-2xl">234</p></li>
            <li className="flex justify-center items-center gap-2 "><p className="text-sm text-gray-600">Trade</p> <p className="text-xs text-gray-600 p-0.5 bg-black/5 rounded-2xl">234</p></li>

          </ul>
          <div className="right">
            <div className="flex items-center border border-gray-600 rounded-2xl px-3 py-1.5 bg-white">
              <span className="material-symbols-outlined text-gray-500 text-[20px] mr-2">
                search
              </span>
              <input
                type="text"
                placeholder="Search by id or destination"
                className="bg-transparent outline-none w-full text-sm text-black"
              />
            </div>

          </div>
        </div>
       <ul className='grid grid-cols-5 items-center w-full h-12 border-b border-b-gray-200'>
        <li className='text-gray-600 text-sm'>ID</li>
        <li className='text-gray-600 text-sm'>Date&Time</li>
        <li className='text-gray-600 text-sm'>Type</li>
        <li className='text-gray-600 text-sm'>Amount</li>
        <li className='text-gray-600 text-sm'>Status</li>
       </ul>
       <div className="bottom ">
{array.map((data, index) => ( 
   <ul key={index} className='grid grid-cols-5 items-center   w-full h-12 border-b border-b-gray-200 '>
      <li className='!font-bold text-sm'>{data.id}</li>
      <li className='!font-bold text-sm'>{data.date}
        <p className='text-xs text-gray-600 font-normal'>{data.time}</p>
      </li>
      <li className='!font-bold text-sm'>{data.type}
        <p className='text-xs text-gray-600 font-normal'>{data.subType}</p>
      </li>
      <li className='!font-bold text-sm'>{data.amountPrimary}
        <p className='text-xs text-gray-600 font-normal'>{data.amountSecondary}</p>
      </li>
      <li>
        <span className={`text-sm px-3 py-1 rounded-2xl w-fit font-bold ${statusColors[data.status]}`}>
          {data.status}
        </span>
      </li>
      
   </ul>
))}

       </div>
      </main>
    </div>
  )
}

export default Transcation
