## Depth First Search
### Given a Node class that has a name and an array of optional children nodes. When put together, nodes from an acyclic tree-like structure. Implement the Depth First Search method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (traverses the treee from left to right), sotres all of the nodes' names in the input array, and returns it. 

<h4>Sample Input</h4>
graph =     A
         /  |  \
        B   C   D
       / \     / \
      E   F   G   H
         / \     / \
        I   J   K   L

<h4>Sample Output</h4>
[A, B, E, F, I, J, C, D, G, H, K, L]