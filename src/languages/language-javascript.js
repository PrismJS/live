import PrismLive from "../prism-live.js";
import clike from "./language-clike.js";

export default PrismLive.registerLanguage("javascript", {
	snippets: {
		log: "console.log($1)",
	}
}, clike);
