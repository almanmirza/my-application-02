import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

          <Link href="/Home">Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/info">Info</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/about-us">About us</Link>
          <br/>
          <br/>
          <br/>
          <br/>
          Alman Ahmad with his 2nd Next Js Project
    </div>
  );
}
