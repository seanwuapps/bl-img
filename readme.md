
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
<script src='https://unpkg.com/bl-img@0.0.1/dist/blimg.js'></script>
```

after this you should be able to use it like any other html tags

```html
<bl-img class="img-circle" thumb-src="THUMBNAIL_IMAGE_URL.jpg" src="HD_IMAGE_URL.jpg"
  />
```