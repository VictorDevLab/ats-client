import Link from "next/link";
import DashBoard from "./dashboard/page";

export default function Home() {
  return (
    <main>
      <h1 className="p-3 bg-amber-600">Hello world</h1>
      <Link href="/users">
        <button className="btn btn-primary">Primary</button>
      </Link>
      <DashBoard />

    </main>
  );
}
