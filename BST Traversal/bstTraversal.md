### BST Traversal

## Create 3 functions that take in a Binary Search Tree (BST) and an empty array as arguments, traverse the BST, add its nodes' values to the input array, and return that array. The three functions should traverse the BST using the in-order, pre-order, and post-order tree-traversal techniques, respectively.

## If you're unfamiliar with tree-traversal techniques, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

## Each <span>BST</span> node has an integer <span>value</span>, a <span>left</span> child node, and a <span>right</span> child node. A node is said to be a valid <span>BST</span> node if and only if it satisfies the BST property: its <span>value</span> is strictly greater than the values of every node to its left; its <span>value</span> is less than or equal to the values of every node to its right; and its children nodes are either valid <span>BST</span> nodes themselves or <span>None</span> / <span>null</span>.


<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">tree</span> =   10
       /     \
      5      15
    /   \       \
   2     5       22
 /
1
<span class="CodeEditor-promptParameter">array</span> = []
</pre>

<h3>Sample Output</h3>
<pre><span class="CodeEditor-promptParameter">inOrderTraverse</span>: [1, 2, 5, 5, 10, 15, 22] <span class="CodeEditor-promptComment">// where the array is the input array</span>
<span class="CodeEditor-promptParameter">preOrderTraverse</span>: [10, 5, 2, 1, 5, 15, 22] <span class="CodeEditor-promptComment">// where the array is the input array</span>
<span class="CodeEditor-promptParameter">postOrderTraverse</span>: [1, 2, 5, 5, 22, 15, 10] <span class="CodeEditor-promptComment">// where the array is the input array</span>
</pre>