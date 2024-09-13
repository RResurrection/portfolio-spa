import { NavbarLinks } from "@/utils/utils";
import Logo from "../Dummies/Logo";
import NavbarLink from "./NavbarLink";
import Button from "../Dummies/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" flex justify-between items-center text-">
      <Logo styles="" src="/logo.png" alt="logo" width={250} height={68} />

      <nav className="flex gap-12 lg:gap-6 xl:gap-11 ">
        {NavbarLinks.map((link) => (
          <NavbarLink key={link.name} {...link} />
        ))}
      </nav>

      <Button
        styles=" lg:w-[150px] xl:w-[188px] hidden sm:block  bg-[#FD6F00] text-xl text-white rounded-md w-[188px] h-[52px]"
        title="Dowloand CV"
      />
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                {NavbarLinks.map((link) => (
                  <Link
                    className="flex flex-col my-2 text-black font-bold text-lg hover:text-[#FD6F00] transition-all duration-100 ease-in "
                    href={link.path}
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
