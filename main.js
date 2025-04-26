// Adding new categories for Dynamic Programming, Tries, and Strings
const categories = { 
    0: ['Sorting-I', 'Sorting-II'], 
    1: ['Easy', 'Medium', 'Hard'], 
    2: ['BS on 1D Arrays', 'BS on Answers', 'BS on 2D Arrays'], 
    3: ['Basic and Easy', 'Medium'], 
    4: ['Learn 1D LinkedList', 'Learn Doubly LinkedList', 'Medium Problems of LL', 'Medium Problems of DLL', 'Hard Problems of LL'], 
    5: ['Get a Strong Hold', 'Subsequences Pattern', 'Trying out all Combos / Hard'], 
    6: ['Learn Bit Manipulation', 'Interview Problems', 'Advanced Maths'], 
    7: ['Learning', 'Prefix, Infix, PostFix Conversion', 'Monotonic Stack/Queue Problems', 'Implementation Problems'], 
    8: ['Medium Problems', 'Hard Problems'], 
    9: ['Learning', 'Medium Problems', 'Hard Problems'], 
    10: ['Easy Problems', 'Medium/Hard'], 
    11: ['Traversals', 'Medium Problems', 'Hard Problems'],
    12: ['Concepts', 'Practice Problems'], 
    13: ['Learning', 'Problems on BFS/DFS', 'Topo Sort and Problems', 'Shortest Path Algorithms', 'MinimumSpanningTree/Disjoint Set', 'Other Algorithms'],
    14: ['Introduction to DP', '1D DP', '2D/3D DP and DP on Grids', 'DP on Subsequences', 'DP on Strings', 'DP on Stocks', 'DP on LIS', 'MCM DP | Partition DP', 'DP on Squares'],
    15: ['Theory', 'Problems'],
    16: ['Hard Problems']
}; 

