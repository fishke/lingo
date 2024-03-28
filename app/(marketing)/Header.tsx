import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

type Props = {};

export function Header({}: Props) {
  return (
    <header className="w-full h-20 px-4 border-b-2 border-slate-200">
      <div className="flex items-center justify-between h-full mx-auto lg:max-w-screen-lg">
        <div className="flex items-center pt-8 pl-4 pb-7 gap-3">
          <Image src="/mascot.svg" alt="logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-gray-600">
            Lingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader size={20} className="text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}
