"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Institution logo with a graceful fallback to initials when the asset is
 * missing or fails to load.
 */
export function Logo({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);

  const initials = name.includes("Jind")
    ? "JIET"
    : name
        .split(" ")
        .map((word) => word[0])
        .slice(0, 3)
        .join("");

  return (
    <div className="logo-frame">
      {src && !failed ? (
        <Image
          src={src}
          alt={`${name} logo`}
          width={140}
          height={84}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="logo-initials">{initials}</span>
      )}
    </div>
  );
}
