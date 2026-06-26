import Link from "next/link"
export default function Header(){

  return (
    <header className="p-4 bg-black text-white">

      <nav className="flex justify-between">

        <h1 className="text-xl font-bold">
          <Link href="/home">
            Tomar Soft
          </Link>
        </h1>


        <ul className="flex gap-5">

          <li>
            <Link href="/home">
              Home
            </Link>
          </li>


          <li>
            <Link href="/about">
              About
            </Link>
          </li>


          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>


        </ul>

      </nav>

    </header>
  )
}