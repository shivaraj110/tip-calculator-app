import { Button } from "./Button";

export const MainCard = () => {
  return (
    <div className="flex justify-center mt-20 space-mono-regular">
      <div className="bg-white rounded-3xl w-2/3 h-max grid grid-cols-2 p-6">
        <div className="bg-amt-cyan w-3/3 h-1/4 col-span-1 p-4 ml-6"></div>
        <div className="bg-dark-cyan rounded-xl w-3/3 h-max col-span-1 p-4 ml-6 grid grid-cols-2 ">
          <div className="col-span-1">
            <div className="text-very-lightCyan pt-8 pl-5">Tip Amount</div>
            <div className="text-gray-500 pl-5">/ person</div>
          </div>
          <div className="col-span-1 flex justify-end  ">
            <div className="text-4xl text-amt-cyan pr-5 pt-8">${0}.00</div>
          </div>
          <div className="col-span-1">
            <div className="text-very-lightCyan pt-10 pl-5">Total</div>
            <div className="text-gray-500 pl-5">/ person</div>
          </div>
          <div className="col-span-1 flex justify-end  ">
            <div className="text-4xl text-amt-cyan pr-5 pt-10">${0}.00</div>
          </div>
          <div className="col-span-2 mt-14 px-5">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
