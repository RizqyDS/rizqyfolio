import Link from "next/link";
import { FaGithub, FaLinkedin, FaDribbble, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RizqyDS" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/rizqydwisyahputra/" },
  { icon: <FaDribbble />, path: "https://dribbble.com/rizqysyahputra" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
    })}
    </div>;
};

export default Social;
