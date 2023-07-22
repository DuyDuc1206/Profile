import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  const name = "Duc Nguyen";

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Vermin Vibes, sans-serif" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Hi, I'm{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
        <m.span
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="cursor-pointer text-4xl sm:text-5xl underline underline-offset-4 decoration-primary-400"
          id="repulse-span"
          style={{ fontFamily: "Morganite Extra Bold, sans-serif" }}
        >
          <a href="#">
            <span className="text-primary-400">Java</span> Developer
            <br />
          </a>
        </m.span>
        <m.span
         className="cursor-pointer text-4xl sm:text-5xl text-primary-400 mt-10">
        <a href="https://github.com/DuyDuc1206" target="_blank">
            <i class="fa-brands fa-square-github "></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100036129023723"
            target="_blank"
          >
            <i class="fa-brands fa-square-facebook ml-10"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i class="fa-brands fa-linkedin ml-10"></i>
          </a>
        </m.span>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
