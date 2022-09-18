export function bind(element, o) {
	if (arguments.length === 3) {
		return bind(element, {[o]: arguments[2]});
	}

	for (let eventstr in o) {
		let [...events] = eventstr.split(/\s+/);
		for (let event of events) {
			element.addEventListener(event, o[eventstr])
		}
	}
}

export const ready = document.readyState !== "loading" ? Promise.resolve() : new Promise(r => document.addEventListener("DOMContentLoaded", r));