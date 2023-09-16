import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href={"/product/t-shirt"}>Go to product page</Link>
    </div>
  );
}
