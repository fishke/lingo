import { MobileHeader } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0 bg-red-500">
        <div className="h-full ">{children}</div>
      </main>
    </>
  );
}
