
#bl-img

Progressviely load an image with blur effect.

`<bl-img>` is a web component that loads a thumbnail image first with blur effect, then loads the HD image in the background, after HD image is loaded it appears with removal of the blur effect.


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
<script src='https://unpkg.com/bl-img@0.0.6/dist/blimg.js'></script>
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
    thumb-src="https://cdn-images-1.medium.com/freeze/max/60/1*xU8VOotxa_HpI908SBACAQ.jpeg?q=20" src="https://cdn-images-1.medium.com/max/1600/1*xU8VOotxa_HpI908SBACAQ.jpeg"
    alt="hello world"
    ></bl-img>
```