import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello Kev's World :).{" "}
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
  // get Vim
}
