import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: { imgSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export default function UserProgress({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/points.svg" alt="Points" width={28} height={28} />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.svg" alt="Hearts" width={32} height={32} />
          {hasActiveSubscription ? (
            <InfinityIcon className="w-4 h-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
}
