import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { logInOut } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <div className="bg-gray-700 text-white h-14 text-xl">
      <div className="container mx-auto h-full flex justify-between items-center">
        <div>My Book</div>
        <button
          onClick={() => dispatch(logInOut())}
          className="border-2 px-3 py-1 rounded-xl hover:bg-gray-600 cursor-pointer"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
