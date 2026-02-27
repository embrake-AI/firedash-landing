"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "fire-startup-discount";

export function useDiscount() {
	const [discount, setDiscountState] = useState(false);

	useEffect(() => {
		try {
			if (localStorage.getItem(STORAGE_KEY) === "true") setDiscountState(true);
		} catch {}
	}, []);

	const setDiscount = useCallback((value: boolean) => {
		setDiscountState(value);
		try {
			localStorage.setItem(STORAGE_KEY, String(value));
		} catch {}
	}, []);

	useEffect(() => {
		const handler = (e: StorageEvent) => {
			if (e.key === STORAGE_KEY) setDiscountState(e.newValue === "true");
		};
		window.addEventListener("storage", handler);
		return () => window.removeEventListener("storage", handler);
	}, []);

	return [discount, setDiscount] as const;
}
