import Header from "@/app/components/Header";
import Body from "@/app/components/Body";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col items-center gap-3 bg-white font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Body />
    </div>
  );
}
