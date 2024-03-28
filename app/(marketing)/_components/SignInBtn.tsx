import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

type SignInBtnProps = {
  mode?: "modal" | "redirect";
  afterSignInUrl?: string;
  afterSignUpUrl?: string;
  variant?: "primary" | "primaryOutline" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

export default function SignInBtn({
  mode = "modal",
  variant = "primary",
  afterSignInUrl = "/learn",
  afterSignUpUrl = "/learn",
  className,
  children,
}: SignInBtnProps) {
  return (
    <SignInButton
      mode={mode}
      afterSignInUrl={afterSignInUrl}
      afterSignUpUrl={afterSignUpUrl}
    >
      <Button size="lg" variant={variant} className={className}>
        {children}
      </Button>
    </SignInButton>
  );
}
