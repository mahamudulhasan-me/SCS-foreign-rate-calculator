import scsLogo from "@/assets/scsLogo.jpg";
import Image from "next/image";
const Header = () => {
  return (
    <div className="px-[10%] flex justify-between items-center">
      <Image width={70} src={scsLogo} alt="SCS Logo" />
    </div>
  );
};

export default Header;
