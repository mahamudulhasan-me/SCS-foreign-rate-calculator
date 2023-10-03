import scsLogo from "@/assets/scsLogo.jpg";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" px-[10%] flex justify-between items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2">
      <Link href="/">
        <Image width={50} height={20} src={scsLogo} alt="SCS Logo" />
      </Link>
      <Button variant="contained" className="my-btn">
        Calculate
      </Button>
    </div>
  );
};

export default Header;
