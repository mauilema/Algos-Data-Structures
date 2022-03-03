function getNthFib(n) {
	//since we know getNthFib(1) = 0 and getNthFib(2) = 1; we can use this fact as the base case for recursion
	if (n === 2) return 1;//if n is stricly equals to 2; return 1 and end here
	else if (n === 1) return 0;//else if n is stricly equals to 1; return 0 and end here
	else {
		return getNthFib(n-1) + getNthFib(n-2);//else return the sum of the nth fibonacci of the 2 numbers preceding n
	}
}