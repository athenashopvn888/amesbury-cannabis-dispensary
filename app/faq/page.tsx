import SiteChrome from "../components/SiteChrome";
import { STORE } from "../lib/store";

export const metadata = { title: "Store FAQ", description: "Amesbury Cannabis Dispensary address, menu, hours and age requirement answers." };
const items = [["What is the exact address?", STORE.address],["Are hours posted here?","Not yet. Website hours remain held until they are verified from the current business profile."],["Can I see current products?","Not yet. The site does not display sample or copied inventory while the Amesbury feed is pending."],["Is delivery available?","Delivery details have not yet been approved for publication."],["Who may enter?","Adults age 19 and older with valid government-issued photo identification."]];
export default function FaqPage() { return <SiteChrome><main><section className="pageHero"><p className="kicker">STORE FAQ</p><h1>Clear answers, no guesses.</h1></section><section className="faq standalone">{items.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section></main></SiteChrome>; }
