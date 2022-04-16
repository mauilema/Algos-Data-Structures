### Sum of Linked Lists

## You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer, and the first node in each Linked List always represents the least significant digit of the integer. Write a function that returns the head of a new Linked List that represents the sum of the integers represented by the two input Linked Lists.

## Each <span>LinkedList</span> node has an integer <span>value</span> as well as a <span>next</span> node pointing to the next node in the list or to <span>None</span> / <span>null</span> if it's the tail of the list. The <span>value</span> of each <span>LinkedList</span> node is always in the range of <span>0 - 9</span>.

## Note: your function must create and return a new Linked List, and you're not allowed to modify either of the input Linked Lists.


<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">linkedListOne</span> = 3 -&gt; 1 -&gt; 8 -&gt; 9
<span class="CodeEditor-promptParameter">linkedListTwo</span> = 7 -&gt; 2 -&gt; 6
</pre>

<h3>Sample Output</h3>
<pre>0 -&gt; 4 -&gt; 4 -&gt; 0 -&gt; 1
<span class="CodeEditor-promptComment">// linkedListOne represents 9813</span>
<span class="CodeEditor-promptComment">// linkedListTwo represents 627</span>
<span class="CodeEditor-promptComment">// 9813 + 627 = 10440</span>
</pre>