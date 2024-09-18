import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2</p>
      <li>
        <Link href="/week-2">Week 2</Link>
      </li>
      <p>Demos for Web Dev 2</p>
      <li>
        <Link href="/week-3">Week 3</Link>
      </li>
      <li>
        <Link href="/week-4">Week 4</Link>
      </li>
      <li>
        <Link href="/week-5">Week 5</Link>
      </li>
      <li>
        <Link href="/week-6">Week 6</Link>
      </li>
    </div>
  );
}