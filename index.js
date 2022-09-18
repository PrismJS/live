/*
 * JS for Prism Live’s page, not part of the actual editor
 */

let $$ = e => Array.from(document.querySelectorAll(e));

$$(".language-html.fill").forEach(t => t.value = document.head.outerHTML);

var css = await fetch("src/prism-live.css");
css = await css.text();

$$(".language-css.fill").forEach(t => {
	t.value = css;
	t.dispatchEvent(new InputEvent("input"));
});

var js = await fetch("src/prism-live.js");
js = await js.text();

$$(".language-js.fill").forEach(t => {
	t.value = js;
	t.dispatchEvent(new InputEvent("input"));
});
