/**
 * Definition for a binary tree node.
 */
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }
    let result = 1;
    let queue = [root,'#'];
    while(queue.length>1){
        let node = queue.shift();
        if(node === '#'){
            result++;
            queue.push('#');
        }
        else{
            if(node.left != null){
                queue.push(node.left);
            }
            if(node.right != null){
                queue.push(node.right);
            }
        }
    }
    return result;
};

let root = new TreeNode(3);
root.left= new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxDepth(root));