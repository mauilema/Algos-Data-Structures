## Remove Kth Node From End

### Create function that takes in the head of a Singly Linked List and an integer <span>k</span> and removes the kth node from the end of the list.

### The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).

### Additionally, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its <span>value</span> and <span>next</span> pointer.

### The function doesn't need to return anything; just mutate the input linked list. 

### Assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.

### Each <span>LinkedList</span> node has an integer <span>value</span> as well as a <span>next</span> node pointing to the next node in the list or to <span>None</span> / <span>null</span> if it's the tail of the list.

<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">head</span> = 0 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 7 -&gt; 8 -&gt; 9 <span class="CodeEditor-promptComment">// the head node with value 0</span>
<span class="CodeEditor-promptParameter">k</span> = 3
</pre>

<h3>Sample Output</h3>
<pre><span class="CodeEditor-promptComment">// No output required.</span>
<span class="CodeEditor-promptComment">// The 4th node from the end of the list (the node with value 6) is removed.</span>
0 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 8 -&gt; 9
</pre>


