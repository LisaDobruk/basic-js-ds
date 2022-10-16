const { NotImplementedError } = require('../extensions/index.js');

 //const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
this.data = data;
this.left = null;
this.right = null;
  }
}
class BinarySearchTree {
constructor(){
  this.rootNode = null;
}
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addInside(this.rootNode, data);
    function addInside(node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(data < node.data){
        node.left = addInside(node.left, data);
      }else{
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInside(this.rootNode, data);
    function searchInside(node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data<node.data?
      searchInside(node.left, data):
      searchInside(node.right, data);
    }
    
  }

  find(data) {
    return findInside(this.rootNode, data)
      function findInside(node, data){
        if(!node){
          return null;
        }
        if(node.data === data){
          return node;
        }

        return data<node.data?
        findInside(node.left, data):
        findInside(node.right, data);
      }
    
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data);
    
    function deleteNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = deleteNode(node.left, data);
        return node;
      }else if(node.data<data){
          node.right = deleteNode(node.right, data);
          return node;
      }else{
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node=node.left;
          return node;
        }

        let minInRight = node.right;
        while(minInRight.left){
          minInRight = minInRight.left;
        }
        node.data = minInRight.data;
        node.right = deleteNode(node.right, minInRight.data);
        return node;
      }
    }
    
  }

  min() {
    if(!this.rootNode){
      return null;
    }
    let node=this.rootNode;
    while(node.left){
      node=node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootNode){
      return null;
    }
    let node = this.rootNode;
    while(node.right){
      node = node.right;
    }
    return node.data;
    
  }
}

module.exports = {
  BinarySearchTree
};