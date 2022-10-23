const Body = () => {
  return (
    <>
      <div className="flex" > 
        <div className="w-[60%] mt-[8rem] ml-[5rem]">
          <h1 className="text-[70px] font-bold tracking-tight">123,293.46 RAD</h1>
          <p className="text-[48px]">Total Stacked</p>         
        </div>

        <div className="ml-auto mr-[5rem] mt-[3rem] flex-col text-center w-[25%] ">
          <div className="flex-col text-start mt-5 border-gray-900 shadow-xl p-2">
            <div className="flex">
              <label> Stake Amount</label>
              <span className="ml-auto text-[9px] text-[#EEEEEE]">Available:  3,863 RAD</span>
            </div>
            <input type="number" placeholder="234"  className="text-white border border-[#01FAC3] shadow-lg focus:border-[#01FAC3] ring-slate-500 focus:ring-[#01FAC3] sm:text-xl bg-inherit w-[100%] rounded-md mt-2 pl-2 p-1 pb-2 mb-3" />
            <label className="py-2 pb-32"> Pool type</label>
            <select className=" bg-inherit w-[100%] border border-[#01FAC3] shadow-lg focus:border-[#01FAC3] ring-slate-500 focus:ring-[#01FAC3] sm:text-xl rounded-md py-1 pl-1 pb-2 mt-2 text-sm ">
              <option className="text-black font-bold p-4">Electromagnetic</option>
              <option className="text-black font-bold p-4">Neutron</option>
              <option className="text-black font-bold p-4">Beta</option>
              <option className="text-black font-bold p-4">Alpha</option>
            </select>
            <input type="range"  min="0" max="100" required 
              className="w-[95%] mt-8  ml-2 rounded-lg bg-[#01FAC3] cursor-pointer shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "/>          
            <span className="flex mt-4 justify-between text-white">
              <h4>0%</h4>
              <h4>100%</h4>
            </span>
            <div className="border-t border-gray-900 py-4" >
              <div className="flex py-1 ">
                <span>APY: (0.90%)   </span>
                <span className="ml-auto"> 678 <span>RAD</span></span>
              </div>
              <div  className="flex py-2 ">
                <span>Total Earned   </span>
                <span className="ml-auto"> 678 <span>RAD</span></span>
              </div>
              <button className=" border w-[100%] py-1 pb-2 rounded-md mt-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 justify-center border border-transparent text-xl font-medium shadow-sm focus:outline-none "> 
              Stake </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="ml-[3rem] mt-[1rem]">
        <p className="text-[37px] mb-2">Company</p>
        <div className="">
          <span className="border-r text-[18px] pr-3 "> <a href="/" > Facebook</a> </span>
          <span className="border-r text-[18px] px-3 "> <a href="/" > Twitter</a> </span>
          <span className="border-r text-[18px] px-3 "> <a href="/" > Discord</a> </span>
          <span className="text-[20px] px-5 "> <a href="/" > Contact </a> </span>
        </div>
        <div className="flex mt-4 pb-5 text-[13px]">
          <span> Privacy Policy</span>
          <span className="ml-10">Terms and Conditions</span>
          <span className="ml-auto mr-5"> Copyright © 2022</span>
        </div>
      </footer>
    </>
  )
}

export default Body;