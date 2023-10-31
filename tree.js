/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
   let sum = 0;

   const rootVal = this.root.val;
   const chil = this.root.children;

   for(let i = 0; i < chil.length; i++){
    sum += chil[i]
   }

   return sum + rootVal;
   
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const evens = [];
    const rootVal = this.root.val;
    const chil = this.root.children;

    if(this.root.val % 2 === 0){
      evens.push(rootVal)
    }
      for(let i = 0; i < chil.length; i++){
        if(chil[i] % 2 === 0){
          evens.push(chil[i])
        }
      }
   return evens.length;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    const rootVal = this.root.val;
    const chil = this.root.children;

    if(rootVal > lowerBound){
      count++
    }

    for(let i = 0; i < chil.length; i++){
      if(chil[i] > lowerBound){
        count++
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };


