## Find the Closest Value in BST

### Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
## You can assume that there will only be one closest value.

### If you're unfamiliar with Selection Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

<p>
  Each <span>BST</span> node has an integer <span>value</span>, a
  <span>left</span> child node, and a <span>right</span> child node. A node is
  said to be a valid <span>BST</span> node if and only if it satisfies the BST
  property: its <span>value</span> is strictly greater than the values of every
  node to its left; its <span>value</span> is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  <span>BST</span> nodes themselves or <span>None</span> / <span>null</span>.
</p>

<h4>Sample Input</h4>
<pre><span class="CodeEditor-promptParameter">tree</span> =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
<span class="CodeEditor-promptParameter">target</span> = 12
</pre>

<h4>Sample Output</h4>
<pre>13</pre>