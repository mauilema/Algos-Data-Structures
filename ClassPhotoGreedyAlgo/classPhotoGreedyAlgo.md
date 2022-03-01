## Class Photo Greedy Algorithm

### It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact,exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines: 

<ul>
  <li>All students wearing red shirts must be in the same row.</li>
  <li>All students wearing blue shirts must be in the same row.</li>
  <li>Each student in the back row must be strictly taller than the student directly in front of them in the front row.</li>
</ul>

<h4>Sample Input</h4>
yellowShirtHeights = [7, 3, 6, 10, 12, 16]
greenShirtHeights = [6, 2, 5, 9, 11, 13 ]

<h4>Sample Output</h4>
true //Place all students with yellow shirts in the back row