import Logo from "./Logo";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full h-[160px] md:h-[200px] flex flex-col justify-end items-center bg-black">
      <Logo mainColor={false} />
      <p className="my-[30px] text-[1.2rem] md:text-[2.4rem] text-white">
        © {date} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
