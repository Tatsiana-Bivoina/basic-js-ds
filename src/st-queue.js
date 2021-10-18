const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
    this.data = null;
    this.next = null;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (!this.first){
      this.first = node;
    } else {
      let n = this.first;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }

    this.size += 1;
    return node;
  }

  dequeue() {
    let temp = this.first.value;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
  }

}
