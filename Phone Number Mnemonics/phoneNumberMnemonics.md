## Phone Number Mnemonics

### If you open the keypad of your mobile phone, it'll likely look like this:

<pre>   ----- ----- -----
  |     |     |     |
  |  1  |  2  |  3  |
  |     | abc | def |
   ----- ----- -----
  |     |     |     |
  |  4  |  5  |  6  |
  | ghi | jkl | mno |
   ----- ----- -----
  |     |     |     |
  |  7  |  8  |  9  |
  | pqrs| tuv | wxyz|
   ----- ----- -----
        |     |
        |  0  |
        |     |
         -----
</pre>

### Almost every digit is associated with some letters in the alphabet; this allows certain phone numbers to spell out actual words. For example, the phone number <span>8464747328</span> can be written as <span>timisgreat</span>;similarly, the phone number <span>2686463</span> can be written as <span>antoine</span> or as <span>ant6463</span>.

### It's important to note that a phone number doesn't represent a single sequence of letters, but rather multiple combinations of letters. For instance, the digit <span>2</span> can represent three different letters (a, b, and c).

### A mnemonic is defined as a pattern of letters, ideas, or associations that assist in remembering something. Companies oftentimes use a mnemonic for their phone number to make it easier to remember.

### Given a stringified phone number of any non-zero length, write a function that returns all mnemonics for this phone number, in any order.

### For this problem, a valid mnemonic may only contain letters and the digits <span>0</span> and <span>1</span>. In other words, if a digit is able to be represented by a letter, then it must be. Digits <span>0</span> and <span>1</span> are the only two digits that don't have letter representations on the keypad.

### Note that you should rely on the keypad illustrated above for digit-letter associations.

<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">phoneNumber</span> = "1718"
</pre>

<h3>Sample Output</h3>
<pre>
[
    '1p1t', 
    '1p1u', 
    '1p1v', 
    '1q1t', 
    '1q1u', 
    '1q1v', 
    '1r1t', 
    '1r1u', 
    '1r1v', 
    '1s1t', 
    '1s1u', 
    '1s1v'
]
<span class="CodeEditor-promptComment">// The mnemonics could be ordered differently.</span>
</pre>
