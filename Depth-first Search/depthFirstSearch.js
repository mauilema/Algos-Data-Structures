class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    //^^info above is given with prompt^^
  
    depthFirstSearch(array) {
          array.push(this.name) //push the node name into the empty array; starting with the root node and continuing with its children after 
          //the recursive call of depthFirstSearch
          for (const child of this.children) {
              child.depthFirstSearch(array) //recursivelly call the depthFirstSearch function on each child of the current nodes' children
          }
          return array //once all nodes' children's names are added to the array, return it
    }
  }