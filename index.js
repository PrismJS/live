/*
 * JS for Prism Live’s page, not part of the actual editor
 */

(function($, $$) {

$$("textarea.language-html").forEach(t => t.value = document.head.outerHTML);

})(Bliss, Bliss.$);
