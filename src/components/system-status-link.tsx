"use client";

import { useEffect, useState } from "react";

const STATUS_POLL_INTERVAL_MS = 60_000;
const STATUS_PAGE_URL = "https://status.firedash.ai/";
const STATUS_API_URL = new URL("/api/status", STATUS_PAGE_URL).toString();

type StatusIndicator = "none" | "minor" | "major";

type StatusApiPayload = {
  updated_at: string;
  status: {
    indicator: StatusIndicator;
    description: string;
  };
  version: string;
};

type LandingSystemStatus = {
  href: string;
  label: string;
  indicator: StatusIndicator | "error" | "loading";
};

function isStatusApiPayload(value: unknown): value is StatusApiPayload {
  if (!value || typeof value !== "object") return false;

  const payload = value as Partial<StatusApiPayload>;
  const status = payload.status;

  return (
    typeof payload.updated_at === "string" &&
    typeof payload.version === "string" &&
    !!status &&
    typeof status === "object" &&
    (status.indicator === "none" || status.indicator === "minor" || status.indicator === "major") &&
    typeof status.description === "string"
  );
}

function getInitialSystemStatus(): LandingSystemStatus {
  return {
    href: STATUS_PAGE_URL,
    label: "System status",
    indicator: "loading",
  };
}

async function fetchLandingSystemStatus(): Promise<LandingSystemStatus> {
  try {
    const response = await fetch(STATUS_API_URL);

    if (!response.ok) {
      throw new Error(`Status API returned ${response.status}`);
    }

    const payload = await response.json();
    if (!isStatusApiPayload(payload)) {
      throw new Error("Status API returned an unexpected payload");
    }

    return {
      href: STATUS_PAGE_URL,
      label: payload.status.description,
      indicator: payload.status.indicator,
    };
  } catch {
    return {
      href: STATUS_PAGE_URL,
      label: "Status unavailable",
      indicator: "error",
    };
  }
}

export function SystemStatusLink() {
  const [status, setStatus] = useState<LandingSystemStatus>(getInitialSystemStatus);

  useEffect(() => {
    let cancelled = false;
    let inFlight = false;

    const refreshStatus = async () => {
      if (inFlight) return;
      inFlight = true;

      try {
        const nextStatus = await fetchLandingSystemStatus();
        if (!cancelled) {
          setStatus(nextStatus);
        }
      } finally {
        inFlight = false;
      }
    };

    void refreshStatus();
    const intervalId = window.setInterval(() => {
      void refreshStatus();
    }, STATUS_POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <a href={status.href} target="_blank" rel="noopener noreferrer" className={`fc-system-status fc-system-status-${status.indicator}`}>
      <span className="fc-system-status-dot" aria-hidden />
      <span>{status.label}</span>
    </a>
  );
}
