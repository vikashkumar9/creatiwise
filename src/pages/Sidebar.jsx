const Sidebar = ({ setMenuOpen }) => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-black z-50">
        <div className="flex flex-col items-center py-8 space-y-6 text-white">
          <button
            className="text-2xl self-end mr-6"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <ul className="flex flex-col items-center space-y-4">
            <li className="syne-text py-2 px-6 rounded-3xl cursor-pointer bg-[#FFFFFF] text-[#010208]">
              Home
            </li>
            <li className="syne-text py-2 px-6 rounded-3xl text-white cursor-pointer">
              About
            </li>
            <li className="syne-text py-2 px-6 rounded-3xl text-white cursor-pointer">
              Projects
            </li>
            <li className="syne-text py-2 px-6 rounded-3xl text-white cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="syne-text px-6 py-2 rounded-3xl border text-white border-[#FFFFFF] cursor-pointer">
            HIRE ME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
