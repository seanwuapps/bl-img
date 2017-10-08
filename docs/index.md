## Progressively blur-load images
`<bl-img>` is a web component that allows images to be progressively loaded, meaning you can specify a thumbnail image src and a HD image src, so the component will first display the blured thumbnail, then when the HD version is fully loaded, it transitions into the view.

This provides a nice user experience for slow internet connections, a good practical use can be found in the artcles of https://medium.com/


## Usage

install this web component from npm
```bash
npm install bl-img --save
```
then insert script tag
```html
<script src='node_modules/bl-img/dist/blimg.js'></script>
```

or use unpkg CDN

```html
<script src='https://unpkg.com/bl-img@0.0.4/dist/blimg.js'></script>
```

after this you should be able to use it like any other html tags

<!--
```
<custom-element-demo>
  <template>
    <script src="dist/blimg.js"></script>
    <style>
      .image {
        width: 400px;
        max-height: 400px;
      }
    </style>
    <bl-img 
    class="image"
    thumb-src="https://cdn-images-1.medium.com/freeze/max/60/1*xU8VOotxa_HpI908SBACAQ.jpeg?q=20" src="https://cdn-images-1.medium.com/max/1600/1*xU8VOotxa_HpI908SBACAQ.jpeg"
    alt="hello world"
    ></bl-img>
  </template>
</custom-element-demo>
```
-->
```html
    <style>
      .image {
        width: 400px;
        max-height: 400px;
      }
    </style>
    <bl-img 
      class="image"
      thumb-src="https://cdn-images-1.medium.com/freeze/max/60/1*xU8VOotxa_HpI908SBACAQ.jpeg?q=20" 
      src="https://cdn-images-1.medium.com/max/1600/1*xU8VOotxa_HpI908SBACAQ.jpeg"
      alt="hello world"
    ></bl-img>
```
