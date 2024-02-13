
{
	let url = document.currentScript?.src;
	url = new URL(url, location);
	let importURL = new URL("./prism-live.mjs", url);
	importURL.search = url.search;
	import(importURL).then(m => Prism.Live = m.default);
}
