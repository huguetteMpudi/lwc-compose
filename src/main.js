import { LightningElement } from "lwc";

export default class Main extends LightningElement {

  title = "Welcome to Lightning Web Components!";

  
get role(){

  return "Software Developer";

}

video = "https://www.w3schools.com/tags/movie.mp4";

    handlePlay() {
        this.template.querySelector('c-wrapper').play();
    }

    handlePause() {
        this.template.querySelector('c-wrapper').pause();
    }

}
