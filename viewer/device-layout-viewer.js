import '../../iron-flex-layout/iron-flex-layout.js';
import '../../iron-flex-layout/classes/iron-flex-layout.js';
import '../../iron-icon/iron-icon.js';
import '../../iron-icons/iron-icons.js';
import '../../iron-icons/hardware-icons.js';
import '../../iron-selector/iron-selector.js';
import '../../paper-icon-button/paper-icon-button.js';
import '../../paper-styles/color.js';
import '../../paper-styles/shadow.js';
import '../../paper-toggle-button/paper-toggle-button.js';
import './device-view.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="device-layout-viewer">

  

  <template>

    <div class="main">

      <iron-selector class="view-select" selected="{{device}}" selected-item="{{deviceView}}" attr-for-selected="device" show-all\$="{{showAll}}" device\$="{{device}}">
        <device-view device="laptop" src="{{source.src}}"></device-view>
        <device-view device="tablet" src="{{source.src}}" landscape=""></device-view>
        <device-view device="phone" src="{{source.src}}"></device-view>
      </iron-selector>

    </div>

    <div class="sidebar" hidden\$="{{hideSidebar}}">

      <h4>Application</h4>
      <select id="select" on-change="_selectChange"></select>

      <a href="{{source.github}}" target="_blank" hidden\$="{{!source.github}}"><h4>Github Link</h4></a>

      <h4>Device View</h4>
      <iron-selector class="device-select" selected="{{device}}" selected-item="{{deviceIcon}}" attr-for-selected="name" show-all\$="{{showAll}}" on-iron-activate="_onIconActivate">
        <iron-icon name="phone" title="Phone" icon="hardware:phone-iphone"></iron-icon>
        <iron-icon name="tablet" title="Tablet" icon="hardware:tablet-mac" class="landscape"></iron-icon>
        <iron-icon name="laptop" title="Laptop" icon="hardware:laptop" class="no-landscape"></iron-icon>
      </iron-selector>

      <h4>Show All Views</h4>
      <paper-toggle-button checked="{{showAll}}"></paper-toggle-button>

    </div>

  </template>

  

</dom-module>`;

document.head.appendChild($_documentContainer);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
Displays a page on different device layouts.

    <device-layout-viewer device="phone" sources='[
      {"name":"Polymer Project","src":"https://www.polymer-project.org/"}
    ]'></device-layout-viewer>

@demo demo/index.html Basic Demo
*/
Polymer({

  is: 'device-layout-viewer',

  properties: {

    /**
     * An array of objects describing the sources.
     *
     *     sources = [
     *       {name: 'Polymer Project', src: 'https://www.polymer-project.org/'},
     *       {name: 'Polymer Github', src: 'https://github.com/orgs/Polymer/dashboard'}
     *     ];
     */
    sources: {
      type: Array,
      observer: '_sourcesChanged'
    },

    /**
     * The device layout to show.  Possible values are `phone`, `tablet` and `laptop`.
     */
    device: {
      type: String,
      value: 'phone'
    },

    /**
     * Show all device layouts together.
     */
    showAll: {
      type: Boolean,
      value: false
    },

    /**
     * Hides the sidebar.
     */
    hideSidebar: Boolean

  },

  _sourcesChanged: function(sources) {
    this.$.select.textContent = '';
    for (var i=0, s; s=sources[i]; i++) {
      Polymer.Base._log(s.name);
      this.$.select.add(this.create('option', {text: s.name}));
    }
    this.source = sources[0];
  },

  _selectChange: function(e) {
    this.source = this.sources[e.target.selectedIndex];
  },

  _onIconActivate: function(e) {
    var icon = e.detail.item;
    if (icon === this.deviceIcon) {
      this.toggleLandscape();
    }
  },

  /**
   * Toggles the landscape orientation of the current device.
   */
  toggleLandscape: function() {
    this.deviceIcon.classList.toggle('landscape');
    this.deviceView.toggleLandscape();
  }

});
