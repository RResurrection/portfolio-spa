import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../common/CustomIcons";

export const SocialLinksData = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    svgIcon: <FacebookIcon />,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com",
    svgIcon: <TwitterIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    svgIcon: <InstagramIcon />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com",
    svgIcon: <LinkedinIcon />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-5 mb-2">
      {SocialLinksData.map(({ name, svgIcon, href }) => (
        <Link
          href={href}
          key={name}
          className="w-[33px] h-[33px] animate-bounce"
        >
          {svgIcon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
