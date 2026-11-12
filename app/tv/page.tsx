import TvBoard from "../components/TvBoard";
import { FLOWERS, ITEMS } from "../lib/catalog";
export const metadata = { title: "Flower Menu Board", robots: { index: false, follow: false } };
export default function TvPage() { return <TvBoard products={[...FLOWERS, ...ITEMS]} mode="flower" />; }
