import { NavbarLinks } from "@/utils/utils";
import Logo from "../common/Logo";
import NavbarLink from "./NavbarLink";
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
import ScrollProgress from "./ScrollProgress";
import DownloadButton from "../Dowloand/Download";

const Navbar = () => {
  return (
    <header className=" sticky top-10 z-10 w-full flex justify-between items-center ">
      <ScrollProgress />

      <Logo styles="" src="/logo.png" alt="logo" width={250} height={68} />
      <nav className="flex gap-12 lg:gap-6 xl:gap-11 ">
        {NavbarLinks.map((link) => (
          <NavbarLink key={link.name} {...link} />
        ))}
      </nav>
      <DownloadButton />
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
