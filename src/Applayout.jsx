import { Outlet } from "react-router-dom";

import PageCheckerUpdate from "./Components/UI/PageCheckerUpdate";
import { useEffect, useRef } from "react";

function Applayout() {
  const ref = useRef();

  useEffect(() => ref.current.scrollTo(0, 0), []);

  return (
    <div className="relative overflow-x-hidden " ref={ref}>
      <div className="flex w-full md:h-[87.8vh] h-screen px-[2em] lg:px-[2em]   md:items-center items-start font-sans bg-dark-background-body">
        <PageCheckerUpdate />
        <main className="lg:w-[70%] lg:px-4 md:w-[65%] h-full md:h-full w-full flex flex-col md:justify-center py-12 md:py-4 font-sans">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Applayout;
