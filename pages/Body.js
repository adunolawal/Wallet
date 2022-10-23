const Body = () => {
  return (
    <>
      <div className="flex" > 
        <div className="w-[40%] mt-[8rem] ml-[5rem]">
          <h1 className="text-[80px]">Lorem Stake</h1>
          <h2 className="text-[62px] pt-5 pb-5">Ipsium dota</h2>
          <p className="mt-5 mb-5 w-[110%] text-[13px]">
           Pellentesque in ipsum id orci porta dapibus. Sed
           porttitor lectus nibh.Vestibulum ac diam sitamet quam vehicula elementum sed sit amet dui.
           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          </p>
          <button className="border rounded-3xl pl-9 pr-9 pt-2 pb-2 text-sm">Discover More</button>
        </div>

        <div className="ml-auto mr-[5rem] mt-[3rem] flex-col text-center w-[25%] ">
          <p>Total Stacked</p>
          <h3 className="text-[35px] font-bold">123,293.46 RAD</h3>
          <div className="flex-col text-start mt-5 border-gray-900 shadow-xl p-2">
            <div className="flex">
              <label> Stake Amount</label>
              <span className="ml-auto text-[9px] text-[#EEEEEE]">Available:  3,863 RAD</span>
            </div>
            <input type="number" placeholder="234"  className=" border-indigo-500 bg-inherit w-[100%] rounded-md mt-2 pl-2 p-1 pb-2 mb-3" />
            <label className="py-2 pb-32"> Pool type</label>
            <select className=" bg-inherit w-[100%] border rounded-md py-1 pl-1 pb-2 mt-2 text-sm ">
              <option className="text-[black] font-bold ">Electromagnetic</option>
              <option className="text-[black] font-bold">Neutron</option>
              <option className="text-[black] font-bold">Beta</option>
              <option className="text-[black] font-bold">Alpha</option>
            </select>
            <input type="range" className="w-[95%] mt-5 mb-10 ml-2"/>
            <hr></hr>
            <div className="flex py-2 ">
              <span>APY: (0.90%)   </span>
              <span className="ml-auto"> 678 <span>RAD</span></span>
            </div>
            <div  className="flex py-2 ">
              <span>Total Earned   </span>
              <span className="ml-auto"> 678 <span>RAD</span></span>
            </div>
            <button className=" border w-[100%] py-1 pb-2 rounded-md mt-2 bg-gradient-to-r from-[#FB03F5-10.21%] to-[#7000FF-80.75%] ">Stacked</button>
          </div>
        </div>
      </div>

      <footer className="ml-[3rem] mt-[5rem]">
        <p className="text-[38px] mb-2">Company</p>
        <div className="">
          <span className="border-r text-[20px] pr-5 "> <a href="/" > Facebook</a> </span>
          <span className="border-r text-[20px] px-5 "> <a href="/" > Twitter</a> </span>
          <span className="border-r text-[20px] px-5 "> <a href="/" > Discord</a> </span>
          <span className="text-[20px] px-5 "> <a href="/" > Contact </a> </span>
        </div>
        <div className="flex mt-4 text-[13px]">
          <span> Privacy Policy</span>
          <span className="ml-10">Terms and Conditions</span>
          <span className="ml-auto mr-5"> Copyright © 2022</span>
        </div>
      </footer>
    </>
  )
}

export default Body;