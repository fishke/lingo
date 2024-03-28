import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

type SignUpBtnProps = {
  mode?: "modal" | "redirect";
  afterSignInUrl?: string;
  afterSignUpUrl?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

export default function SignUpBtn({
  mode = "modal",
  variant = "primary",
  afterSignInUrl = "/learn",
  afterSignUpUrl = "/learn",
  className,
  children,
}: SignUpBtnProps) {
  return (
    <SignUpButton
      mode={mode}
      afterSignInUrl={afterSignInUrl}
      afterSignUpUrl={afterSignUpUrl}
    >
      <Button size="lg" variant={variant} className={className}>
        {children}
      </Button>
    </SignUpButton>
  );
}
