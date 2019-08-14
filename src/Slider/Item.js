export default class Item {
 constructor(item) {
   this.image = item;
   this.hasNext = false;
   this.next = null;
   this.hasPrev = false;
   this.prev = null;
 }
}