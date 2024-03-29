import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <div className="sticky top-0 flex items-center justify-between pb-3 mb-5 bg-white border-b-2 lg:pt-7 lg:-mt-7 text-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-5 h-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </div>
  );
}
