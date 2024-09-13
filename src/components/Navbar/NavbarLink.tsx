import Link from "next/link";

const NavbarLink = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      href={path}
      className=" text-xl text-black hidden md:text-base xl:text-xl  lg:block"
    >
      {name}
    </Link>
  );
};

export default NavbarLink;
