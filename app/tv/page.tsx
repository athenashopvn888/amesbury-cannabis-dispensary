import Image from "next/image";
export const metadata = { title: "Store Menu Board", robots: { index: false, follow: false } };
export default function TvPage() { return <main className="tv"><Image src="/brand/amesbury-wordmark.svg" alt="Amesbury Cannabis Dispensary" width={500} height={128} /><h1>Menu updating</h1><p>The approved Amesbury inventory source is not connected.</p></main>; }
