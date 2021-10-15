const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(data) {
    let newNode = new Node(data);
    if(this.root() === null){
      this.roots = newNode;
      return this;
    }
    let current = this.root();
    while(current){
      if(data === current.data) return undefined;
      if(data < current.data){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        } 
        current = current.right;
      }
    }
  }
 

  has(data) {
    if (this.roots === null) return false;
    let current = this.roots;
    while(current) {
      if (data == current.data) {
        return true;
      }
      if (data < current.data){
        if (current.left !== null) {
          current = current.left;
        } else {
          return false;
        }
      } 
      if (data > current.data) {
        if (current.right !== null) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }

  find(data) {
    if (this.roots === null) return null;
    let current = this.roots;
    while(current) {
      if (data == current.data) {
        return current;
      }
      if (data < current.data){
        if (current.left !== null) {
          current = current.left;
        } else {
          return null;
        }
      } 
      if (data > current.data) {
        if (current.right !== null) {
          current = current.right;
        } else {
          return null;
        }
      }
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  removeNode(node, data) {
    if (this.roots === null) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node;
      }
      if(node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  remove(data) {
    this.roots = this.removeNode(this.roots, data);
  }

  min() {
    if (this.roots === null) return null;
    let current = this.roots;
    while (current) {
      if (current.left === null) {
        return current.data;
      } else {
        current = current.left;
      }
    }
  }

  max() {
    if (this.roots === null) return null;
    let current = this.roots;
    while (current) {
      if (current.right === null) {
        return current.data;
      } else {
        current = current.right;
      }
    }
  }
}