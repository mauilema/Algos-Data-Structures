## Comparing Strings Containing Backspaces

### Write a function that takes two strings containing backspaces (identified by the character ‘#’), and returns "true" if the two strings are equal. Otherwise, return "false". 

<pre>
<h3>Sample Input</h3>
str1="xy#z", str2="xzz#"
<h3>Sample Output</h3>
true
<p><h3>Explanation:</h3> After applying backspaces the strings become "xz" and "xz" respectively.</p>
</pre>

<pre>
<h3>Sample Input</h3>
str1="xy#z", str2="xyz#"
<h3>Sample Output</h3>
false
<p><h3>Explanation:</h3> After applying backspaces the strings become "xz" and "xy" respectively.
</pre>


<pre>
<h3>Sample Input</h3>
str1="xywrrmp", str2="xywrrmu#p"
<h3>Sample Output</h3>
true
<p><h3>Explanation:</h3> After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
</pre>