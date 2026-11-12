import type { Metadata } from "next";
import Link from "next/link";
import MenuBrowser from "../components/MenuBrowser";
import SiteChrome from "../components/SiteChrome";
import { PRODUCTS } from "../lib/catalog";
import AmesburyWebChat from "./AmesburyWebChat";

export const metadata: Metadata = { title: "Cannabis Delivery in North York", description: "Browse the Amesbury Cannabis Dispensary delivery menu and start a secure order chat for North York delivery." };
export default function DeliveryPage() { return <SiteChrome><main><section className="pageHero deliveryHero"><p className="kicker">AMESBURY DELIVERY</p><h1>Browse, then start your order.</h1><p>The delivery menu uses the same product list as the store menu. Choose what you want, then use the secure order chat below. A dispatcher confirms availability, delivery eligibility and the order before fulfilment.</p><div className="actions"><a href="#order-chat">Start order chat</a><Link className="outline" href="/menu/easy">Easy menu view</Link></div></section><MenuBrowser products={PRODUCTS} title="Delivery menu" /><section className="orderSection" id="order-chat"><div className="sectionHead"><p className="kicker">SECURE ORDER CHAT</p><h2>Place a delivery order</h2><p>Enter your own mobile number so the dispatcher can verify the order. Amesbury does not publish a separate delivery phone number.</p></div><AmesburyWebChat /></section></main></SiteChrome>; }
