import { RecoilRoot } from "recoil";
import { TipPage } from "./pages/TIpPage";
function App() {
  return (
    <div className="w-screen h-screen bg-bg-cyan">
      <RecoilRoot>
      <TipPage />
      </RecoilRoot>
    </div>
  );
}
export default App;
