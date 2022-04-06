## Array of Products

### Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

### In other words, the value at <span>output[i]</span> is equal to the product of every number in the input array other than <span>input[i]</span>.

### You cannot use division to solve this problem. 

<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [6,2,7,1,9]
</pre>

<h3>Sample Output</h3>
<pre>[126, 378, 108, 756, 84]
<span class="CodeEditor-promptComment">// 126 is equal to 2 x 7 x 1 x 9</span>
<span class="CodeEditor-promptComment">// 378 is equal to 6 x 7 x 1 x 9</span>
<span class="CodeEditor-promptComment">// 108 is equal to 6 x 2 x 1 x 9</span>
<span class="CodeEditor-promptComment">// 756 is equal to 6 x 2 x 7 x 9</span>
<span class="CodeEditor-promptComment">// 84 is equal to 6 x 2 x 7 x 1</span>
</pre>