import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ModeToggle } from "../mode-toggle";

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between gap-2 h-14">
        <div>
          {/* Logo Text */}
          <h1 className="font-bold text-xl">
            YT<span className="text-red-500">Shorts</span>
          </h1>
        </div>
        {/* Search Input Field */}
        <div className="lg:w-1/2">
          <Input type="text" placeholder="Search..." />
        </div>
        {/* Account Management */}
        <div className="flex items-center space-x-2">
          <Button>
            <Plus />
            Create
          </Button>
          {/* Theme Toggle */}
          <ModeToggle/>
        </div>
      </div>
    </>
  );
}

export default NavBar;
