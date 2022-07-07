import { LightningElement,api } from "lwc";

export default class Wrapper extends LightningElement {

 @api videoUrl;

get title(){

  return "This is a wrapper component";
  
}


    @api
    get isPlaying() {
        const player = this.template.querySelector('video');
        return player !== null && player.paused === false;
    }

    @api
    play() {
        const player = this.template.querySelector('video');
        // the player might not be in the DOM just yet
        if (player) {
            player.play();
        }
    }

    @api
    pause() {
        const player = this.template.querySelector('video');
        if (player) {
            // the player might not be in the DOM just yet
            player.pause();
        }
    }

    // private method for computed value
    get videoType() {
        return 'video/' + this.videoUrl.split('.').pop();
    }


}