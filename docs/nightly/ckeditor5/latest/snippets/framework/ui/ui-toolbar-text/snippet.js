/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,t=new View;t.element=document.createTextNode("Toolbar text");const o=new ToolbarView(e);o.items.add(t),o.render(),document.querySelector(".ui-toolbar-text").append(o.element)})();