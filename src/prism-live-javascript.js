(async () => {
	const PrismLive = globalThis?.Prism?.Live ?? (await import("./prism-live.mjs")).default;
	const m = await import("./prism-live-css.mjs");
	for (const key in m) {
		PrismLive.registerLanguage(key, m[key]);
	}
})();