import * as React from 'react';
import Link from 'next/link'


export default function ButtonAppBar() {
  return (
  <div className="navbar bg-base-100 shadow-sm gap-4">
 <Link href="/home" className="btn text-xl"> Home </Link>
 <Link href ="/kian-main" className="btn text-xl">Kians page</Link>
</div>
  );
}