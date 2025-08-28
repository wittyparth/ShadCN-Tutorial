import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Album, LogOut, User } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 sticky z-10 top-0 bg-background">
      <SidebarTrigger/>
      <div className="flex justify-between items-center gap-4">
          <Link to="/users/parthu">
        <p>
          Dashboard</p>
          </Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/users/parthu">
              <User/> Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/users">
              <Album />
              Transaction
              </Link>
              </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
