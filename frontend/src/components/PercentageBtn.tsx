import { useSetRecoilState, useRecoilValue } from "recoil";
import { billAtom, poepleAtom, tipAtom } from "../atoms/billAtoms";
export const PercentageBtn = ({ label, p }: any) => {
  const bill = useRecoilValue(billAtom);
  const People = useRecoilValue(poepleAtom);
  const setTip = useSetRecoilState(tipAtom);
  return (
    <button
      className="bg-btn-cyan rounded-md hover:bg-amt-cyan py-2 text-center w-full"
      onClick={() => {
        setTip(bill * p * People);
      }}>
      {label}
    </button>
  );
};
