import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3 pt-8 pl-4 pb-7">
      <Image src="/mascot.svg" alt="logo" width={40} height={40} />
      <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
        Lingo
      </h1>
    </div>
  );
};
