/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { BlImg as BlImg } from './components/bl-img/bl-img';

interface HTMLBlImgElement extends BlImg, HTMLElement {
}
declare var HTMLBlImgElement: {
  prototype: HTMLBlImgElement;
  new (): HTMLBlImgElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "bl-img": HTMLBlImgElement;
  }
  interface ElementTagNameMap {
      "bl-img": HTMLBlImgElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "bl-img": JSXElements.BlImgAttributes;
      }
  }
  namespace JSXElements {
      export interface BlImgAttributes extends HTMLAttributes {
        
          thumbSrc?: any,
          src?: any,
          alt?: any,
          class?: any
      }
  }
}

