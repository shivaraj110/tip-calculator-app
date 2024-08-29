import { Button } from "./Button";
export const MainCard = () => {
  return (
    <div className="flex justify-center mt-12 space-mono-regular flex-wrap ">
      <div className="bg-white rounded-3xl sm:max-w-7/12 h-max flex justify-center p-6 flex-row flex-grow-0 sm:flex-nowrap flex-wrap ">
        <div className="rounded-xl w-80 h-max col-span-1 mt-2 flex-row md:flex-grow ">
          <div className="col-span-1 flex">
            <div className="flex-row">
              <div className="text-gray-500 pt-1 flex-col mb-2">Bill</div>

              <div className="text-dark-cyan w-72 ">
                <input
                  type="text"
                  placeholder='§'
                  className="bg-inp hover:border-2 text-right placeholder:text-left placeholder:relative placeholder:top-1  hover:border-amt-cyan w-72 rounded-md p-1 cursor-pointer text-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex mt-6">
            <div className="col-span-1 flex">
              <div className="flex-row">
                <div className="text-gray-500 pt-1 flex-col">
                  select tip %
                </div>
                <div className="text-gray-500 w-72 "></div>
              </div>
            </div>
          </div>
<div className="grid grid-cols-3 flex-row">
          <div className=" pr-3 py-4 max-w-32 text-white col-span-1">
            <Button label={'5%'} />
          </div>
          <div className=" pr-3 py-4 max-w-32 text-white col-span-1">
            <Button label={'10%'} />
          </div>          <div className="  pr-3 py-4 max-w-32 text-white col-span-1">
            <Button label={'15%'} />
          </div>          <div className="  pr-3 max-w-32 text-white col-span-1">
            <Button label={'25%'} />
          </div>          <div className=" pr-3 max-w-32 text-white col-span-1">
            <Button label={'50%'} />
          </div>          <div className=" pr-3 max-w-32 text-dark-cyan col-span-1">
          <input
                  type="text"
                  placeholder="Custom"
                  className="bg-inp hover:border-2 text-center hover:border-amt-cyan rounded-md p-1 w-full cursor-pointer text-xl text-dark-cyan"
                />
          </div>
        </div>
        <div className="text-gray-500 mt-6 flex-col ">
            Number of People
                </div>
        <div className="text-dark-cyan w-72 ml-3 mt-2 mb-3">
                <input
                  type="text"
                  placeholder="ø"
                  className="bg-inp hover:border-2 text-right placeholder:text-left placeholder:relative placeholder:top-1  hover:border-amt-cyan w-72 rounded-md p-1 cursor-pointer text-2xl placeholder:fill-gray-500"
                />
              </div>
        </div>
        <div className="bg-dark-cyan rounded-xl w-80 h-max  sm:pt-2 mt-4 mr-8 md:flex-grow p-4 sm:mr-3 pt-3 ml-6 flex-row ">
          <div className="col-span-1 flex">
            <div className="flex-row">
              <div className="text-very-lightCyan pt-10 pl-3 ">Tip_Amount</div>

              <div className="text-gray-500 ">/person</div>
            </div>

            <div className="col-span-1 flex-row ml-14 mt-10 ">
              <div className="text-4xl text-amt-cyan pr-5 flex-row ">
                ${0}.00
              </div>
            </div>
          </div>

          <div className="flex mt-6">
            <div className="flex-row">
              <div className="text-very-lightCyan pt-10  pl-5">Total</div>

              <div className="text-gray-500 ">/person</div>
            </div>

            <div className=" flex-row ml-14 mt-10 ">
              <div className="text-4xl text-amt-cyan mr-5 md:mr-5 ml-10 flex-row ">
                ${0}.00
              </div>
            </div>
          </div>

          <div className=" mt-14 px-5 py-4 text-dark-cyan">
            <Button label={'RESET'} />
          </div>
        </div>
      </div>
    </div>
  );
};
