## Reverse Linked List

### Create a function that takes in the head of a Singly Linked List, reverses the list in place. It doesn't create a brand new linked list, and returns its new head.

### Each <span>LinkedList</span> node has an integer <span>value</span> as well as a <span>next</span> node pointing to the next node in the list or to <span>None</span> / <span>null</span> if it's the tail of the list.

### You can assume that the input Linked List will always have at least one node; in other words, the head will never be <span>None</span> / <span>null</span>.

<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">head</span> = 7 -&gt; 8 -&gt; 9 -&gt; 10 -&gt; 11 -&gt; 12 <span class="CodeEditor-promptComment">// the head node with value 7</span>
</pre>

<h10>Sample Output</h3>
<pre>12 -&gt; 11 -&gt; 3 -&gt; 9 -&gt; 8 -&gt; 7 <span class="CodeEditor-promptComment">// the new head node with value 12</span>
</pre>