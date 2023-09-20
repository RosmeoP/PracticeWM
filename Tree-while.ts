interface ITreeNode<T> {
    value: T;
    left: ITreeNode<T> | null;
    right: ITreeNode<T> | null;
  }
  
  interface ITree<T> {
    root: ITreeNode<T> | null;
    insert(value: T): void;
    search(value: T): ITreeNode<T>;
    remove(value: T): void;
    height(): number;
    levelOrder(): void;
    size(): number;
    print(node: ITreeNode<T> | null): void;
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
  
    search(value: T): ITreeNode<T> {
      throw new Error("Method not implemented.");
    }
    remove(value: T): void {
      throw new Error("Method not implemented.");
    }
    height(): number {
      throw new Error("Method not implemented.");
    }
    levelOrder(): void {
      throw new Error("Method not implemented.");
    }
    size(): number {
      throw new Error("Method not implemented.");
    }
    print(node: ITreeNode<T> | null): void {
      if (node == null) {
        return;
      }
      console.log(node);
      this.print(node.left);
      this.print(node.right);
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
  tree.print(tree.root);
  