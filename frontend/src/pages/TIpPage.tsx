import { Logo } from "../components/Logo";
import { MainCard } from "../components/MainCard";

export const TipPage = () => {
  return (
    <div className="bg-bg-cyan w-screen">
      <Logo />
      <MainCard />
      <div className="text-center mt-8 text-gray-500">
        made by{" "}
        <a href="https://github.com/shivaraj110" className="underline">
          shivaraj
        </a>
      </div>
    </div>
  );
};
