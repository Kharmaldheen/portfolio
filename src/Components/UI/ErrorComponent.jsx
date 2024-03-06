import { useLocation, useNavigate, useRouteError } from "react-router-dom";

function ErrorComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <div className="flex flex-col gap-4 h-screen items-center justify-center text-xl md:text-2xl text-center">
        <img
          src="/warning.png"
          alt=""
          className="animate-bounce h-52 md:h-72"
        />
        <h1 className="text-white text-lg md:text-xl text-center">
          Ooops!! Something went wrong 😢
        </h1>
        <p className="text-white text-center">
          {location.pathname} is not a specified route
        </p>

        <button
          className="border-[1px] bg-white border-white hover:bg-black text-black hover:text-white transition-colors duration-300 py-2 px-4  mt-6"
          onClick={() => navigate(-1)}
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default ErrorComponent;
