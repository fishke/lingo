import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SignUpBtn from "./_components/SignUpBtn";
import SignInBtn from "./_components/SignInBtn";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center text-balance">
          Learn, Practice and master new languages with Lingo
        </h1>
        <div className="flex flex-col items-center gap-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader size={20} className="text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpBtn className="w-full">Get Started</SignUpBtn>
              <SignInBtn className="w-full mt-2" variant="primaryOutline">
                I Already have an account
              </SignInBtn>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
