const Header = () => {
  return (
    <div className="bg-gray-700 text-white h-14 text-xl">
      <div className="container mx-auto h-full flex justify-between items-center">
        <div>My Book</div>
        <button className="border-2 px-3 py-1 rounded-xl hover:bg-gray-600 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
