import { Loader } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
    </div>
  );
};
