import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
@api itemName='';

showFooter = false;

handleClick(){
this.showFooter = true;

}


}