// Define question ranges for each category
const categoryRanges = { 
    0: { 'Sorting-I': [0, 2], 'Sorting-II': [3, 6] }, 
    1: { 'Easy': [0, 13], 'Medium': [14, 27], 'Hard': [28, 39] }, 
    2: { 'BS on 1D Arrays': [0, 12], 'BS on Answers': [13, 26], 'BS on 2D Arrays': [27, 31] }, 
    3: { 'Basic and Easy': [0, 6], 'Medium': [7, 14] }, 
    4: { 'Learn 1D LinkedList': [0, 4], 'Learn Doubly LinkedList': [5, 8], 'Medium Problems of LL': [9, 23], 'Medium Problems of DLL': [24, 26], 'Hard Problems of LL': [27, 30] }, 
    5: { 'Get a Strong Hold': [0, 4], 'Subsequences Pattern': [5, 16], 'Trying out all Combos / Hard': [17, 24] }, 
    6: { 'Learn Bit Manipulation': [0, 7], 'Interview Problems': [8, 12], 'Advanced Maths': [13, 17] }, 
    7: { 'Learning': [0, 7], 'Prefix, Infix, PostFix Conversion': [8, 13], 'Monotonic Stack/Queue Problems': [14, 24], 'Implementation Problems': [25, 29] }, 
    8: { 'Medium Problems': [0, 7], 'Hard Problems': [8, 11] }, 
    9: { 'Learning': [0, 3], 'Medium Problems': [4, 10], 'Hard Problems': [11, 16] }, 
    10: { 'Easy Problems': [0, 4], 'Medium/Hard': [5, 15] }, 
    11: { 'Traversals': [0, 12], 'Medium Problems': [13, 24], 'Hard Problems': [25, 38] },
    12: { 'Concepts': [0, 2], 'Practice Problems': [3, 15] }, 
    13: { 'Learning': [0, 5], 'Problems on BFS/DFS': [6, 19], 'Topo Sort and Problems': [20, 26], 'Shortest Path Algorithms': [27, 41], 'MinimumSpanningTree/Disjoint Set': [42, 52], 'Other Algorithms': [53, 55] },
    14: { 'Introduction to DP': [0, 0], '1D DP': [1, 5], '2D/3D DP and DP on Grids': [6, 12], 'DP on Subsequences': [13, 24], 'DP on Strings': [25, 34], 'DP on Stocks': [35, 40], 'DP on LIS': [41, 47], 'MCM DP | Partition DP': [48, 54], 'DP on Squares': [55, 56] },
    15: { 'Theory': [0, 0], 'Problems': [1, 5] },
    16: { 'Hard Problems': [0, 8] }
}; 
// Steps array with questions
const steps = [
    {
        title: 'Step 2: Sorting Techniques',
        questions: [
            // Sorting-I
            { text: 'Selection Sort', url: 'https://www.geeksforgeeks.org/selection-sort/' },
            { text: 'Bubble Sort', url: 'https://leetcode.com/problems/sort-an-array/' },
            { text: 'Insertion Sort', url: 'https://www.geeksforgeeks.org/insertion-sort/' },
            // Sorting-II
            { text: 'Merge Sort', url: 'https://www.geeksforgeeks.org/merge-sort/' },
            { text: 'Recursive Bubble Sort', url: 'https://www.geeksforgeeks.org/recursive-bubble-sort/' },
            { text: 'Recursive Insertion Sort', url: 'https://www.geeksforgeeks.org/recursive-insertion-sort/' },
            { text: 'Quick Sort', url: 'https://www.geeksforgeeks.org/quick-sort/' }
        ]
    },
    {
        title: 'Step 3: Arrays',
        questions: [
            // Easy
            { text: 'Largest Element in an Array', url: 'https://www.geeksforgeeks.org/find-the-largest-element-in-an-array/' },
            { text: 'Second Largest Element in an Array', url: 'https://www.geeksforgeeks.org/find-second-largest-element-array/' },
            { text: 'Check if array is sorted', url: 'https://www.geeksforgeeks.org/program-check-array-sorted-not-iterative-recursive/' },
            { text: 'Remove duplicates from Sorted array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
            { text: 'Left Rotate an array by one place', url: 'https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/' },
            { text: 'Left rotate an array by D places', url: 'https://leetcode.com/problems/rotate-array/' },
            { text: 'Move Zeros to end', url: 'https://leetcode.com/problems/move-zeroes/' },
            { text: 'Linear Search', url: 'https://www.geeksforgeeks.org/linear-search/' },
            { text: 'Find the Union', url: 'https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/' },
            { text: 'Find missing number in an array', url: 'https://leetcode.com/problems/missing-number/' },
            { text: 'Maximum Consecutive Ones', url: 'https://leetcode.com/problems/max-consecutive-ones/' },
            { text: 'Find the number that appears once', url: 'https://leetcode.com/problems/single-number/' },
            { text: 'Longest subarray with given sum K (positives)', url: 'https://www.geeksforgeeks.org/longest-sub-array-sum-k/' },
            { text: 'Longest subarray with sum K (Positives + Negatives)', url: 'https://www.geeksforgeeks.org/longest-sub-array-sum-k-handling-negative-numbers/' },
            // Medium
            { text: '2Sum Problem', url: 'https://leetcode.com/problems/two-sum/' },
            { text: 'Sort an array of 0\'s 1\'s and 2\'s', url: 'https://leetcode.com/problems/sort-colors/' },
            { text: 'Majority Element (>n/2 times)', url: 'https://leetcode.com/problems/majority-element/' },
            { text: 'Kadane\'s Algorithm, maximum subarray sum', url: 'https://leetcode.com/problems/maximum-subarray/' },
            { text: 'Print subarray with maximum subarray sum', url: 'https://www.geeksforgeeks.org/printing-the-largest-sum-contiguous-subarray/' },
            { text: 'Stock Buy and Sell', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
            { text: 'Rearrange the array in alternating positive and negative items', url: 'https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/' },
            { text: 'Next Permutation', url: 'https://leetcode.com/problems/next-permutation/' },
            { text: 'Leaders in an Array problem', url: 'https://www.geeksforgeeks.org/leaders-in-an-array/' },
            { text: 'Longest Consecutive Sequence in an Array', url: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
            { text: 'Set Matrix Zeros', url: 'https://leetcode.com/problems/set-matrix-zeroes/' },
            { text: 'Rotate Matrix by 90 degrees', url: 'https://leetcode.com/problems/rotate-image/' },
            { text: 'Print the matrix in spiral manner', url: 'https://leetcode.com/problems/spiral-matrix/' },
            { text: 'Count subarrays with given sum', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
            // Hard
            { text: 'Pascal\'s Triangle', url: 'https://leetcode.com/problems/pascals-triangle/' },
            { text: 'Majority Element (n/3 times)', url: 'https://leetcode.com/problems/majority-element-ii/' },
            { text: '3-Sum Problem', url: 'https://leetcode.com/problems/3sum/' },
            { text: '4-Sum Problem', url: 'https://leetcode.com/problems/4sum/' },
            { text: 'Largest Subarray with 0 Sum', url: 'https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/' },
            { text: 'Count number of subarrays with given xor K', url: 'https://www.geeksforgeeks.org/count-number-subarrays-given-xor/' },
            { text: 'Merge Overlapping Subintervals', url: 'https://leetcode.com/problems/merge-intervals/' },
            { text: 'Merge two sorted arrays without extra space', url: 'https://leetcode.com/problems/merge-sorted-array/' },
            { text: 'Find the repeating and missing number', url: 'https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/' },
            { text: 'Count Inversions', url: 'https://www.geeksforgeeks.org/counting-inversions/' },
            { text: 'Reverse Pairs', url: 'https://leetcode.com/problems/reverse-pairs/' },
            { text: 'Maximum Product Subarray', url: 'https://leetcode.com/problems/maximum-product-subarray/' }
        ]
    },
    {
        title: 'Step 4: Binary Search',
        questions: [
            // BS on 1D Arrays
            { text: 'Binary Search to find X in sorted array', url: 'https://leetcode.com/problems/binary-search/' },
            { text: 'Implement Lower Bound', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
            { text: 'Implement Upper Bound', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
            { text: 'Search Insert Position', url: 'https://leetcode.com/problems/search-insert-position/' },
            { text: 'Floor/Ceil in Sorted Array', url: 'https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/' },
            { text: 'Find the first or last occurrence of a given number', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
            { text: 'Count occurrences of a number in a sorted array', url: 'https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/' },
            { text: 'Search in Rotated Sorted Array I', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
            { text: 'Search in Rotated Sorted Array II', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/' },
            { text: 'Find minimum in Rotated Sorted Array', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
            { text: 'Find out how many times has an array been rotated', url: 'https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/' },
            { text: 'Single element in a Sorted Array', url: 'https://leetcode.com/problems/single-element-in-a-sorted-array/' },
            { text: 'Find peak element', url: 'https://leetcode.com/problems/find-peak-element/' },
            // BS on Answers
            { text: 'Find square root of a number in log n', url: 'https://leetcode.com/problems/sqrtx/' },
            { text: 'Find the Nth root of a number', url: 'https://www.geeksforgeeks.org/n-th-root-number/' },
            { text: 'Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/' },
            { text: 'Minimum days to make M bouquets', url: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/' },
            { text: 'Find the smallest Divisor', url: 'https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/' },
            { text: 'Capacity to Ship Packages within D Days', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/' },
            { text: 'Kth Missing Positive Number', url: 'https://leetcode.com/problems/kth-missing-positive-number/' },
            { text: 'Aggressive Cows', url: 'https://www.geeksforgeeks.org/aggressive-cows/' },
            { text: 'Book Allocation Problem', url: 'https://www.geeksforgeeks.org/allocate-minimum-number-pages/' },
            { text: 'Split array - Largest Sum', url: 'https://leetcode.com/problems/split-array-largest-sum/' },
            { text: 'Painter\'s partition', url: 'https://www.geeksforgeeks.org/painters-partition-problem/' },
            { text: 'Minimize Max Distance to Gas Station', url: 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/' },
            { text: 'Median of 2 sorted arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
            { text: 'Kth element of 2 sorted arrays', url: 'https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/' },
            // BS on 2D Arrays
            { text: 'Find the row with maximum number of 1\'s', url: 'https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/' },
            { text: 'Search in a 2D matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix/' },
            { text: 'Search in a row and column wise sorted matrix', url: 'https://leetcode.com/problems/search-a-2d-matrix-ii/' },
            { text: 'Find Peak Element (2D Matrix)', url: 'https://leetcode.com/problems/find-a-peak-element-ii/' },
            { text: 'Matrix Median', url: 'https://www.geeksforgeeks.org/find-median-row-wise-sorted-matrix/' }
        ]
    },
    {
        title: 'Step 5: Strings',
        questions: [
            // Basic and Easy String Problems
            { text: 'Remove outermost Parenthesis', url: 'https://leetcode.com/problems/remove-outermost-parentheses/' },
            { text: 'Reverse words in a given string / Palindrome Check', url: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
            { text: 'Largest odd number in a string', url: 'https://leetcode.com/problems/largest-odd-number-in-string/' },
            { text: 'Longest Common Prefix', url: 'https://leetcode.com/problems/longest-common-prefix/' },
            { text: 'Isomorphic String', url: 'https://leetcode.com/problems/isomorphic-strings/' },
            { text: 'Check whether one string is a rotation of another', url: 'https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/' },
            { text: 'Check if two strings are anagram of each other', url: 'https://leetcode.com/problems/valid-anagram/' },
            // Medium String Problems
            { text: 'Sort Characters by frequency', url: 'https://leetcode.com/problems/sort-characters-by-frequency/' },
            { text: 'Maximum Nesting Depth of Parenthesis', url: 'https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/' },
            { text: 'Roman Number to Integer and Integer to Roman', url: 'https://leetcode.com/problems/roman-to-integer/' },
            { text: 'Implement Atoi', url: 'https://leetcode.com/problems/string-to-integer-atoi/' },
            { text: 'Count Number of Substrings', url: 'https://www.geeksforgeeks.org/count-number-of-substrings/' },
            { text: 'Longest Palindromic Substring [Do it without DP]', url: 'https://leetcode.com/problems/longest-palindromic-substring/' },
            { text: 'Sum of Beauty of all substring', url: 'https://leetcode.com/problems/sum-of-beauty-of-all-substrings/' },
            { text: 'Reverse Every Word in A String', url: 'https://leetcode.com/problems/reverse-words-in-a-string/' }
        ]
    },
    {
        title: 'Step 6: LinkedList',
        questions: [
            // Learn 1D LinkedList
            { text: 'Introduction to LinkedList, learn about struct, and how is node represented', url: 'https://www.geeksforgeeks.org/linked-list-set-1-introduction/' },
            { text: 'Inserting a node in LinkedList', url: 'https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/' },
            { text: 'Deleting a node in LinkedList', url: 'https://leetcode.com/problems/delete-node-in-a-linked-list/' },
            { text: 'Find the length of the linkedlist [learn traversal]', url: 'https://www.geeksforgeeks.org/find-length-of-a-linked-list-iterative-and-recursive/' },
            { text: 'Search an element in the LL', url: 'https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/' },
            // Learn Doubly LinkedList
            { text: 'Introduction to DLL, learn about struct, and how is node represented', url: 'https://www.geeksforgeeks.org/doubly-linked-list/' },
            { text: 'Insert a node in DLL', url: 'https://www.geeksforgeeks.org/doubly-linked-list-set-2-inserting-a-node/' },
            { text: 'Delete a node in DLL', url: 'https://www.geeksforgeeks.org/delete-a-node-in-a-doubly-linked-list/' },
            { text: 'Reverse a DLL', url: 'https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/' },
            // Medium Problems of LL
            { text: 'Middle of a LinkedList [TortoiseHare Method]', url: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
            { text: 'Reverse a LinkedList [Iterative]', url: 'https://leetcode.com/problems/reverse-linked-list/' },
            { text: 'Reverse a LL [Recursive]', url: 'https://leetcode.com/problems/reverse-linked-list/' },
            { text: 'Detect a loop in LL', url: 'https://leetcode.com/problems/linked-list-cycle/' },
            { text: 'Find the starting point in LL', url: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
            { text: 'Length of Loop in LL', url: 'https://www.geeksforgeeks.org/find-length-of-loop-in-linked-list/' },
            { text: 'Check if LL is palindrome or not', url: 'https://leetcode.com/problems/palindrome-linked-list/' },
            { text: 'Segregate odd and even nodes in LL', url: 'https://leetcode.com/problems/odd-even-linked-list/' },
            { text: 'Remove Nth node from the back of the LL', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
            { text: 'Delete the middle node of LL', url: 'https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/' },
            { text: 'Sort LL', url: 'https://leetcode.com/problems/sort-list/' },
            { text: 'Sort a LL of 0\'s 1\'s and 2\'s by changing links', url: 'https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/' },
            { text: 'Find the intersection point of Y LL', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
            { text: 'Add 1 to a number represented by LL', url: 'https://leetcode.com/problems/plus-one-linked-list/' },
            { text: 'Add 2 numbers in LL', url: 'https://leetcode.com/problems/add-two-numbers/' },
            // Medium Problems of DLL
            { text: 'Delete all occurrences of a key in DLL', url: 'https://www.geeksforgeeks.org/delete-occurrences-given-key-doubly-linked-list/' },
            { text: 'Find pairs with given sum in DLL', url: 'https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/' },
            { text: 'Remove duplicates from sorted DLL', url: 'https://www.geeksforgeeks.org/remove-duplicates-sorted-doubly-linked-list/' },
            // Hard Problems of LL
            { text: 'Reverse LL in group of given size K', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
            { text: 'Rotate a LL', url: 'https://leetcode.com/problems/rotate-list/' },
            { text: 'Flattening of LL', url: 'https://www.geeksforgeeks.org/flattening-a-linked-list/' },
            { text: 'Clone a Linked List with random and next pointer', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/' }
        ]
    },
    {
        title: 'Step 7: Recursion',
        questions: [
            // Get a Strong Hold
            { text: 'Recursive Implementation of atoi()', url: 'https://leetcode.com/problems/string-to-integer-atoi/' },
            { text: 'Pow(x, n)', url: 'https://leetcode.com/problems/powx-n/' },
            { text: 'Count Good numbers', url: 'https://leetcode.com/problems/count-good-numbers/' },
            { text: 'Sort a stack using recursion', url: 'https://www.geeksforgeeks.org/sort-a-stack-using-recursion/' },
            { text: 'Reverse a stack using recursion', url: 'https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/' },
            
            // Subsequences Pattern
            { text: 'Generate all binary strings', url: 'https://www.geeksforgeeks.org/generate-all-binary-strings-from-given-pattern/' },
            { text: 'Generate Parenthesis', url: 'https://leetcode.com/problems/generate-parentheses/' },
            { text: 'Print all subsequences/Power Set', url: 'https://www.geeksforgeeks.org/recursive-program-to-generate-power-set/' },
            { text: 'Learn All Patterns of Subsequences (Theory)', url: 'https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/' },
            { text: 'Count all subsequences with sum K', url: 'https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/' },
            { text: 'Check if there exists a subsequence with sum K', url: 'https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/' },
            { text: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum/' },
            { text: 'Combination Sum-II', url: 'https://leetcode.com/problems/combination-sum-ii/' },
            { text: 'Subset Sum-I', url: 'https://leetcode.com/problems/subsets/' },
            { text: 'Subset Sum-II', url: 'https://leetcode.com/problems/subsets-ii/' },
            { text: 'Combination Sum - III', url: 'https://leetcode.com/problems/combination-sum-iii/' },
            { text: 'Letter Combinations of a Phone number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
            
            // Trying out all Combos / Hard
            { text: 'Palindrome Partitioning', url: 'https://leetcode.com/problems/palindrome-partitioning/' },
            { text: 'Word Search', url: 'https://leetcode.com/problems/word-search/' },
            { text: 'N Queen', url: 'https://leetcode.com/problems/n-queens/' },
            { text: 'Rat in a Maze', url: 'https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/' },
            { text: 'Word Break', url: 'https://leetcode.com/problems/word-break/' },
            { text: 'M Coloring Problem', url: 'https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/' },
            { text: 'Sudoku Solver', url: 'https://leetcode.com/problems/sudoku-solver/' },
            { text: 'Expression Add Operators', url: 'https://leetcode.com/problems/expression-add-operators/' }
        ]
    },
    {
        title: 'Step 8: Bit Manipulation',
        questions: [
            // Learn Bit Manipulation
            { text: 'Introduction to Bit Manipulation [Theory]', url: 'https://www.geeksforgeeks.org/bit-manipulation/' },
            { text: 'Check if the i-th bit is set or not', url: 'https://www.geeksforgeeks.org/check-if-a-given-bit-is-set-in-a-number/' },
            { text: 'Check if a number is odd or not', url: 'https://www.geeksforgeeks.org/check-if-a-number-is-odd-or-even-using-bitwise-operators/' },
            { text: 'Check if a number is power of 2 or not', url: 'https://leetcode.com/problems/power-of-two/' },
            { text: 'Count the number of set bits', url: 'https://leetcode.com/problems/number-of-1-bits/' },
            { text: 'Set/Unset the rightmost unset bit', url: 'https://www.geeksforgeeks.org/set-rightmost-unset-bit/' },
            { text: 'Swap two numbers', url: 'https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/' },
            { text: 'Divide two integers without using multiplication, division and mod operator', url: 'https://leetcode.com/problems/divide-two-integers/' },
            
            // Interview Problems
            { text: 'Count number of bits to be flipped to convert A to B', url: 'https://www.geeksforgeeks.org/count-number-of-bits-to-be-flipped-to-convert-a-to-b/' },
            { text: 'Find the number that appears odd number of times', url: 'https://leetcode.com/problems/single-number/' },
            { text: 'Power Set', url: 'https://www.geeksforgeeks.org/power-set/' },
            { text: 'Find xor of numbers from L to R', url: 'https://www.geeksforgeeks.org/find-xor-of-numbers-from-the-range-l-r/' },
            { text: 'Find the two numbers appearing odd number of times', url: 'https://www.geeksforgeeks.org/find-the-two-numbers-with-odd-occurrences-in-an-unsorted-array/' },
            
            // Advanced Maths
            { text: 'Print Prime Factors of a Number', url: 'https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/' },
            { text: 'All Divisors of a Number', url: 'https://www.geeksforgeeks.org/find-all-divisors-of-a-natural-number-set-2/' },
            { text: 'Sieve of Eratosthenes', url: 'https://www.geeksforgeeks.org/sieve-of-eratosthenes/' },
            { text: 'Find Prime Factorisation of a Number using Sieve', url: 'https://www.geeksforgeeks.org/print-all-prime-factors-of-a-number/' },
            { text: 'Power(n, x)', url: 'https://leetcode.com/problems/powx-n/' }
        ]
    },
    {
        title: 'Step 9: Stack and Queues',
        questions: [
            // Learning
            { text: 'Implement Stack using Arrays', url: 'https://www.geeksforgeeks.org/stack-data-structure-introduction-program/' },
            { text: 'Implement Queue using Arrays', url: 'https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/' },
            { text: 'Implement Stack using Queue', url: 'https://leetcode.com/problems/implement-stack-using-queues/' },
            { text: 'Implement Queue using Stack', url: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
            { text: 'Implement stack using Linkedlist', url: 'https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/' },
            { text: 'Implement queue using Linkedlist', url: 'https://www.geeksforgeeks.org/implement-queue-using-linked-list/' },
            { text: 'Check for balanced parenthesis', url: 'https://leetcode.com/problems/valid-parentheses/' },
            { text: 'Implement Min Stack', url: 'https://leetcode.com/problems/min-stack/' },
            
            // Prefix, Infix, PostFix Conversion Problems
            { text: 'Infix to Postfix Conversion using Stack', url: 'https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/' },
            { text: 'Prefix to Infix Conversion', url: 'https://www.geeksforgeeks.org/prefix-infix-conversion/' },
            { text: 'Prefix to Postfix Conversion', url: 'https://www.geeksforgeeks.org/prefix-postfix-conversion/' },
            { text: 'Postfix to Prefix Conversion', url: 'https://www.geeksforgeeks.org/postfix-prefix-conversion/' },
            { text: 'Postfix to Infix', url: 'https://www.geeksforgeeks.org/postfix-to-infix/' },
            { text: 'Convert Infix To Prefix Notation', url: 'https://www.geeksforgeeks.org/convert-infix-prefix-notation/' },
            
            // Monotonic Stack/Queue Problems
            { text: 'Next Greater Element', url: 'https://leetcode.com/problems/next-greater-element-i/' },
            { text: 'Next Greater Element 2', url: 'https://leetcode.com/problems/next-greater-element-ii/' },
            { text: 'Next Smaller Element', url: 'https://www.geeksforgeeks.org/next-smaller-element/' },
            { text: 'Number of NGEs to the right', url: 'https://www.geeksforgeeks.org/count-of-next-greater-elements-to-the-right/' },
            { text: 'Trapping Rainwater', url: 'https://leetcode.com/problems/trapping-rain-water/' },
            { text: 'Sum of subarray minimum', url: 'https://leetcode.com/problems/sum-of-subarray-minimums/' },
            { text: 'Asteroid Collision', url: 'https://leetcode.com/problems/asteroid-collision/' },
            { text: 'Sum of subarray ranges', url: 'https://leetcode.com/problems/sum-of-subarray-ranges/' },
            { text: 'Remove k Digits', url: 'https://leetcode.com/problems/remove-k-digits/' },
            { text: 'Largest rectangle in a histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
            { text: 'Maximal Rectangles', url: 'https://leetcode.com/problems/maximal-rectangle/' },
            
            // Implementation Problems
            { text: 'Sliding Window maximum', url: 'https://leetcode.com/problems/sliding-window-maximum/' },
            { text: 'Stock span problem', url: 'https://leetcode.com/problems/online-stock-span/' },
            { text: 'The Celebrity Problem', url: 'https://leetcode.com/problems/find-the-celebrity/' },
            { text: 'LRU cache (IMPORTANT)', url: 'https://leetcode.com/problems/lru-cache/' },
            { text: 'LFU cache', url: 'https://leetcode.com/problems/lfu-cache/' }
        ]
    },
    {
        title: 'Step 10: Sliding Window & Two Pointer Combined Problems',
        questions: [
            // Medium Problems
            { text: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
            { text: 'Max Consecutive Ones III', url: 'https://leetcode.com/problems/max-consecutive-ones-iii/' },
            { text: 'Fruit Into Baskets', url: 'https://leetcode.com/problems/fruit-into-baskets/' },
            { text: 'Longest repeating character replacement', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
            { text: 'Binary subarray with sum', url: 'https://leetcode.com/problems/binary-subarrays-with-sum/' },
            { text: 'Count number of nice subarrays', url: 'https://leetcode.com/problems/count-number-of-nice-subarrays/' },
            { text: 'Number of substring containing all three characters', url: 'https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/' },
            { text: 'Maximum point you can obtain from cards', url: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/' },
            
            // Hard Problems
            { text: 'Longest Substring with At Most K Distinct Characters', url: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/' },
            { text: 'Subarray with k different integers', url: 'https://leetcode.com/problems/subarrays-with-k-different-integers/' },
            { text: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/' },
            { text: 'Minimum Window Subsequence', url: 'https://leetcode.com/problems/minimum-window-subsequence/' }
        ]
    },
    {
        title: 'Step 11: Heaps',
        questions: [
            // Learning
            { text: 'Introduction to Priority Queues using Binary Heaps', url: 'https://www.geeksforgeeks.org/introduction-to-priority-queues-using-binary-heaps/' },
            { text: 'Min Heap and Max Heap Implementation', url: 'https://www.geeksforgeeks.org/binary-heap/' },
            { text: 'Check if an array represents a min-heap or not', url: 'https://www.geeksforgeeks.org/check-if-an-array-represents-a-min-heap/' },
            { text: 'Convert min Heap to max Heap', url: 'https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/' },
            // Medium Problems
            { text: 'Kth largest element in an array [use priority queue]', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
            { text: 'Kth smallest element in an array [use priority queue]', url: 'https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/' },
            { text: 'Sort K sorted array', url: 'https://www.geeksforgeeks.org/nearly-sorted-algorithm/' },
            { text: 'Merge M sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
            { text: 'Replace each array element by its corresponding rank', url: 'https://www.geeksforgeeks.org/replace-each-element-array-rank-using-stl/' },
            { text: 'Task Scheduler', url: 'https://leetcode.com/problems/task-scheduler/' },
            { text: 'Hands of Straights', url: 'https://leetcode.com/problems/hand-of-straights/' },
            // Hard Problems
            { text: 'Design twitter', url: 'https://leetcode.com/problems/design-twitter/' },
            { text: 'Connect n ropes with minimal cost', url: 'https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/' },
            { text: 'Kth largest element in a stream of running integers', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
            { text: 'Maximum Sum Combination', url: 'https://www.geeksforgeeks.org/k-maximum-sum-combinations-two-arrays/' },
            { text: 'Find Median from Data Stream', url: 'https://leetcode.com/problems/find-median-from-data-stream/' },
            { text: 'K most frequent elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/' }
        ]
    },
    {
        title: 'Step 12: Greedy Algorithms',
        questions: [
            // Easy Problems
            { text: 'Assign Cookies', url: 'https://leetcode.com/problems/assign-cookies/' },
            { text: 'Fractional Knapsack Problem', url: 'https://www.geeksforgeeks.org/fractional-knapsack-problem/' },
            { text: 'Greedy algorithm to find minimum number of coins', url: 'https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/' },
            { text: 'Lemonade Change', url: 'https://leetcode.com/problems/lemonade-change/' },
            { text: 'Valid Parenthesis Checker', url: 'https://leetcode.com/problems/valid-parentheses/' },
            // Medium/Hard
            { text: 'N meetings in one room', url: 'https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/' },
            { text: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/' },
            { text: 'Jump Game 2', url: 'https://leetcode.com/problems/jump-game-ii/' },
            { text: 'Minimum number of platforms required for a railway', url: 'https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/' },
            { text: 'Job sequencing Problem', url: 'https://www.geeksforgeeks.org/job-sequencing-problem/' },
            { text: 'Candy', url: 'https://leetcode.com/problems/candy/' },
            { text: 'Program for Shortest Job First (or SJF) CPU Scheduling', url: 'https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/' },
            { text: 'Program for Least Recently Used (LRU) Page Replacement Algorithm', url: 'https://www.geeksforgeeks.org/program-for-least-recently-used-lru-page-replacement-algorithm/' },
            { text: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/' },
            { text: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/' },
            { text: 'Non-overlapping Intervals', url: 'https://leetcode.com/problems/non-overlapping-intervals/' }
        ]
    },
    {
        title: 'Step 13: Binary Trees',
        questions: [
            // Traversals
            { text: 'Introduction to Trees', url: 'https://www.geeksforgeeks.org/introduction-to-tree-data-structure/' },
            { text: 'Binary Tree Representation in C++', url: 'https://www.geeksforgeeks.org/binary-tree-array-implementation/' },
            { text: 'Binary Tree Representation in Java', url: 'https://www.geeksforgeeks.org/binary-tree-set-1-introduction/' },
            { text: 'Binary Tree Traversals in Binary Tree', url: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/' },
            { text: 'Preorder Traversal of Binary Tree', url: 'https://leetcode.com/problems/binary-tree-preorder-traversal/' },
            { text: 'Inorder Traversal of Binary Tree', url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
            { text: 'Post-order Traversal of Binary Tree', url: 'https://leetcode.com/problems/binary-tree-postorder-traversal/' },
            { text: 'Level order Traversal / Level order traversal in spiral form', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
            { text: 'Iterative Preorder Traversal of Binary Tree', url: 'https://www.geeksforgeeks.org/iterative-preorder-traversal/' },
            { text: 'Iterative Inorder Traversal of Binary Tree', url: 'https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/' },
            { text: 'Post-order Traversal of Binary Tree using 2 stack', url: 'https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/' },
            { text: 'Post-order Traversal of Binary Tree using 1 stack', url: 'https://www.geeksforgeeks.org/iterative-postorder-traversal/' },
            { text: 'Preorder, Inorder, and Postorder Traversal in one Traversal', url: 'https://www.geeksforgeeks.org/inorder-preorder-and-postorder-traversal-of-a-tree/' },
            // Medium Problems
            { text: 'Height of a Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
            { text: 'Check if the Binary tree is height-balanced or not', url: 'https://leetcode.com/problems/balanced-binary-tree/' },
            { text: 'Diameter of Binary Tree', url: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
            { text: 'Maximum path sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
            { text: 'Check if two trees are identical or not', url: 'https://leetcode.com/problems/same-tree/' },
            { text: 'Zig Zag Traversal of Binary Tree', url: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/' },
            { text: 'Boundary Traversal of Binary Tree', url: 'https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1' },
            { text: 'Vertical Order Traversal of Binary Tree', url: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/' },
            { text: 'Top View of Binary Tree', url: 'https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1' },
            { text: 'Bottom View of Binary Tree', url: 'https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1' },
            { text: 'Right/Left View of Binary Tree', url: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
            { text: 'Symmetric Binary Tree', url: 'https://leetcode.com/problems/symmetric-tree/' },
            // Hard Problems
            { text: 'Root to Node Path in Binary Tree', url: 'https://practice.geeksforgeeks.org/problems/root-to-leaf-paths/1' },
            { text: 'LCA in Binary Tree', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
            { text: 'Maximum width of a Binary Tree', url: 'https://leetcode.com/problems/maximum-width-of-binary-tree/' },
            { text: 'Check for Children Sum Property', url: 'https://practice.geeksforgeeks.org/problems/children-sum-parent/1' },
            { text: 'Print all the Nodes at a distance of K in a Binary Tree', url: 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/' },
            { text: 'Minimum time taken to BURN the Binary Tree from a Node', url: 'https://practice.geeksforgeeks.org/problems/burning-tree/1' },
            { text: 'Count total Nodes in a COMPLETE Binary Tree', url: 'https://leetcode.com/problems/count-complete-tree-nodes/' },
            { text: 'Requirements needed to construct a Unique Binary Tree | Theory', url: 'https://www.geeksforgeeks.org/if-you-are-given-two-traversal-sequences-can-you-construct-the-binary-tree/' },
            { text: 'Construct Binary Tree from inorder and preorder', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
            { text: 'Construct the Binary Tree from Postorder and Inorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/' },
            { text: 'Serialize and deserialize Binary Tree', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
            { text: 'Morris Preorder Traversal of a Binary Tree', url: 'https://www.geeksforgeeks.org/morris-traversal-for-preorder/' },
            { text: 'Morris Inorder Traversal of a Binary Tree', url: 'https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/' },
            { text: 'Flatten Binary Tree to LinkedList', url: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/' }
        ]
    },
    {
        title: 'Step 14: Binary Search Trees',
        questions: [
          // Concepts
          { text: 'Introduction to Binary Search Tree', url: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' },
          { text: 'Search in a Binary Search Tree', url: 'https://leetcode.com/problems/search-in-a-binary-search-tree/' },
          { text: 'Find Min/Max in BST', url: 'https://www.geeksforgeeks.org/find-the-minimum-element-in-a-binary-search-tree/' },
          // Practice Problems
          { text: 'Ceil in a Binary Search Tree', url: 'https://practice.geeksforgeeks.org/problems/implementing-ceil-in-bst/1' },
          { text: 'Floor in a Binary Search Tree', url: 'https://practice.geeksforgeeks.org/problems/floor-in-bst/1' },
          { text: 'Insert a given Node in Binary Search Tree', url: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/' },
          { text: 'Delete a Node in Binary Search Tree', url: 'https://leetcode.com/problems/delete-node-in-a-bst/' },
          { text: 'Find K-th smallest/largest element in BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
          { text: 'Check if a tree is a BST or BT', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
          { text: 'LCA in Binary Search Tree', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
          { text: 'Construct a BST from a preorder traversal', url: 'https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/' },
          { text: 'Inorder Successor/Predecessor in BST', url: 'https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1' },
          { text: 'Merge 2 BST\'s', url: 'https://practice.geeksforgeeks.org/problems/merge-two-bst-s/1' },
          { text: 'Two Sum In BST | Check if there exists a pair with Sum K', url: 'https://leetcode.com/problems/two-sum-iv-input-is-a-bst/' },
          { text: 'Recover BST | Correct BST with two nodes swapped', url: 'https://leetcode.com/problems/recover-binary-search-tree/' },
          { text: 'Largest BST in Binary Tree', url: 'https://practice.geeksforgeeks.org/problems/largest-bst/1' }
        ]
      },
      
      // Adding Step 15: Graphs
      {
        title: 'Step 15: Graphs',
        questions: [
          // Learning
          { text: 'Graph and Types', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
          { text: 'Graph Representation | C++', url: 'https://www.geeksforgeeks.org/graph-and-its-representations/' },
          { text: 'Graph Representation | Java', url: 'https://www.geeksforgeeks.org/graph-and-its-representations/' },
          { text: 'Connected Components | Logic Explanation', url: 'https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/' },
          { text: 'BFS', url: 'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/' },
          { text: 'DFS', url: 'https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/' },
          
          // Problems on BFS/DFS
          { text: 'Number of provinces (leetcode)', url: 'https://leetcode.com/problems/number-of-provinces/' },
          { text: 'Connected Components Problem in Matrix', url: 'https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/' },
          { text: 'Rotten Oranges', url: 'https://leetcode.com/problems/rotting-oranges/' },
          { text: 'Flood fill', url: 'https://leetcode.com/problems/flood-fill/' },
          { text: 'Cycle Detection in unirected Graph (bfs)', url: 'https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1' },
          { text: 'Cycle Detection in undirected Graph (dfs)', url: 'https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1' },
          { text: '0/1 Matrix (Bfs Problem)', url: 'https://leetcode.com/problems/01-matrix/' },
          { text: 'Surrounded Regions (dfs)', url: 'https://leetcode.com/problems/surrounded-regions/' },
          { text: 'Number of Enclaves [flood fill implementation - multisource]', url: 'https://leetcode.com/problems/number-of-enclaves/' },
          { text: 'Word ladder - 1', url: 'https://leetcode.com/problems/word-ladder/' },
          { text: 'Word ladder - 2', url: 'https://leetcode.com/problems/word-ladder-ii/' },
          { text: 'Number of Distinct Islands [dfs multisource]', url: 'https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1' },
          { text: 'Bipartite Graph (DFS)', url: 'https://leetcode.com/problems/is-graph-bipartite/' },
          { text: 'Cycle Detection in Directed Graph (DFS)', url: 'https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1' },
          
          // Topo Sort and Problems
          { text: 'Topo Sort', url: 'https://practice.geeksforgeeks.org/problems/topological-sort/1' },
          { text: 'Kahn\'s Algorithm', url: 'https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/' },
          { text: 'Cycle Detection in Directed Graph (BFS)', url: 'https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph-using-bfs/' },
          { text: 'Course Schedule - I', url: 'https://leetcode.com/problems/course-schedule/' },
          { text: 'Course Schedule - II', url: 'https://leetcode.com/problems/course-schedule-ii/' },
          { text: 'Find eventual safe states', url: 'https://leetcode.com/problems/find-eventual-safe-states/' },
          { text: 'Alien dictionary', url: 'https://practice.geeksforgeeks.org/problems/alien-dictionary/1' },
          
          // Shortest Path Algorithms and Problems
          { text: 'Shortest Path in UG with unit weights', url: 'https://www.geeksforgeeks.org/shortest-path-unweighted-graph/' },
          { text: 'Shortest Path in DAG', url: 'https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/' },
          { text: 'Djisktra\'s Algorithm', url: 'https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1' },
          { text: 'Why priority Queue is used in Djisktra\'s Algorithm', url: 'https://www.geeksforgeeks.org/why-is-binary-heap-preferred-over-bst-for-priority-queue/' },
          { text: 'Shortest path in a binary maze', url: 'https://practice.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1' },
          { text: 'Path with minimum effort', url: 'https://leetcode.com/problems/path-with-minimum-effort/' },
          { text: 'Cheapest flights within k stops', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
          { text: 'Network Delay time', url: 'https://leetcode.com/problems/network-delay-time/' },
          { text: 'Number of ways to arrive at destination', url: 'https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/' },
          { text: 'Minimum steps to reach end from start by performing multiplication and mod operations with array elements', url: 'https://practice.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1' },
          { text: 'Bellman Ford Algorithm', url: 'https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1' },
          { text: 'Floyd Warshal Algorithm', url: 'https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1' },
          { text: 'Find the city with the smallest number of neighbors in a threshold distance', url: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/' },
          
          // MinimumSpanningTree/Disjoint Set and Problems
          { text: 'Minimum Spanning Tree', url: 'https://www.geeksforgeeks.org/minimum-spanning-tree-set-1-introduction/' },
          { text: 'Prim\'s Algorithm', url: 'https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1' },
          { text: 'Disjoint Set [Union by Rank]', url: 'https://www.geeksforgeeks.org/union-find-algorithm-set-2-union-by-rank/' },
          { text: 'Disjoint Set [Union by Size]', url: 'https://www.geeksforgeeks.org/disjoint-set-data-structures/' },
          { text: 'Kruskal\'s Algorithm', url: 'https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1' },
          { text: 'Number of operations to make network connected', url: 'https://leetcode.com/problems/number-of-operations-to-make-network-connected/' },
          { text: 'Most stones removed with same rows or columns', url: 'https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/' },
          { text: 'Accounts merge', url: 'https://leetcode.com/problems/accounts-merge/' },
          { text: 'Number of island II', url: 'https://leetcode.com/problems/number-of-islands-ii/' },
          { text: 'Making a Large Island', url: 'https://leetcode.com/problems/making-a-large-island/' },
          { text: 'Swim in rising water', url: 'https://leetcode.com/problems/swim-in-rising-water/' },
          
          // Other Algorithms
          { text: 'Bridges in Graph', url: 'https://leetcode.com/problems/critical-connections-in-a-network/' },
          { text: 'Articulation Point', url: 'https://practice.geeksforgeeks.org/problems/articulation-point-1/1' },
          { text: 'Kosaraju\'s Algorithm', url: 'https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1' }
        ]
      },
      { title: 'Step 16: Dynamic Programming', questions: [
        // Introduction to DP
        { text: 'Dynamic Programming Introduction', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
        
        // 1D DP
        { text: 'Climbing Stars', url: 'https://leetcode.com/problems/climbing-stairs/' },
        { text: 'Frog Jump(DP-3)', url: 'https://leetcode.com/problems/frog-jump/' },
        { text: 'Frog Jump with k distances(DP-4)', url: 'https://www.geeksforgeeks.org/minimum-cost-to-reach-the-top-of-the-floor-by-climbing-stairs/' },
        { text: 'Maximum sum of non-adjacent elements (DP 5)', url: 'https://leetcode.com/problems/house-robber/' },
        { text: 'House Robber (DP 6)', url: 'https://leetcode.com/problems/house-robber/' },
        
        // 2D/3D DP and DP on Grids
        { text: 'Ninja\'s Training (DP 7)', url: 'https://practice.geeksforgeeks.org/problems/geek-training/1' },
        { text: 'Grid Unique Paths : DP on Grids (DP8)', url: 'https://leetcode.com/problems/unique-paths/' },
        { text: 'Grid Unique Paths 2 (DP 9)', url: 'https://leetcode.com/problems/unique-paths-ii/' },
        { text: 'Minimum path sum in Grid (DP 10)', url: 'https://leetcode.com/problems/minimum-path-sum/' },
        { text: 'Minimum path sum in Triangular Grid (DP 11)', url: 'https://leetcode.com/problems/triangle/' },
        { text: 'Minimum/Maximum Falling Path Sum (DP-12)', url: 'https://leetcode.com/problems/minimum-falling-path-sum/' },
        { text: '3-d DP : Ninja and his friends (DP-13)', url: 'https://practice.geeksforgeeks.org/problems/ninja-and-his-friends/1' },
        
        // DP on Subsequences
        { text: 'Subset sum equal to target (DP- 14)', url: 'https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1' },
        { text: 'Partition Equal Subset Sum (DP- 15)', url: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
        { text: 'Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP- 16)', url: 'https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/' },
        { text: 'Count Subsets with Sum K (DP - 17)', url: 'https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1' },
        { text: 'Count Partitions with Given Difference (DP - 18)', url: 'https://practice.geeksforgeeks.org/problems/partitions-with-given-difference/1' },
        { text: 'Assign Cookies', url: 'https://leetcode.com/problems/assign-cookies/' },
        { text: 'Minimum Coins (DP - 20)', url: 'https://leetcode.com/problems/coin-change/' },
        { text: 'Target Sum (DP - 21)', url: 'https://leetcode.com/problems/target-sum/' },
        { text: 'Coin Change 2 (DP - 22)', url: 'https://leetcode.com/problems/coin-change-2/' },
        { text: 'Unbounded Knapsack (DP - 23)', url: 'https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1' },
        { text: 'Rod Cutting Problem | (DP - 24)', url: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/' },
        
        // DP on Strings
        { text: 'Longest Common Subsequence | (DP - 25)', url: 'https://leetcode.com/problems/longest-common-subsequence/' },
        { text: 'Print Longest Common Subsequence | (DP - 26)', url: 'https://practice.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1' },
        { text: 'Longest Common Substring | (DP - 27)', url: 'https://practice.geeksforgeeks.org/problems/longest-common-substring1452/1' },
        { text: 'Longest Palindromic Subsequence | (DP-28)', url: 'https://leetcode.com/problems/longest-palindromic-subsequence/' },
        { text: 'Minimum insertions to make string palindrome | DP-29', url: 'https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/' },
        { text: 'Minimum Insertions/Deletions to Convert String | (DP- 30)', url: 'https://leetcode.com/problems/delete-operation-for-two-strings/' },
        { text: 'Shortest Common Supersequence | (DP - 31)', url: 'https://leetcode.com/problems/shortest-common-supersequence/' },
        { text: 'Distinct Subsequences| (DP-32)', url: 'https://leetcode.com/problems/distinct-subsequences/' },
        { text: 'Edit Distance | (DP-33)', url: 'https://leetcode.com/problems/edit-distance/' },
        { text: 'Wildcard Matching | (DP-34)', url: 'https://leetcode.com/problems/wildcard-matching/' },
        
        // DP on Stocks
        { text: 'Best Time to Buy and Sell Stock |(DP-35)', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
        { text: 'Buy and Sell Stock - II|(DP-36)', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/' },
        { text: 'Buy and Sell Stocks III|(DP-37)', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/' },
        { text: 'Buy and Stock Sell IV |(DP-38)', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/' },
        { text: 'Buy and Sell Stocks With Cooldown|(DP-39)', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/' },
        { text: 'Buy and Sell Stocks With Transaction Fee|(DP-40)', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/' },
        
        // DP on LIS
        { text: 'Longest Increasing Subsequence |(DP-41)', url: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
        { text: 'Printing Longest Increasing Subsequence|(DP-42)', url: 'https://practice.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1' },
        { text: 'Longest Increasing Subsequence |(DP-43)', url: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
        { text: 'Largest Divisible Subset|(DP-44)', url: 'https://leetcode.com/problems/largest-divisible-subset/' },
        { text: 'Longest String Chain|(DP-45)', url: 'https://leetcode.com/problems/longest-string-chain/' },
        { text: 'Longest Bitonic Subsequence |(DP-46)', url: 'https://practice.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1' },
        { text: 'Number of Longest Increasing Subsequences|(DP-47)', url: 'https://leetcode.com/problems/number-of-longest-increasing-subsequences/' },
        
        // MCM DP | Partition DP
        { text: 'Matrix Chain Multiplication|(DP-48)', url: 'https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1' },
        { text: 'Matrix Chain Multiplication | Bottom-Up|(DP-49)', url: 'https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1' },
        { text: 'Minimum Cost to Cut the Stick|(DP-50)', url: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/' },
        { text: 'Burst Balloons|(DP-51)', url: 'https://leetcode.com/problems/burst-balloons/' },
        { text: 'Evaluate Boolean Expression to True|(DP-52)', url: 'https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1' },
        { text: 'Palindrome Partitioning - II|(DP-53)', url: 'https://leetcode.com/problems/palindrome-partitioning-ii/' },
        { text: 'Partition Array for Maximum Sum|(DP-54)', url: 'https://leetcode.com/problems/partition-array-for-maximum-sum/' },
        
        // DP on Squares
        { text: 'Maximum Rectangle Area with all 1\'s|(DP-55)', url: 'https://leetcode.com/problems/maximal-rectangle/' },
        { text: 'Count Square Submatrices with All Ones|(DP-56)', url: 'https://leetcode.com/problems/count-square-submatrices-with-all-ones/' }
    ]},
    
    { title: 'Step 17: Tries', questions: [
        // Theory
        { text: 'Implement TRIE | INSERT | SEARCH | STARTSWITH', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
        
        // Problems
        { text: 'Implement Trie - 2 (Prefix Tree)', url: 'https://leetcode.com/problems/implement-trie-prefix-tree-ii/' },
        { text: 'Longest String with All Prefixes', url: 'https://practice.geeksforgeeks.org/problems/longest-string-with-all-prefixes/1' },
        { text: 'Number of Distinct Substrings in a String', url: 'https://practice.geeksforgeeks.org/problems/count-of-distinct-substrings/1' },
        { text: 'Bit PreRequisites for TRIE Problems', url: 'https://www.geeksforgeeks.org/bit-tricks-competitive-programming/' },
        { text: 'Maximum XOR of two numbers in an array', url: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/' },
        { text: 'Maximum XOR With an Element From Array', url: 'https://leetcode.com/problems/maximum-xor-with-an-element-from-array/' }
    ]},
    
    { title: 'Step 18: Strings', questions: [
        // Hard Problems
        { text: 'Minimum number of bracket reversals needed to make an expression balanced', url: 'https://practice.geeksforgeeks.org/problems/count-the-reversals0401/1' },
        { text: 'Count and say', url: 'https://leetcode.com/problems/count-and-say/' },
        { text: 'Hashing In Strings | Theory', url: 'https://www.geeksforgeeks.org/string-hashing-using-polynomial-rolling-hash-function/' },
        { text: 'Rabin Karp', url: 'https://leetcode.com/problems/repeated-string-match/' },
        { text: 'Z-Function', url: 'https://practice.geeksforgeeks.org/problems/z-algorithm/1' },
        { text: 'KMP algo / LPS(pi) array', url: 'https://leetcode.com/problems/implement-strstr/' },
        { text: 'Shortest Palindrome', url: 'https://leetcode.com/problems/shortest-palindrome/' },
        { text: 'Longest happy prefix', url: 'https://leetcode.com/problems/longest-happy-prefix/' },
        { text: 'Count palindromic subsequence in given string', url: 'https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1' }
    ]}

];
// Function to initialize the UI
function initializeUI() {
    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.innerHTML = '';

    steps.forEach((step, stepIndex) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.id = `step-${stepIndex + 2}`; // Starts from Step 2

        // Create step header
        const stepHeader = document.createElement('div');
        stepHeader.className = 'step-header';

        const stepTitle = document.createElement('h2');
        stepTitle.className = 'step-title';
        stepTitle.textContent = step.title;
        
        const stepProgress = document.createElement('div');
        stepProgress.className = 'step-progress';
        stepProgress.id = `progress-${stepIndex}`;
        
        stepHeader.appendChild(stepTitle);
        stepHeader.appendChild(stepProgress);
        stepElement.appendChild(stepHeader);

        // Get categories for this step
        const stepCategories = categories[stepIndex] || [];
        
        // Process questions by category
        if (stepCategories.length > 0) {
            stepCategories.forEach(categoryName => {
                // Create category heading
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';
                
                const categoryTitle = document.createElement('h3');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = categoryName;
                categoryDiv.appendChild(categoryTitle);
                
                // Get range for this category
                const range = categoryRanges[stepIndex][categoryName];
                const startIndex = range[0];
                const endIndex = range[1];
                
                // Add questions for this category
                for (let i = startIndex; i <= endIndex; i++) {
                    const question = step.questions[i];
                    if (!question) continue;
                    
                    const questionElement = createQuestionElement(stepIndex, i, question);
                    categoryDiv.appendChild(questionElement);
                }
                
                stepElement.appendChild(categoryDiv);
            });
        } else {
            // No categories, just add all questions
            step.questions.forEach((question, questionIndex) => {
                const questionElement = createQuestionElement(stepIndex, questionIndex, question);
                stepElement.appendChild(questionElement);
            });
        }

        // Add "Back to Top" link
        const topLink = document.createElement('a');
        topLink.href = "#";
        topLink.className = "top-link";
        topLink.textContent = "Back to Top";
        topLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        stepElement.appendChild(topLink);

        stepsContainer.appendChild(stepElement);
        
        // Initialize progress
        updateProgress(stepIndex);
    });
}

// Helper function to create question element
function createQuestionElement(stepIndex, questionIndex, question) {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${stepIndex}-${questionIndex}`;
    
    // Check localStorage for saved state
    const isChecked = localStorage.getItem(`checkbox-${stepIndex}-${questionIndex}`) === 'true';
    checkbox.checked = isChecked;
    
    checkbox.addEventListener('change', function() {
        // Save checkbox state
        localStorage.setItem(`checkbox-${stepIndex}-${questionIndex}`, this.checked);
        // Update UI for completed items
        updateQuestionDisplay(this, questionElement);
        // Update progress
        updateProgress(stepIndex);
    });

    const label = document.createElement('label');
    label.htmlFor = `checkbox-${stepIndex}-${questionIndex}`;
    
    const link = document.createElement('a');
    link.href = question.url;
    link.target = '_blank';
    link.textContent = question.text;
    
    label.appendChild(link);
    
    questionElement.appendChild(checkbox);
    questionElement.appendChild(label);
    
    // Apply styling for completed items on load
    if (isChecked) {
        link.classList.add('completed');
    }
    
    return questionElement;
}

// Helper function to update the display of a question when checked/unchecked
function updateQuestionDisplay(checkbox, questionElement) {
    const link = questionElement.querySelector('a');
    if (checkbox.checked) {
        link.classList.add('completed');
    } else {
        link.classList.remove('completed');
    }
}

// Function to update progress for a specific step
function updateProgress(stepIndex) {
    const step = steps[stepIndex];
    const progressElement = document.getElementById(`progress-${stepIndex}`);
    
    let completedCount = 0;
    const totalCount = step.questions.length;
    
    // Count completed tasks
    step.questions.forEach((question, questionIndex) => {
        const checkboxId = `checkbox-${stepIndex}-${questionIndex}`;
        const checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            completedCount++;
        }
    });
    
    // Update progress text
    progressElement.textContent = `${completedCount} of ${totalCount} Done`;
    
    // Update progress color based on completion percentage
    const completionPercentage = (completedCount / totalCount) * 100;
    if (completionPercentage === 100) {
        progressElement.style.backgroundColor = '#d5f5e3'; // Light green for completed
        progressElement.style.color = '#27ae60';
    } else if (completionPercentage > 50) {
        progressElement.style.backgroundColor = '#ebf5fb'; // Light blue for good progress
        progressElement.style.color = '#3498db';
    } else if (completionPercentage > 0) {
        progressElement.style.backgroundColor = '#fef9e7'; // Light yellow for started
        progressElement.style.color = '#f39c12';
    } else {
        progressElement.style.backgroundColor = '#f5f7fa'; // Default
        progressElement.style.color = '#666';
    }
}

// Initialize the UI when the page loads
document.addEventListener('DOMContentLoaded', initializeUI);