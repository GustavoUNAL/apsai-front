"use client";

import { useEffect, useState } from "react";
import { NavBanner } from "./NavBanner";
import { Navigation } from "./Navigation";

export function SiteHeader() {
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("navBannerDismissed") === "true") {
      setBannerVisible(false);
    }
  }, []);

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("navBannerDismissed", "true");
  };

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--mbx-bg)]"
      style={
        {
          "--site-header-height": bannerVisible ? "7.25rem" : "4rem",
        } as React.CSSProperties
      }
    >
      {bannerVisible && <NavBanner onDismiss={dismissBanner} />}
      <Navigation />
    </header>
  );
}
