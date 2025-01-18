// Define a recursive type for a tree structure
type TreeNode<T> = {
    value: T;
    children?: TreeNode<T>[];
  };
  
  // Create a tree
  const tree: TreeNode<string> = {
    value: "Root",
    children: [
      { value: "Child 1" },
      {
        value: "Child 2",
        children: [
          { value: "Grandchild 1" },
          { value: "Grandchild 2" },
        ],
      },
    ],
  };
  
  console.log(tree);
  