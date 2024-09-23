import Link from "next/link";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-background text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">EventApaYa</h3>
          <p>
            EventApaYa is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#">
              <RiTwitterXFill className="w-[24px] h-[24px]" />
            </Link>
            <Link href="#">
              <RiFacebookCircleFill className="w-[36px] h-[36px]" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Plan Events</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Create and Set Up</Link>
            </li>
            <li>
              <Link href="#">Sell Tickets</Link>
            </li>
            <li>
              <Link href="#">Online RSVP</Link>
            </li>
            <li>
              <Link href="#">Online Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">EventApaYa</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
