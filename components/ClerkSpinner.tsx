import { cn } from "@/lib/utils";
import { ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export function ClerkSpinner({ className }: Props) {
  return (
    <ClerkLoading>
      <Loader
        size={20}
        className={cn("text-muted-foreground animate-spin", className)}
      />
    </ClerkLoading>
  );
}
