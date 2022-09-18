import PrismLive from "../prism-live.js";

export default PrismLive.registerLanguage("clike", {
	comments: {
		singleline: "//",
		multiline: ["/*", "*/"]
	},
	snippets: {
		if: `if ($1) {
	$2
}`
	}
});