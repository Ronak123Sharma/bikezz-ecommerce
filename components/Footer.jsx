import Link from "next/link";
import { Input } from "./ui/input";
import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fadfs dfdsfsd
            </p>
          </div>
          {/* form */}
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your Email Address" />
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">
              Join
            </button>
          </form>
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
            <Link href="">
              <RiYoutubeFill />
            </Link>
            <Link href="">
              <RiInstagramFill />
            </Link>
            <Link href="">
              <RiFacebookBoxFill />
            </Link>
            <Link href="">
              <RiTwitterXFill />
            </Link>
            <Link href="">
              <RiPinterestFill />
            </Link>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 Bikezz. All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
