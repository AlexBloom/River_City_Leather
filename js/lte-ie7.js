/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'River-City-Leather\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#x22;',
			'icon-twitter' : '&#x23;',
			'icon-tumblr' : '&#x24;',
			'icon-pinterest' : '&#x25;',
			'icon-instagram' : '&#x26;',
			'icon-arrow-down' : '&#x27;',
			'icon-arrow-up' : '&#x28;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};