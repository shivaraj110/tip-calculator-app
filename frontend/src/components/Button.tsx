export function Button({label}:any){
  return (
    <div>
      <button className="bg-btn-cyan rounded-md hover:bg-amt-cyan  py-2 text-center w-full">
        {label}
      </button>
    </div>
  );
};
