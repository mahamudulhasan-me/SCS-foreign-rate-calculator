import scsLogo from "@/assets/scsLogo.jpg";

import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-white px-[10%] flex justify-between items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2">
      <Image width={50} height={20} src={scsLogo} alt="SCS Logo" />
      <button className="my-btn">
        Calculate
      </button>
    </div>
  );
};

export default Header;
