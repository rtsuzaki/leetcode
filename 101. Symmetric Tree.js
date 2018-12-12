var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const checkSymmetry = (leftNode, rightNode) => {
        if (!leftNode && !rightNode) {
            return true;
        } else if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false;
        }
        return checkSymmetry(leftNode.left, rightNode.right) && checkSymmetry(leftNode.right, rightNode.left);
        
    }
    return checkSymmetry(root.left, root.right);
};