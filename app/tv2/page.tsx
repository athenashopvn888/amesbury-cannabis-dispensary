import TvBoard from "../components/TvBoard";
import { ITEMS } from "../lib/catalog";
export const metadata = { title: "Items Menu Board", robots: { index: false, follow: false } };
export default function Tv2Page() { return <TvBoard products={ITEMS} mode="items" />; }
