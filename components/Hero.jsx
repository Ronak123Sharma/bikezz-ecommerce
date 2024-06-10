import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-6">
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p className="mb-10 text-lg max-w-[580px] mx-auto text-center xl:text-left xl:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              veritatis distinctio cumque saepe necessitatibus rem
              exercitationem. Quod,
            </p>
            {/* button group */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href="/our-bikes" className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
              <Link href="/our-bikes" className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Bikes</button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex">
            <Image
              src="/hero/bike.png"
              width={765}
              height={480}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
