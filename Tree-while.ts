interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

interface ITree<T> {
  root: ITreeNode<T> | null;
  insert(value: T): void;
  search(value: T): ITreeNode<T> | null;
  remove(value: T): void;
  height(node: ITreeNode<T> | null): number;
  levelOrder(): void;
  size(node: ITreeNode<T> | null): number;
  print(node: ITreeNode<T> | null): void;
  inorder(node: ITreeNode<T> | null): void;
}

class TreeNode<T> implements ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
  public constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree<T> implements ITree<T> {
  root: ITreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    let before: ITreeNode<T> | null;
    let after = this.root;

    while (after != null) {
      before = after;

      if (after.value < value) {
        after = after.right;
      } else if (after.value > value) {
        after = after.left;
      } else {
        return;
      }
    }
    const newNode = new TreeNode(value);

    if (this.root == null) {
      this.root = newNode;
    } else {
      if (value < before!.value) {
        before!.left = newNode;
      } else {
        before!.right = newNode;
      }
    }
  }
  insertRecursive(
    value: T,
    root: ITreeNode<T> | null = null
  ): ITreeNode<T> | null {
    if (root == null) {
      const newNode = new TreeNode(value);
      if (this.root == null) this.root = newNode;
      return newNode;
    } else {
      if (value < root.value) {
        root.left = this.insertRecursive(value, root.left);
      } else {
        root.right = this.insertRecursive(value, root.right);
      }
      return root;
    }
  }
  search(value: T): ITreeNode<T> | null {
    return this.recursiveSearch(this.root, value);
  }

  private recursiveSearch(
    node: ITreeNode<T> | null,
    value: T
  ): ITreeNode<T> | null {
    if (node == null) {
      return null;
    } else {
      if (value == node.value) {
        return node;
      }
      if (value < node.value) {
        return this.recursiveSearch(node.left, value);
      } else {
        return this.recursiveSearch(node.right, value);
      }
    }
  }
  remove(value: T): void {
    throw new Error("Method not implemented.");
  }
  height(node: ITreeNode<T> | null): number {
    let maxLeft = 0;
    let maxRight = 0;
    if (node == null) {
      return 0;
    }

    maxLeft = this.height(node.left) + 1;

    maxRight = this.height(node.right) + 1;

    return Math.max(maxLeft, maxRight);
  }
  levelOrder(): void {
    throw new Error("Method not implemented.");
  }
  size(node: ITreeNode<T> | null): number {
    if (node == null) {
      return 0;
    } else {
      return this.size(node.left) + this.size(node.right) + 1;
    }
  }
  print(node: ITreeNode<T> | null): void {
    if (node == null) {
      return;
    }
    console.log(node);
    this.print(node.left);
    this.print(node.right);
  }
  inorder(node: ITreeNode<T> | null): void {
    if (node == null) {
      return;
    }
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }
}

const tree = new Tree();
tree.insert(11);
tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(8);
tree.insert(9);
tree.insert(1);
tree.insert(10);
//tree.inorder(tree.root);
console.log(tree.height(tree.root));
