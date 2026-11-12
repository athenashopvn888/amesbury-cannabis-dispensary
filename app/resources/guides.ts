export const GUIDES = [
  { slug: "how-to-read-a-cannabis-menu", title: "How to read a cannabis menu", description: "A practical guide to product types, package sizes, THC labels and menu availability.", sections: [
    ["Start with the product type", "Flower, pre-rolls, edibles, vapes and concentrates are different formats. Choose the format first, then compare the products listed inside that category."],
    ["Compare package sizes", "Flower may appear in several weights. The size and price shown together belong to that specific package, so compare like with like before choosing."],
    ["Read THC information carefully", "THC values describe product potency, not quality. Effects vary by person and product. Start low, go slow, and follow the label on the product you purchase."],
    ["Confirm before checkout", "A web menu is a useful shopping guide. Availability can change, so the store or delivery dispatcher confirms the final selection before purchase."]
  ]},
  { slug: "buying-cannabis-in-ontario", title: "Buying cannabis in Ontario", description: "What adults 19+ should know before visiting a cannabis retailer in Ontario.", sections: [
    ["Bring valid identification", "Ontario cannabis retail is for adults 19 and older. Bring valid government-issued photo identification when you visit."],
    ["Keep products sealed while travelling", "Leave cannabis in its original sealed package while travelling and store it away from the driver and passengers."],
    ["Do not drive impaired", "Cannabis can impair driving. Arrange a safe way home and never drive after consuming cannabis."],
    ["Ask clear product questions", "Staff can explain product formats, labels and package sizes. They cannot provide medical advice, so speak with a qualified health professional about medical concerns."]
  ]},
  { slug: "amesbury-store-visit-guide", title: "Amesbury store visit guide", description: "Address, directions, menu options and identification reminders for the Lawrence Avenue West storefront.", sections: [
    ["Find the storefront", "Amesbury Cannabis Dispensary is at 1575 Lawrence Ave W, North York, ON M6L 1C3. Look for the green-and-gold storefront and the number 1575."],
    ["Check before leaving", "Use the linked Google Maps listing for current routing and public hours before travelling."],
    ["Browse first", "Use the full menu for detailed browsing or Easy View for a compact category-first layout on a phone."],
    ["Bring photo ID", "The store is for adults 19+. Bring valid government-issued photo identification."]
  ]},
  { slug: "cannabis-storage-guide", title: "A simple cannabis storage guide", description: "Straightforward storage practices for keeping adult-use cannabis secure at home.", sections: [
    ["Keep it secured", "Store cannabis in a locked or otherwise secure place that children, teenagers and pets cannot access."],
    ["Keep the original package", "Original packaging keeps required product information and warnings with the product."],
    ["Use a cool, dry location", "Avoid excess heat, moisture and direct sunlight. Follow any storage directions printed on the product label."],
    ["Separate cannabis from ordinary food", "Keep cannabis products, especially edibles, clearly separated from regular food and drinks to prevent accidental consumption."]
  ]}
] as const;

export function getGuide(slug: string) { return GUIDES.find((guide) => guide.slug === slug); }
