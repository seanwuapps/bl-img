import { Component, Prop, Element, State, PropDidChange } from '@stencil/core';


@Component({
  tag: 'bl-img',
  styleUrl: 'bl-img.scss'
})
export class BlImg {
  @Element() el: HTMLElement;
  
  @Prop() thumbSrc: string;
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() class: string;
  
  @State() loaded : boolean = false;

  @State() loadedSrc: string = '';
  img: HTMLImageElement;
  imgClasses: string;

  componentDidLoad = () => {
    if(!this.thumbSrc){
      // debugger;
      this.loadedSrc = this.src;
      this.imgClasses = this.imgClasses + ' enhanced'; 
      this.img = this.el.querySelector('img');  
      this.img.className = this.imgClasses;
      return;
    }
    this.initImage();
  }

  initImage = () => {
    if(this.loaded){
      return;
    }
    this.img = this.el.querySelector('img');
    // move class list into img tag
    this.imgClasses = this.el.className;
    this.el.className = '';
    this.img.className = this.imgClasses;
    this.img.onload = this.onImageLoaded;
    // load first image 
    this.loadedSrc = this.thumbSrc;
  }



  onImageLoaded = () =>{
    // console.log('on image loaded called');

    if(this.img.src === this.src){
      // console.log('hd src loaded')
      this.imgClasses = this.imgClasses + ' enhanced'; 
      this.img.className = this.imgClasses;
      this.loaded = true;
      return;
    }

    // console.log('thumb loaded but not hd');
    // load large image
    this.loadedSrc = this.src;
  }
  

  render() {
    // console.log('rendering with img: '+ this.loadedSrc);
    return (
      <img src={this.loadedSrc}  alt={this.alt} />
    );
  }
}
