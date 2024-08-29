import { TipPage } from "./pages/TIpPage";
function App() {
  return (
    <div className="w-screen h-screen bg-bg-cyan">
      <TipPage />
      <div className="text-center mt-8 text-gray-500">
        made by{" "}
        <a href="https://github.com/shivaraj110" className="underline">
          shivaraj
        </a>
      </div>
    </div>
  );
}
export default App;
