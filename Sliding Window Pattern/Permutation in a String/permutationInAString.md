## Permutation in a String

### Write a function that returns True if a given string contains any permutation of a given pattern. Return False if that is not the case. Both arguments, "string" and "pattern" are string data types. 

### Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

<pre>
1. abc
2. acb
3. bac
4. bca
5. cab
6. cba
</pre>

### If a string has ‘n’ distinct characters it will have n!n! permutations.

<pre>
<h3>Sample Input</h3>
String = "oidbcaf", Pattern = "abc"
<h3>Sample Output</h3>
True
<p><h3>Explanation:</h3> The string contains "bca" which is a permutation of the given pattern.</p>
</pre>

<pre>
<h3>Sample Input</h3>
String = "odicf", Pattern = "dc"
<h3>Sample Output</h3>
False
<p><h3>Explanation:</h3> No permutation of the pattern is present in the given string as a substring.</p>
</pre>
