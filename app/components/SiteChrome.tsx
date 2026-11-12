import Image from "next/image";
import Link from "next/link";
import { NAV, STORE } from "../lib/store";

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label={`${STORE.name} home`}>
        <Image src="/brand/amesbury-mark.svg" alt="" width={54} height={54} />
        <span><b>AMESBURY</b><small>CANNABIS DISPENSARY</small></span>
      </Link>
      <nav aria-label="Primary navigation">{NAV.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <a className="mapButton" href={STORE.maps}>Directions</a>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div><Image src="/brand/amesbury-wordmark.svg" alt="Amesbury Cannabis Dispensary" width={360} height={92} style={{ width: "100%", height: "auto" }} /><p>{STORE.address}</p><a href={STORE.maps}>Open Google Maps</a></div>
      <div><h2>Explore</h2>{NAV.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div><h2>Visit</h2><p><a href={`tel:${STORE.phoneTel}`}>{STORE.phone}</a></p><p>{STORE.hoursStatus}.</p><Link href="/policies">Website policies</Link></div>
      <small>For adults 19+. Bring valid government-issued photo identification.</small>
    </footer>
  );
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>;
}
