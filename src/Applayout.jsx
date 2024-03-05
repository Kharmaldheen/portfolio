import { Outlet } from "react-router-dom";

import PageCheckerUpdate from "./Components/UI/PageCheckerUpdate";

function Applayout() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="flex w-full md:h-[87.8vh] h-screen px-[2em] lg:px-[2em]  bg-dark-background-body md:items-center items-start font-sans">
        <PageCheckerUpdate />
        <main className="lg:w-[70%] lg:px-4 md:w-[65%] h-full md:h-full w-full flex flex-col md:justify-center py-4 overflow-y-visible ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Applayout;
