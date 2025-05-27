import Link from 'next/link';

export default function MenuBar() {
  return (
    <nav className="bg-gray-100 shadow-md p-4">
      <ul className="container mx-auto flex gap-6">
        <li>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-800 font-medium nav-link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-800 font-medium nav-link">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-800 font-medium nav-link">Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
