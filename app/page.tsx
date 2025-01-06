import Header from "@/app/components/Header";
import Body from "@/app/components/Body";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)] gap-3 bg-white">
      <Header />
      <Body />
    </div>
  );
}
