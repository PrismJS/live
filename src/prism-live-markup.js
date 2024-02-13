(async () => {
	const PrismLive = globalThis?.Prism?.Live ?? (await import("./prism-live.mjs")).default;
	const m = await import("./prism-live-markup.mjs");
	PrismLive.registerLanguage(m.default.id, m.default);
})();