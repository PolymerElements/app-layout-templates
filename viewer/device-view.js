import '../../polymer/polymer.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="device-view">

  

  <template>

    <iframe src="{{src}}"></iframe>

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
/*
Displays a page on a device layout.

    <device-view device="phone" src="https://www.polymer-project.org/"></device-view>

*/
Polymer({

  is: 'device-view',

  properties: {

    /**
     * The url of the page to show.
     */
    src: String,

    /**
     * The device layout to show.  Possible values are `phone`, `tablet` and `laptop`.
     */
    device: {
      type: String,
      value: 'phone',
      reflectToAttribute: true
    },

    /**
     * Use landscape orientaion if this is true.
     */
    landscape: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }

  },

  /**
   * Toggles the landscape orientation.
   */
  toggleLandscape: function() {
    this.landscape = !this.landscape;
  }

});
