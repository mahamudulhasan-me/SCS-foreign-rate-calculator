import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className=" px-[10%] flex justify-between items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2">
      <h1 className="text-2xl font-bold">SCS Foreign Rate Calculator</h1>
      <Button variant="contained">Get started</Button>
    </div>
  );
};

export default Header;
