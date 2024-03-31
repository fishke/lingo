import { cn } from "@/lib/utils";
import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { ClerkSpinner } from "./ClerkSpinner";

type Props = {
  className?: string;
};

const sidebarItems = [
  { label: "Learn", href: "/learn", iconSrc: "/learn.svg" },
  { label: "Leaderboard", href: "/leaderboard", iconSrc: "/leaderboard.svg" },
  { label: "Quests", href: "/quests", iconSrc: "/quests.svg" },
  { label: "Shop", href: "/shop", iconSrc: "/shop.svg" },
];

export function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "bg-white h-full lg:w-[256px] lg:fixed flex lef-0 top-0 px-4 border-2 flex-col",
        className
      )}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-col flex-1 w-full gap-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            iconSrc={item.iconSrc}
            href={item.href}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkSpinner />
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
}
