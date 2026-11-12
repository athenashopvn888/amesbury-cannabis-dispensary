"use client";

import { useEffect, useState } from "react";

const KEY = "amesbury-age-confirmed";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(sessionStorage.getItem(KEY) !== "yes"));
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!open) return null;
  return (
    <div className="ageGate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="ageCard">
        <div className="ageMark" aria-hidden="true">A</div>
        <p className="kicker">AMESBURY · NORTH YORK</p>
        <h2 id="age-title">Are you 19 or older?</h2>
        <p>You must be of legal age in Ontario to enter this cannabis retail website.</p>
        <button onClick={() => { sessionStorage.setItem(KEY, "yes"); setOpen(false); }}>Yes, enter site</button>
        <a href="https://www.ontario.ca/page/cannabis-laws">No, leave site</a>
      </div>
    </div>
  );
}
