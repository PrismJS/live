import * as env from "./env.js";

export function checkShortcut (shortcut, evt) {
	return shortcut.trim().split(/\s*\+\s*/).every(key => {
		switch (key) {
			case "Cmd":   return evt[env.superKey];
			case "Ctrl":  return evt.ctrlKey;
			case "Shift": return evt.shiftKey;
			case "Alt":   return evt.altKey;
			default:      return evt.key === key;
		}
	});
}