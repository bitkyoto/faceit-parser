import { CompCard } from "@/components/CompCard/CompCard";
import { Navbar } from "@/components/Navbar/Navbar";

export const CompPage = () => {
  return (
    <>
      <div className="mt-4 flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-y-4">
          <Navbar />
          <CompCard />
        </div>
      </div>
    </>
  );
};
