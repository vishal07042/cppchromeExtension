console.log("Hello World");

  let cpp = [
    {
      "id": 1,
      "title": "Q1. 1. What is printed from this code?",
      "code": "<span class=\"hljs-function\">vector&lt;<span class=\"hljs-type\">int</span>&gt; <span class=\"hljs-title\">v</span><span class=\"hljs-params\">(<span class=\"hljs-number\">22</span>)</span></span>;\n<span class=\"hljs-type\">bool</span> b = (v[<span class=\"hljs-number\">6</span>]);\n<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;%d&quot;</span>, !b);",
      "choices": [
        "False - \\[ \\] 0 - \\[x\\] 1 - \\[ \\] This code has an error."
      ],
      "answer": "\\- \\[ \\] False - \\[ \\] 0 1 - \\[ \\] This code has an error."
    },
    {
      "id": 2,
      "title": "Q2. 2. Which of the following is a reason why using this line is considered a bad practice? (*Alternative*: Why is using this line considered a bad practice?)",
      "code": "Using <span class=\"hljs-keyword\">namespace</span> std;",
      "choices": [
        "The compiled code is always bigger because of all of the imported symbols. - \\[x\\] If the code uses a function defined in two different libraries with the same prototype but possibly with different implementations, there will be a compilation error due to ambiguity. - \\[ \\] It automatically includes all header files in the standard library (cstdint, cstdlib, cstdio, iostream, etc). - \\[ \\] It causes the compiler to enforce the exclusive inclusion of header files belonging to the standard library, generating compilation error when a different header file is included."
      ],
      "answer": "\\- \\[ \\] The compiled code is always bigger because of all of the imported symbols. If the code uses a function defined in two different libraries with the same prototype but possibly with different implementations, there will be a compilation error due to ambiguity. - \\[ \\] It automatically includes all header files in the standard library (cstdint, cstdlib, cstdio, iostream, etc). - \\[ \\] It causes the compiler to enforce the exclusive inclusion of header files belonging to the standard library, generating compilation error when a different header file is included."
    },
    {
      "id": 3,
      "title": "Q3. 3. What is the smallest size a variable of the type child_t may occupy in memory?",
      "code": "<span class=\"hljs-keyword\">typedef</span> <span class=\"hljs-keyword\">struct</span>{\n    <span class=\"hljs-type\">unsigned</span> <span class=\"hljs-type\">int</span>  age    : <span class=\"hljs-number\">4</span>;\n    <span class=\"hljs-type\">unsigned</span> <span class=\"hljs-type\">char</span> gender : <span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-type\">unsigned</span> <span class=\"hljs-type\">int</span>  size   : <span class=\"hljs-number\">2</span>;\n}<span class=\"hljs-type\">child_t</span>;",
      "choices": [
        "7 bits. - \\[ \\] 25 bytes. - \\[ \\] 1 bit. - \\[ \\] 1 byte."
      ],
      "answer": "7 bits. - \\[ \\] 25 bytes. - \\[ \\] 1 bit. - \\[ \\] 1 byte."
    },
    {
      "id": 4,
      "title": "Q4. 4. Which of the following shows the contents of vector v1 and v2 after running this code?",
      "code": "std::vector&lt;<span class=\"hljs-type\">int</span>&gt; v1{<span class=\"hljs-number\">1</span>,<span class=\"hljs-number\">2</span>,<span class=\"hljs-number\">3</span>},v2;\nv2=v1;\nv<span class=\"hljs-number\">1.</span><span class=\"hljs-built_in\">push_back</span>(<span class=\"hljs-number\">4</span>);\nv<span class=\"hljs-number\">2.</span><span class=\"hljs-built_in\">push_back</span>(<span class=\"hljs-number\">5</span>);",
      "choices": [
        "Error - \\[ \\] v1:{1,2,3,4}; v2:{5}; - \\[ \\] v1:{1,2,3,4,5}; v2:{1,2,3,4,5}; - \\[x\\] v1:{1,2,3,4}; v2:{1,2,3,5};"
      ],
      "answer": "\\- \\[ \\] Error - \\[ \\] v1:{1,2,3,4}; v2:{5}; - \\[ \\] v1:{1,2,3,4,5}; v2:{1,2,3,4,5}; v1:{1,2,3,4}; v2:{1,2,3,5};"
    },
    {
      "id": 5,
      "title": "Q5. 5. Which of the following is a true statement about the difference between pointers and iterators?",
      "code": null,
      "choices": [
        "While pointers are variable that hold memory address, iterators are generic functions used to traverse containers. These function allows the programmer to implement read and write code as the container is traversed. - \\[x\\] Incrementing an iterator always means access the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element. - \\[ \\] Pointers are variables that hold memory address where as iterator are unsigned integers that refers to offsets in arrays. - \\[ \\] All iterator are implemented with pointers so all iterators are pointers but not all pointers are iterators."
      ],
      "answer": "\\- \\[ \\] While pointers are variable that hold memory address, iterators are generic functions used to traverse containers. These function allows the programmer to implement read and write code as the container is traversed. Incrementing an iterator always means access the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element. - \\[ \\] Pointers are variables that hold memory address where as iterator are unsigned integers that refers to offsets in arrays. - \\[ \\] All iterator are implemented with pointers so all iterators are pointers but not all pointers are iterators."
    },
    {
      "id": 6,
      "title": "Q6. 6. What's a benefit of declaring the parameter as a const reference instead of declaring it as a regular object?",
      "code": "<span class=\"hljs-function\"><span class=\"hljs-type\">int</span> <span class=\"hljs-title\">median</span><span class=\"hljs-params\">(<span class=\"hljs-type\">const</span> my_array&amp; a)</span></span>;",
      "choices": [
        "The argument is passed as a reference, so the function receives a copy that can be modified without affecting the original value. - \\[x\\] The argument is passed as a reference, so if the passed my\\_array object is large, the program will require less time and memory. - \\[ \\] Actually objects can't be passed as regular variables because they require a constructor call. Therefore a const reference is the only way to pass class instances to functions. - \\[ \\] There are no benefits because a reference and an object are treated as the same thing."
      ],
      "answer": "\\- \\[ \\] The argument is passed as a reference, so the function receives a copy that can be modified without affecting the original value. The argument is passed as a reference, so if the passed my\\_array object is large, the program will require less time and memory. - \\[ \\] Actually objects can't be passed as regular variables because they require a constructor call. Therefore a const reference is the only way to pass class instances to functions. - \\[ \\] There are no benefits because a reference and an object are treated as the same thing."
    },
    {
      "id": 7,
      "title": "Q7. 7. What's the storage occupied by u1?",
      "code": "<span class=\"hljs-keyword\">union</span> {\n    <span class=\"hljs-type\">unit16_t</span> a;\n    <span class=\"hljs-type\">unit32_t</span> b;\n    <span class=\"hljs-type\">int8_t</span> c;\n} u1;",
      "choices": [
        "4 bytes - \\[ \\] 7 bytes - \\[ \\] 8 bytes - \\[ \\] 2 bytes"
      ],
      "answer": "4 bytes - \\[ \\] 7 bytes - \\[ \\] 8 bytes - \\[ \\] 2 bytes"
    },
    {
      "id": 8,
      "title": "Q8. 8. Which of the following operators is overloadable?",
      "code": null,
      "choices": [
        "\\`?:\\` - \\[x\\] \\`new\\` - \\[ \\] \\`::\\` - \\[ \\] \\`.\\`"
      ],
      "answer": "\\- \\[ \\] \\`?:\\` \\`new\\` - \\[ \\] \\`::\\` - \\[ \\] \\`.\\`"
    },
    {
      "id": 9,
      "title": "Q9. 9. Which of the following shows the contents of vector pointed by v1 and v2 after running this code?",
      "code": "std:: vector&lt;<span class=\"hljs-type\">int</span>&gt; *v1 = <span class=\"hljs-keyword\">new</span> std::<span class=\"hljs-built_in\">vector</span>&lt;<span class=\"hljs-type\">int</span>&gt;({<span class=\"hljs-number\">1</span>,<span class=\"hljs-number\">2</span>,<span class=\"hljs-number\">3</span>});\nstd:: vector&lt;<span class=\"hljs-type\">int</span>&gt; *v2;\nv2=v1;\nv1-&gt;<span class=\"hljs-built_in\">push_back</span>(<span class=\"hljs-number\">4</span>);\nv2-&gt;<span class=\"hljs-built_in\">push_back</span>(<span class=\"hljs-number\">5</span>);",
      "choices": [
        "\\`\\*v1:{1,2,3,4}; \\*v2:{5};\\` - \\[x\\] \\`\\*v1:{1,2,3,4,5}; \\*v2:{1,2,3,4,5};\\` - \\[ \\] Error - \\[ \\] \\`\\*v1:{1,2,3,4}; \\*v2:{1,2,3,5};\\`"
      ],
      "answer": "\\- \\[ \\] \\`\\*v1:{1,2,3,4}; \\*v2:{5};\\` \\`\\*v1:{1,2,3,4,5}; \\*v2:{1,2,3,4,5};\\` - \\[ \\] Error - \\[ \\] \\`\\*v1:{1,2,3,4}; \\*v2:{1,2,3,5};\\`"
    },
    {
      "id": 10,
      "title": "Q10. 10. Which of the following is not a difference between a class and a struct?",
      "code": null,
      "choices": [
        "Because structs are part of the C programming language, there are some complexity between C and C++ structs. This is not the case with classes. - \\[X\\] Classes may have member functions; structs are private. - \\[ \\] The default access specifier for members of struct is public, whereas for member of class, it is private. - \\[ \\] Template type parameters can be declared with classes, but not with the struct keyword."
      ],
      "answer": ""
    },
    {
      "id": 11,
      "title": "Q11. 11. Suppose you need to keep a data struct with permission to access some resource based on the days of the week, but you can't use a bool variable for each day. You need to use one bit per day of the week. Which of the following is a correct implementation of a structure with bit fields for this application?",
      "code": "<span class=\"hljs-keyword\">typedef</span> <span class=\"hljs-keyword\">struct</span> {\n    <span class=\"hljs-type\">int</span> sunday:<span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-type\">int</span> monday:<span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-comment\">// more days</span>\n    <span class=\"hljs-type\">int</span> friday:<span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-type\">int</span> saturday:<span class=\"hljs-number\">1</span>;\n} weekdays; &lt;&lt; Correct  That syntax says that each variable size is <span class=\"hljs-number\">1</span> bit. <span class=\"hljs-string\">&#x27;bit&#x27;</span> is <span class=\"hljs-keyword\">not</span> a type in C++.\n\n- [ ] B",
      "choices": [
        "A",
        "C",
        "D"
      ],
      "answer": "A"
    },
    {
      "id": 12,
      "title": "Q12. 12. What is an lvalue?",
      "code": null,
      "choices": [
        "It's a constant expression, meaning an expression composed of constants and operations. - \\[x\\] It's an expression that represents an object with an address. - \\[ \\] It's an expression suitable for the left-hand side operand in a binary operation. - \\[ \\] It's a location value, meaning a memory address suitable for assigning to a pointer or reference."
      ],
      "answer": "\\- \\[ \\] It's a constant expression, meaning an expression composed of constants and operations. It's an expression that represents an object with an address. - \\[ \\] It's an expression suitable for the left-hand side operand in a binary operation. - \\[ \\] It's a location value, meaning a memory address suitable for assigning to a pointer or reference."
    },
    {
      "id": 13,
      "title": "Q13. 13. What does auto type specifier do in this line of code (since C++11)?",
      "code": "<span class=\"hljs-keyword\">auto</span> x = <span class=\"hljs-number\">4000.22</span>;",
      "choices": [
        "It specifies that the type of x will be deduced from the initializer - in this case, double. - \\[ \\] It specifies that the type of x is automatic meaning that if can be assigned different types of data throughout the program. - \\[ \\] It specifies that x is a variable with automatic storage duration. - \\[ \\] It specifies that more memory will be allocated for x in case it needs more space, avoiding loss of data due to overflow."
      ],
      "answer": "It specifies that the type of x will be deduced from the initializer - in this case, double. - \\[ \\] It specifies that the type of x is automatic meaning that if can be assigned different types of data throughout the program. - \\[ \\] It specifies that x is a variable with automatic storage duration. - \\[ \\] It specifies that more memory will be allocated for x in case it needs more space, avoiding loss of data due to overflow."
    },
    {
      "id": 14,
      "title": "Q14. 14. What is a class template?",
      "code": null,
      "choices": [
        "It's a class written with the generic programming, specifying behavior in terms of type parameter rather than specific type. - \\[ \\] It's a blank superclass intended for inheritance and polymorphism. - \\[ \\] It's class that only consists of member variable, with no constructor, destructor nor member functions. - \\[ \\] It's skelton source code for a class where the programmer has to fill in specific parts to define the data types and algorithms used."
      ],
      "answer": "It's a class written with the generic programming, specifying behavior in terms of type parameter rather than specific type. - \\[ \\] It's a blank superclass intended for inheritance and polymorphism. - \\[ \\] It's class that only consists of member variable, with no constructor, destructor nor member functions. - \\[ \\] It's skelton source code for a class where the programmer has to fill in specific parts to define the data types and algorithms used."
    },
    {
      "id": 15,
      "title": "Q15. 15. What is the ternary operator equivalent to this code snippet?",
      "code": "<span class=\"hljs-keyword\">if</span>(x)\n    y=a;\n<span class=\"hljs-keyword\">else</span>\n    y=b;",
      "choices": [
        "\\`y=a?b:x;\\` - \\[ \\] \\`y=if(x?a:b);\\` - \\[ \\] \\`y=(x&a)?a:(x&b)?b:0;\\` - \\[x\\] \\`y=x?a:b;\\`"
      ],
      "answer": "\\- \\[ \\] \\`y=a?b:x;\\` - \\[ \\] \\`y=if(x?a:b);\\` - \\[ \\] \\`y=(x&a)?a:(x&b)?b:0;\\` \\`y=x?a:b;\\`"
    },
    {
      "id": 16,
      "title": "Q16. 16. What is the output of this code?",
      "code": "<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">include</span> <span class=\"hljs-string\">&lt;iostream&gt;</span></span>",
      "choices": [
        "\\`x = 10 and y = 20\\` \\`x = 11 and y = 19\\` - \\[ \\] \\`x = 11 and y = 19\\` \\`x = 10 and y = 20\\` - \\[x\\] \\`x = 10 and y = 19\\` \\`x = 11 and y = 20\\` - \\[ \\] \\`x = 11 and y = 20\\` \\`x = 10 and y = 19\\`"
      ],
      "answer": "\\- \\[ \\] \\`x = 10 and y = 20\\` \\`x = 11 and y = 19\\` - \\[ \\] \\`x = 11 and y = 19\\` \\`x = 10 and y = 20\\` \\`x = 10 and y = 19\\` \\`x = 11 and y = 20\\` - \\[ \\] \\`x = 11 and y = 20\\` \\`x = 10 and y = 19\\`"
    },
    {
      "id": 17,
      "title": "Q17. 17. What is the meaning of the two parts specified between parentheses in a range-based for loop, separated by a colon?",
      "code": null,
      "choices": [
        "The first is a variable declaration that will hold an element in a sequence. The second is the sequence to traverse. - \\[ \\] The first is an iterator, and the second is the increment value to be added to the iterator. - \\[ \\] The first is the iterating variable. The second is an \\`std::pair\\` that specifies the range (start and end) in which the variable will iterate. - \\[ \\] The first is a container object. The second is an \\`std::pair\\` that specifies the range (start and end) in which the elements will be accessed within the loop."
      ],
      "answer": "The first is a variable declaration that will hold an element in a sequence. The second is the sequence to traverse. - \\[ \\] The first is an iterator, and the second is the increment value to be added to the iterator. - \\[ \\] The first is the iterating variable. The second is an \\`std::pair\\` that specifies the range (start and end) in which the variable will iterate. - \\[ \\] The first is a container object. The second is an \\`std::pair\\` that specifies the range (start and end) in which the elements will be accessed within the loop."
    },
    {
      "id": 18,
      "title": "Q18. 18. What is the output of this piece of code?",
      "code": "<span class=\"hljs-type\">int8_t</span> a=<span class=\"hljs-number\">200</span>;\n<span class=\"hljs-type\">uint8_t</span> b=<span class=\"hljs-number\">100</span>;\n<span class=\"hljs-keyword\">if</span>(a&gt;b)\n    std::cout&lt;&lt;<span class=\"hljs-string\">&quot;greater&quot;</span>;\n<span class=\"hljs-keyword\">else</span> \n    std::cout&lt;&lt;<span class=\"hljs-string\">&quot;less&quot;</span>;",
      "choices": [
        "There is no output because there is an exception when comparing an int8\\_t with a uint8\\_t. - \\[ \\] greater - \\[x\\] less - \\[ \\] There is no output because there is a compiler error."
      ],
      "answer": "\\- \\[ \\] There is no output because there is an exception when comparing an int8\\_t with a uint8\\_t. - \\[ \\] greater less - \\[ \\] There is no output because there is a compiler error."
    },
    {
      "id": 19,
      "title": "Q19. 19. What results from executing this code snippet?",
      "code": "<span class=\"hljs-type\">int</span> x=<span class=\"hljs-number\">5</span>, y=<span class=\"hljs-number\">2</span>;\n<span class=\"hljs-keyword\">if</span>(x &amp; y) { \n    <span class=\"hljs-comment\">/*_part A_*/</span> \n} \n<span class=\"hljs-keyword\">else</span> { \n    <span class=\"hljs-comment\">/*_part B_*/</span>\n}",
      "choices": [
        "Part A executes because x==5 (true) and y==2 (true), thus the AND operation evaluates as true. - \\[x\\] Part B executes because (x & y) results in 0, or false. - \\[ \\] Part A executes because (x & y) results in a nonzero value, or true. - \\[ \\] Part B executes because the statement (x & y) is invalid, thus false."
      ],
      "answer": "\\- \\[ \\] Part A executes because x==5 (true) and y==2 (true), thus the AND operation evaluates as true. Part B executes because (x & y) results in 0, or false. - \\[ \\] Part A executes because (x & y) results in a nonzero value, or true. - \\[ \\] Part B executes because the statement (x & y) is invalid, thus false."
    },
    {
      "id": 20,
      "title": "Q20. 20. What is a valid definition for the `get_length` function, which returns the length of a null-terminated string?",
      "code": "<span class=\"hljs-function\"><span class=\"hljs-type\">int</span> <span class=\"hljs-title\">get_length</span><span class=\"hljs-params\">(<span class=\"hljs-type\">char</span> *str)</span> </span>{\n    <span class=\"hljs-type\">int</span> count=<span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-keyword\">while</span>(str[count++]);\n    <span class=\"hljs-keyword\">return</span> count<span class=\"hljs-number\">-1</span>;\n}",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A"
    },
    {
      "id": 21,
      "title": "Q21. 21. Which STL class is the best fit for implementing a collection of data that is always ordered so that the pop operation always gets the greatest of the elements? Suppose you are interested only in push and pop operations.",
      "code": null,
      "choices": [
        "\\`std::list\\` - \\[ \\] \\`std::vector\\` - \\[x\\] \\`std::priority\\_queue\\` - \\[ \\] \\`std::map\\`"
      ],
      "answer": "\\- \\[ \\] \\`std::list\\` - \\[ \\] \\`std::vector\\` \\`std::priority\\_queue\\` - \\[ \\] \\`std::map\\`"
    },
    {
      "id": 22,
      "title": "Q22. 22. What is the meaning of the three sections specified between parentheses in a for loop separated by semicolons?",
      "code": null,
      "choices": [
        "The first is the iterating variable name, the second is the number of times to iterate, and the third is the desired increment or decrement (specified with a signed integer). - \\[x\\] The first is the initialization block, the second is the condition to iterate, and the third is the increment block. - \\[ \\] The first is the iterating variable, the second is the container in which it should operate, and the third is an exit condition to abort at any time. - \\[ \\] The first is the iterating variable name, the second is the starting value for the iterating variable, and the third is the stop value (the last value plus one)."
      ],
      "answer": "\\- \\[ \\] The first is the iterating variable name, the second is the number of times to iterate, and the third is the desired increment or decrement (specified with a signed integer). The first is the initialization block, the second is the condition to iterate, and the third is the increment block. - \\[ \\] The first is the iterating variable, the second is the container in which it should operate, and the third is an exit condition to abort at any time. - \\[ \\] The first is the iterating variable name, the second is the starting value for the iterating variable, and the third is the stop value (the last value plus one)."
    },
    {
      "id": 23,
      "title": "Q23. 23. What is printed from this code?",
      "code": "<span class=\"hljs-type\">int</span> i = <span class=\"hljs-number\">0</span>;\n<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;%d&quot;</span>, i++);\n<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;%d&quot;</span>, i--);\n<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;%d&quot;</span>, ++i);\n<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;%d&quot;</span>, --i);",
      "choices": [
        "0,1,1,0 - \\[ \\] 0,1,0,1 - \\[ \\] 0,0,1,0 - \\[ \\] 1,0,1,0"
      ],
      "answer": "0,1,1,0 - \\[ \\] 0,1,0,1 - \\[ \\] 0,0,1,0 - \\[ \\] 1,0,1,0"
    },
    {
      "id": 24,
      "title": "Q24. 24. What is true about the variable named `ptr`?",
      "code": "<span class=\"hljs-type\">void</span> *ptr;",
      "choices": [
        "It is a pointer initialized at NULL. - \\[ \\] It is a pointer to a void function. - \\[ \\] That declaration causes a compiler error, as pointers must specify a type. - \\[x\\] It is a pointer to a value with no specific type, so it may be cast to point to any type."
      ],
      "answer": "\\- \\[ \\] It is a pointer initialized at NULL. - \\[ \\] It is a pointer to a void function. - \\[ \\] That declaration causes a compiler error, as pointers must specify a type. It is a pointer to a value with no specific type, so it may be cast to point to any type."
    },
    {
      "id": 25,
      "title": "Q25. 25. What is the output of this code?",
      "code": "<span class=\"hljs-type\">int</span> c=<span class=\"hljs-number\">3</span>; <span class=\"hljs-type\">char</span> d=<span class=\"hljs-string\">&#x27;A&#x27;</span>;\nstd::<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;c is %d and d is %c&quot;</span>,c,d);",
      "choices": [
        "c is d and d is c - \\[ \\] c is A and d is 3 - \\[x\\] c is 3 and d is A - \\[ \\] c is c and d is d"
      ],
      "answer": "\\- \\[ \\] c is d and d is c - \\[ \\] c is A and d is 3 c is 3 and d is A - \\[ \\] c is c and d is d"
    },
    {
      "id": 26,
      "title": "Q26. 26. What is the output of this code?",
      "code": "<span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;1/2 = %f&quot;</span>,(<span class=\"hljs-type\">float</span>)(<span class=\"hljs-number\">1</span>/<span class=\"hljs-number\">2</span>));",
      "choices": [
        "1/2 = 0.499999 - \\[ \\] 1/2 = 0 - \\[x\\] 1/2 = 0.000000 - \\[ \\] 1/2 = 0.5"
      ],
      "answer": "\\- \\[ \\] 1/2 = 0.499999 - \\[ \\] 1/2 = 0 1/2 = 0.000000 - \\[ \\] 1/2 = 0.5"
    },
    {
      "id": 27,
      "title": "Q27. 27. What is the difference between a public and a private class member?",
      "code": null,
      "choices": [
        "Public members are the same as global variables, so every part of the code has access to them. Private members are the same as automatic variables, so only their class has access to them. - \\[ \\] Public members are made accessible to any running application. Private members are made accessible only to the application where the object is instantiated. - \\[ \\] Public members will be compiled as shared variables in a multithreaded environment. Private members will be compiled as Thread-local variables. - \\[x\\] Public members can be accessed by any function. Private members can be accessed only by the same class's member functions and the friends of the class."
      ],
      "answer": "\\- \\[ \\] Public members are the same as global variables, so every part of the code has access to them. Private members are the same as automatic variables, so only their class has access to them. - \\[ \\] Public members are made accessible to any running application. Private members are made accessible only to the application where the object is instantiated. - \\[ \\] Public members will be compiled as shared variables in a multithreaded environment. Private members will be compiled as Thread-local variables. Public members can be accessed by any function. Private members can be accessed only by the same class's member functions and the friends of the class."
    },
    {
      "id": 28,
      "title": "Q28. 28. What is the value of x after running this code?",
      "code": "<span class=\"hljs-type\">int</span> x=<span class=\"hljs-number\">10</span>, a=<span class=\"hljs-number\">-3</span>;\nx=+a;",
      "choices": [
        "3 - \\[ \\] 7 - \\[x\\] -3 - \\[ \\] 13"
      ],
      "answer": "\\- \\[ \\] 3 - \\[ \\] 7 -3 - \\[ \\] 13"
    },
    {
      "id": 29,
      "title": "Q29. 29. Which statement is true?",
      "code": null,
      "choices": [
        "Only classes can have member variables and methods. - \\[x\\] C++ supports multiple inheritance. - \\[ \\] C++ supports only single inheritance. - \\[ \\] Only structs can inherit."
      ],
      "answer": "\\- \\[ \\] Only classes can have member variables and methods. C++ supports multiple inheritance. - \\[ \\] C++ supports only single inheritance. - \\[ \\] Only structs can inherit."
    },
    {
      "id": 30,
      "title": "Q30. 30. Consider a pointer to void, named `ptr`, which has been set to point to a floating point variable `g`. Which choice is a valid way to dereference `ptr` to assign its pointed value to a float variable `f` later in the program?",
      "code": "<span class=\"hljs-type\">float</span> g;\n<span class=\"hljs-type\">void</span> *ptr=&amp;g;",
      "choices": [
        "\\`float f=\\*(float)ptr;\\` - \\[ \\] \\`float f=(float \\*)ptr;\\` - \\[ \\] \\`float f=(float)\\*ptr;\\` - \\[x\\] \\`float f=\\*(float \\*)ptr;\\`"
      ],
      "answer": "\\- \\[ \\] \\`float f=\\*(float)ptr;\\` - \\[ \\] \\`float f=(float \\*)ptr;\\` - \\[ \\] \\`float f=(float)\\*ptr;\\` \\`float f=\\*(float \\*)ptr;\\`"
    },
    {
      "id": 31,
      "title": "Q31. 31. What is the `.*` operator and what does it do?",
      "code": null,
      "choices": [
        "It is the same as the class member access operator, or arrow operator \\`(->)\\`, which allows you to access a member of an object through a pointer to the object. - \\[x\\] It is the pointer to member operator, and it allows you to access a member of an object through a pointer to that specific class member. - \\[ \\] It is the member access with address of operator, which returns the address of a class or struct member. - \\[ \\] It is a combination of the member access operator \\`(.)\\` and the dereference operator \\`(\\*)\\`, so it allows you to access the object that a member pointer points to."
      ],
      "answer": "\\- \\[ \\] It is the same as the class member access operator, or arrow operator \\`(->)\\`, which allows you to access a member of an object through a pointer to the object. It is the pointer to member operator, and it allows you to access a member of an object through a pointer to that specific class member. - \\[ \\] It is the member access with address of operator, which returns the address of a class or struct member. - \\[ \\] It is a combination of the member access operator \\`(.)\\` and the dereference operator \\`(\\*)\\`, so it allows you to access the object that a member pointer points to."
    },
    {
      "id": 32,
      "title": "Q32. 32. For these declarations, which choice shows four equivalent ways to assign the character \"y\" in the string to a char variable c?",
      "code": "<span class=\"hljs-type\">char</span> buff[<span class=\"hljs-number\">50</span>] = <span class=\"hljs-string\">&quot;strings as arrays of characters are fun!&quot;</span>\n<span class=\"hljs-type\">char</span> *str = buff<span class=\"hljs-number\">+11</span>;\n<span class=\"hljs-type\">char</span> c;",
      "choices": [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "C"
    },
    {
      "id": 33,
      "title": "Q33. 34. What is the output of this code?",
      "code": "<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">include</span> <span class=\"hljs-string\">&lt;cstdio&gt;</span></span>\n<span class=\"hljs-keyword\">using</span> <span class=\"hljs-keyword\">namespace</span> std;",
      "choices": [
        "c = -1, which is less than 10 - \\[ \\] c = 255, which is greater than 10 - \\[ \\] c = -1, which is greater than 10 - \\[ \\] c = 255, which is less than 10"
      ],
      "answer": "c = -1, which is less than 10 - \\[ \\] c = 255, which is greater than 10 - \\[ \\] c = -1, which is greater than 10 - \\[ \\] c = 255, which is less than 10"
    },
    {
      "id": 34,
      "title": "Q34. 35. How can C++ code call a C function?",
      "code": null,
      "choices": [
        "by simply calling the C code - \\[ \\] there is no way for C++ to call a C function - \\[x\\] by using extern \"C\" - \\[ \\] by importing the source C code"
      ],
      "answer": "\\- \\[ \\] by simply calling the C code - \\[ \\] there is no way for C++ to call a C function by using extern \"C\" - \\[ \\] by importing the source C code"
    },
    {
      "id": 35,
      "title": "Q35. 36. Which choice is _not_ a valid type definition of a structure that contains x and y coordinates as integers, and that can be used exactly as shown for the variable named `center`?",
      "code": "<span class=\"hljs-keyword\">typedef</span> <span class=\"hljs-keyword\">struct</span> <span class=\"hljs-title class_\">coord</span> {\n    <span class=\"hljs-type\">int</span> x;\n    <span class=\"hljs-type\">int</span> y;\n};",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A"
    },
    {
      "id": 36,
      "title": "Q36. 37. Which choice does _not_ produce the same output as this code snippet? Assume the variable `i` will not be used anywhere else in the code.",
      "code": "<span class=\"hljs-keyword\">for</span> (i=<span class=\"hljs-number\">1</span>;i&lt;<span class=\"hljs-number\">10</span>;i++){\n    cout&lt;&lt;i&lt;&lt;endl;\n}",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A"
    },
    {
      "id": 37,
      "title": "Q37. 38. What does this part of a main.cpp file do?",
      "code": "<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">include</span> <span class=\"hljs-string\">&quot;library.h&quot;</span></span>",
      "choices": [
        "It causes the toolchain to compile all the contents of library.h so that its executable code is available when needed by the final application. - \\[ \\] It cherry picks library.h for the declarations and definitions of all data and functions used in the remainder of the source file main.cpp, finally replacing the \\`#include\\` directive by those declarations and definitions. - \\[ \\] It informs the linker that some functions or data used in the source file main.cpp are contained in library.h, so that they can be called in run time. This is also known as dynamic linking. - \\[x\\] It causes the replacement of the \\`#include\\` directive by the entire contents of the source file library.h. This is similar to a Copy-Paste operation of library.h into main.cpp."
      ],
      "answer": "\\- \\[ \\] It causes the toolchain to compile all the contents of library.h so that its executable code is available when needed by the final application. - \\[ \\] It cherry picks library.h for the declarations and definitions of all data and functions used in the remainder of the source file main.cpp, finally replacing the \\`#include\\` directive by those declarations and definitions. - \\[ \\] It informs the linker that some functions or data used in the source file main.cpp are contained in library.h, so that they can be called in run time. This is also known as dynamic linking. It causes the replacement of the \\`#include\\` directive by the entire contents of the source file library.h. This is similar to a Copy-Paste operation of library.h into main.cpp."
    },
    {
      "id": 38,
      "title": "Q38. 39. Consider this function declaration of `is_even`, which takes in an integer and returns true if the argument is an even number and false otherwise. Which declarations are correct for overloaded versions of that function to support floating point numbers and string representations of numbers?",
      "code": "<span class=\"hljs-function\"><span class=\"hljs-type\">bool</span> <span class=\"hljs-title\">is_even</span><span class=\"hljs-params\">(<span class=\"hljs-type\">int</span>)</span></span>;",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A"
    },
    {
      "id": 39,
      "title": "Q39. 40. Which choice is an include guard for the header file `my_library.h`?",
      "code": "<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">ifdef</span> MY_LIBRARY_H</span>\n<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">define</span> MY_LIBRARY_H</span>",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "B"
    },
    {
      "id": 40,
      "title": "Q40. 41. What's wrong with this definition when using a pre-C++11 compiler?",
      "code": "std::vector&lt;std::vector&lt;<span class=\"hljs-type\">int</span>&gt;&gt; thematrix;",
      "choices": [
        "There's nothing wrong with it. - \\[ \\] An \\`std::vector\\` cannot contain more \\`std::vector\\` containers as its elements. - \\[ \\] The correct syntax should be: \\`std::vector\\[std::vector\\[int\\]\\] thematrix;\\` - \\[x\\] \\`>>\\` is parsed as the shift-right operator, and thus results in a compile error."
      ],
      "answer": "\\- \\[ \\] There's nothing wrong with it. - \\[ \\] An \\`std::vector\\` cannot contain more \\`std::vector\\` containers as its elements. - \\[ \\] The correct syntax should be: \\`std::vector\\[std::vector\\[int\\]\\] thematrix;\\` \\`>>\\` is parsed as the shift-right operator, and thus results in a compile error."
    },
    {
      "id": 41,
      "title": "Q41. 42. What is the statement below equivalent to?",
      "code": "sprite-&gt;x",
      "choices": [
        "\\`sprite.x\\` - \\[ \\] \\`sprite.\\*x\\` - \\[x\\] \\`(\\*sprite).x\\` - \\[ \\] \\`\\*sprite.x\\`"
      ],
      "answer": "\\- \\[ \\] \\`sprite.x\\` - \\[ \\] \\`sprite.\\*x\\` \\`(\\*sprite).x\\` - \\[ \\] \\`\\*sprite.x\\`"
    },
    {
      "id": 42,
      "title": "Q42. 43. Consider a class named `complexNumber`. Which code will result in an equivalent object?",
      "code": "<span class=\"hljs-built_in\">complexNumber</span>(<span class=\"hljs-type\">float</span> real, <span class=\"hljs-type\">float</span> im)\n: <span class=\"hljs-built_in\">real_part</span>(real),\n <span class=\"hljs-built_in\">im_part</span>(im){}",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "C"
    },
    {
      "id": 43,
      "title": "Q43. 44. What is the result from executing this code snippet?",
      "code": "<span class=\"hljs-type\">bool</span> x=<span class=\"hljs-literal\">true</span>, y=<span class=\"hljs-literal\">false</span>;\n<span class=\"hljs-keyword\">if</span>(~x || y){\n    <span class=\"hljs-comment\">/*part A*/</span>\n}\n<span class=\"hljs-keyword\">else</span>{\n    <span class=\"hljs-comment\">/*part B*/</span>\n}",
      "choices": [
        "Part A executes because the expression \\`(~x || y)\\` always results in true if \\`y==false\\`. - \\[ \\] Part B executes because the statement \\`(~x || y)\\` is invalid, thus false. - \\[ \\] Part A executes because \\`~x\\` is not zero, meaning true. - \\[x\\] Part B executes because \\`~x\\` is false and \\`y\\` is false, thus the \\`OR\\` operation evaluates as false."
      ],
      "answer": "\\- \\[ \\] Part A executes because the expression \\`(~x || y)\\` always results in true if \\`y==false\\`. - \\[ \\] Part B executes because the statement \\`(~x || y)\\` is invalid, thus false. - \\[ \\] Part A executes because \\`~x\\` is not zero, meaning true. Part B executes because \\`~x\\` is false and \\`y\\` is false, thus the \\`OR\\` operation evaluates as false."
    },
    {
      "id": 44,
      "title": "Q44. 45. What would be the output of this code?",
      "code": "<span class=\"hljs-type\">int32_t</span> nums[<span class=\"hljs-number\">3</span>]={<span class=\"hljs-number\">2</span>,<span class=\"hljs-number\">4</span>,<span class=\"hljs-number\">3</span>};\nstd::cout &lt;&lt; ( nums[<span class=\"hljs-number\">0</span>] &lt;&lt; nums[<span class=\"hljs-number\">1</span>] &lt;&lt; nums[<span class=\"hljs-number\">2</span>] );",
      "choices": [
        "The output is the addresses of \\`nums\\[0\\]\\`, \\`nums\\[1\\]\\`, and \\`nums\\[2\\]\\`, in that order, with no spaces. - \\[x\\] \\`256\\` - \\[ \\] \\`0\\` - \\[ \\] \\`243\\`"
      ],
      "answer": "\\- \\[ \\] The output is the addresses of \\`nums\\[0\\]\\`, \\`nums\\[1\\]\\`, and \\`nums\\[2\\]\\`, in that order, with no spaces. \\`256\\` - \\[ \\] \\`0\\` - \\[ \\] \\`243\\`"
    },
    {
      "id": 45,
      "title": "Q45. 46. What is the output of this code?",
      "code": "<span class=\"hljs-type\">float</span> values[<span class=\"hljs-number\">5</span>]={<span class=\"hljs-number\">0.54f</span>, <span class=\"hljs-number\">2.71828f</span>, <span class=\"hljs-number\">3.14159f</span>, <span class=\"hljs-number\">5.499999f</span>, <span class=\"hljs-number\">10.0f</span>};\n<span class=\"hljs-keyword\">for</span>(<span class=\"hljs-keyword\">auto</span> f:values)\n    <span class=\"hljs-built_in\">printf</span>(<span class=\"hljs-string\">&quot;%i &quot;</span>,(<span class=\"hljs-type\">int</span>)(f<span class=\"hljs-number\">+0.5f</span>));",
      "choices": [
        "\\`0.54 2.71828 3.14159 5.499999 10.0\\` - \\[ \\] \\`1 3 4 6 11\\` - \\[ \\] \\`0 2 3 5 10\\` - \\[x\\] \\`1 3 3 5 10\\`"
      ],
      "answer": "\\- \\[ \\] \\`0.54 2.71828 3.14159 5.499999 10.0\\` - \\[ \\] \\`1 3 4 6 11\\` - \\[ \\] \\`0 2 3 5 10\\` \\`1 3 3 5 10\\`"
    },
    {
      "id": 46,
      "title": "Q46. 47. Which of the following STL classes is the best fit for implementing a phonebook? Suppose each entry contains a name and a phone number, with no duplicates, and you want to have lookup by name.",
      "code": null,
      "choices": [
        "\\`std::priority\\_queue\\` - \\[ \\] \\`std::list\\` - \\[ \\] \\`std::vector\\` - \\[x\\] \\`std::map\\`"
      ],
      "answer": "\\- \\[ \\] \\`std::priority\\_queue\\` - \\[ \\] \\`std::list\\` - \\[ \\] \\`std::vector\\` \\`std::map\\`"
    },
    {
      "id": 47,
      "title": "Q47. 48. What does this program do?",
      "code": "<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">include</span> <span class=\"hljs-string\">&lt;iostream&gt;</span></span>\n<span class=\"hljs-meta\">#<span class=\"hljs-keyword\">include</span> <span class=\"hljs-string\">&lt;fstream&gt;</span></span>\n<span class=\"hljs-keyword\">using</span> <span class=\"hljs-keyword\">namespace</span> std;",
      "choices": [
        "It renames text1.txt to text2.txt. - \\[ \\] It makes a directory called text2.txt and moves text1.txt there. - \\[x\\] It copies the contents of text1.txt into text2.txt - i.e., it makes a copy of text1.txt, named text2.txt. - \\[ \\] It appends the contents of text1.txt into text2.txt - i.e., replaces the contents of text2.txt by the concatenation of text2.txt and text1.txt."
      ],
      "answer": "\\- \\[ \\] It renames text1.txt to text2.txt. - \\[ \\] It makes a directory called text2.txt and moves text1.txt there. It copies the contents of text1.txt into text2.txt - i.e., it makes a copy of text1.txt, named text2.txt. - \\[ \\] It appends the contents of text1.txt into text2.txt - i.e., replaces the contents of text2.txt by the concatenation of text2.txt and text1.txt."
    },
    {
      "id": 48,
      "title": "Q48. 49. Which of the following is *not* a consequence of declaring the member variable count of my_class as static?",
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">my_class</span> {\n    <span class=\"hljs-keyword\">public</span>: <span class=\"hljs-type\">static</span> <span class=\"hljs-type\">int</span> count;\n}",
      "choices": [
        "The variable cannot be modified by any part of the code in the same application or thread. However, other threads may modify it. - \\[ \\] The variable exists even when no objects of the class have been defined so it can be modified at any point in the source code. - \\[ \\] The variable is allocated only once, regardless of how many objects are instantiated because it is bound to the class itself, not its instances. - \\[ \\] All objects that try to access their count member variable actually refer to the only class-bound static count variable."
      ],
      "answer": "The variable cannot be modified by any part of the code in the same application or thread. However, other threads may modify it. - \\[ \\] The variable exists even when no objects of the class have been defined so it can be modified at any point in the source code. - \\[ \\] The variable is allocated only once, regardless of how many objects are instantiated because it is bound to the class itself, not its instances. - \\[ \\] All objects that try to access their count member variable actually refer to the only class-bound static count variable."
    },
    {
      "id": 49,
      "title": "Q49. 50. What is the assumed type of a constant represented in the source code as `0.44`?",
      "code": null,
      "choices": [
        "double - \\[ \\] long float - \\[ \\] long double - \\[ \\] float"
      ],
      "answer": "double - \\[ \\] long float - \\[ \\] long double - \\[ \\] float"
    },
    {
      "id": 50,
      "title": "Q50. 51. What is the output of this piece of code?",
      "code": "<span class=\"hljs-type\">int8_t</span> a=<span class=\"hljs-number\">200</span>;\n<span class=\"hljs-type\">uint8_t</span> b=<span class=\"hljs-number\">100</span>;\nstd::cout&lt;&lt;<span class=\"hljs-string\">&quot;a=&quot;</span>&lt;&lt;(<span class=\"hljs-type\">int</span>)a;\nstd::cout&lt;&lt;<span class=\"hljs-string\">&quot;, b=&quot;</span>&lt;&lt;(<span class=\"hljs-type\">int</span>)b;",
      "choices": [
        "a=-56, b=100 - \\[ \\] a=-55, b=100 - \\[ \\] a=200, b=-156 - \\[ \\] a=200, b=100"
      ],
      "answer": "a=-56, b=100 - \\[ \\] a=-55, b=100 - \\[ \\] a=200, b=-156 - \\[ \\] a=200, b=100"
    },
    {
      "id": 51,
      "title": "Q51. 52. What is an appropriate way of removing `my_object` as shown below?",
      "code": "my_class *my_object = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">my_class</span>();",
      "choices": [
        "\\`delete(my\\_object);\\` - \\[ \\] \\`free(my\\_object);\\` - \\[ \\] The garbage collector will destroy the object eventually. - \\[ \\] Exiting the scope will destroy the object."
      ],
      "answer": "\\`delete(my\\_object);\\` - \\[ \\] \\`free(my\\_object);\\` - \\[ \\] The garbage collector will destroy the object eventually. - \\[ \\] Exiting the scope will destroy the object."
    },
    {
      "id": 52,
      "title": "Q52. 53. What is the correct way to call the `count` member function for the object pointer called `grades`?",
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">my_array</span>{\n    <span class=\"hljs-keyword\">public</span>:\n        <span class=\"hljs-function\"><span class=\"hljs-type\">int</span> <span class=\"hljs-title\">count</span><span class=\"hljs-params\">()</span></span>;\n};  <span class=\"hljs-comment\">// ... more members above</span>",
      "choices": [
        "\\`grades.count();\\` - \\[ \\] \\`my\\_array->count();\\` - \\[x\\] \\`grades->count();\\` - \\[ \\] \\`my\\_array.count();\\`"
      ],
      "answer": "\\- \\[ \\] \\`grades.count();\\` - \\[ \\] \\`my\\_array->count();\\` \\`grades->count();\\` - \\[ \\] \\`my\\_array.count();\\`"
    },
    {
      "id": 53,
      "title": "Q53. 54. What would be the output of this code?",
      "code": "<span class=\"hljs-type\">int</span> i0=<span class=\"hljs-number\">4</span>, i1=<span class=\"hljs-number\">6</span>, i2=<span class=\"hljs-number\">8</span>;\n<span class=\"hljs-type\">int</span>&amp; nums[<span class=\"hljs-number\">3</span>]={i2,i0,i1};\nstd::cout&lt;&lt;nums[<span class=\"hljs-number\">0</span>]&lt;&lt;nums[<span class=\"hljs-number\">1</span>]&lt;&lt;nums[<span class=\"hljs-number\">2</span>];",
      "choices": [
        "There is no output. The code causes a compiler error because \\`nums\\` is an array of references, which is illegal. - \\[ \\] 846 - \\[ \\] The output is the addresses of \\`i2\\`, \\`i0\\`, and \\`i1\\`, in that order, with no spaces. - \\[ \\] 468"
      ],
      "answer": "There is no output. The code causes a compiler error because \\`nums\\` is an array of references, which is illegal. - \\[ \\] 846 - \\[ \\] The output is the addresses of \\`i2\\`, \\`i0\\`, and \\`i1\\`, in that order, with no spaces. - \\[ \\] 468"
    },
    {
      "id": 54,
      "title": "Q54. 55. What is `child_t` in this code?",
      "code": "<span class=\"hljs-keyword\">typedef</span> <span class=\"hljs-keyword\">struct</span>{\n    <span class=\"hljs-type\">unsigned</span> <span class=\"hljs-type\">int</span>  age    : <span class=\"hljs-number\">4</span>;\n    <span class=\"hljs-type\">unsigned</span> <span class=\"hljs-type\">char</span> gender : <span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-type\">unsigned</span> <span class=\"hljs-type\">int</span>  size   : <span class=\"hljs-number\">2</span>;\n}<span class=\"hljs-type\">child_t</span>;",
      "choices": [
        "It is a type defined as a structure with three unsigned fields initialized as age=4, gender=1, and size=2. - \\[x\\] It is a type defined as a structure with bit fields, with 4 bits for age, 1 bit for gender, and 2 bits for size. - \\[ \\] This code causes a compiler error because the colon character is not allowed in struct definitions. - \\[ \\] It is a type defined as a structure with three arrays. The size and length of these arrays are age:int\\[4\\], gender:char\\[1\\], and size:int\\[2\\], all signed."
      ],
      "answer": "\\- \\[ \\] It is a type defined as a structure with three unsigned fields initialized as age=4, gender=1, and size=2. It is a type defined as a structure with bit fields, with 4 bits for age, 1 bit for gender, and 2 bits for size. - \\[ \\] This code causes a compiler error because the colon character is not allowed in struct definitions. - \\[ \\] It is a type defined as a structure with three arrays. The size and length of these arrays are age:int\\[4\\], gender:char\\[1\\], and size:int\\[2\\], all signed."
    },
    {
      "id": 55,
      "title": "Q55. 56. What is this expression equivalent to?",
      "code": "A-&gt;B-&gt;C-&gt;D",
      "choices": [
        "\\`A.B.C.D\\` - \\[ \\] \\`\\*A.\\*B.\\*C.\\*D\\` - \\[ \\] \\`&A.&B.&C.&D\\` - \\[x\\] \\`\\*(\\*((\\*A).B).C).D\\`"
      ],
      "answer": "\\- \\[ \\] \\`A.B.C.D\\` - \\[ \\] \\`\\*A.\\*B.\\*C.\\*D\\` - \\[ \\] \\`&A.&B.&C.&D\\` \\`\\*(\\*((\\*A).B).C).D\\`"
    },
    {
      "id": 56,
      "title": "Q56. 57. What does this function do?",
      "code": "<span class=\"hljs-keyword\">auto</span> buff = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">char</span>[<span class=\"hljs-number\">50</span>];\nstd::<span class=\"hljs-built_in\">memset</span>(buff,<span class=\"hljs-number\">20</span>,<span class=\"hljs-number\">50</span>);\n\n- [ ] It declares a memory buffer named buff that starts at address <span class=\"hljs-number\">20</span> <span class=\"hljs-keyword\">and</span> ends at address <span class=\"hljs-number\">70.</span>\n- [ ] It sets all bits in the array named buffer from its element at index <span class=\"hljs-number\">20</span> to its element at index <span class=\"hljs-number\">50.</span>\n- [x] It writes the value <span class=\"hljs-number\">20</span> in every memory address from buff to buff<span class=\"hljs-number\">+49.</span>\n- [ ] It declares a memory buffer named buff that starts at address <span class=\"hljs-number\">20</span> <span class=\"hljs-keyword\">and</span> ends at address <span class=\"hljs-number\">50.</span>",
      "choices": [],
      "answer": ""
    },
    {
      "id": 57,
      "title": "Q57. 58. Consider a class named `CustomData`. Which choice is a correct declaration syntax to overload the postfix `++` operator as a class member?",
      "code": null,
      "choices": [
        "\\`CustomData& operator++();\\` - \\[ \\] \\`void operator++(CustomData);\\` - \\[ \\] \\`CustomData operator++(CustomData);\\` - \\[x\\] \\`CustomData operator++(int);\\`"
      ],
      "answer": "\\- \\[ \\] \\`CustomData& operator++();\\` - \\[ \\] \\`void operator++(CustomData);\\` - \\[ \\] \\`CustomData operator++(CustomData);\\` \\`CustomData operator++(int);\\`"
    },
    {
      "id": 58,
      "title": "Q58. 59. Which choice is not a valid type definition of a structure that contains x and y coordinates as integers, and that can be used exactly as shown for the variable named center?",
      "code": "coord center;\ncenter.x = <span class=\"hljs-number\">9</span>;\ncenter.y = <span class=\"hljs-number\">3</span>;",
      "choices": [
        "A \\`\\`\\`cpp struct coord{ int x; int y; }; typedef struct coord coord; \\`\\`\\` - \\[ \\] B \\`\\`\\`cpp typedef struct coord{ int x; int y; } coord; \\`\\`\\` - \\[x\\] C \\`\\`\\`cpp typedef struct coord{ int x; int y; }; \\`\\`\\` - \\[ \\] D \\`\\`\\`cpp typedef struct{ int x; int y; } coord; \\`\\`\\` \\[Reference\\](https://stackoverflow.com/questions/18806392/typedef-struct-declarations/18806720)"
      ],
      "answer": "\\- \\[ \\] A \\`\\`\\`cpp struct coord{ int x; int y; }; typedef struct coord coord; \\`\\`\\` - \\[ \\] B \\`\\`\\`cpp typedef struct coord{ int x; int y; } coord; \\`\\`\\` C \\`\\`\\`cpp typedef struct coord{ int x; int y; }; \\`\\`\\` - \\[ \\] D \\`\\`\\`cpp typedef struct{ int x; int y; } coord; \\`\\`\\` \\[Reference\\](https://stackoverflow.com/questions/18806392/typedef-struct-declarations/18806720)"
    },
    {
      "id": 59,
      "title": "Q59. 60. You want to sort my_array, declared below. Which choice is the correct call to std::sort, using a lambda expression as the comparison function?",
      "code": "std::array&lt;<span class=\"hljs-type\">uint32_t</span>, 50&gt; my_array;",
      "choices": [
        "A \\`\\`\\`cpp std::sort(my\\_array.begin(), my\\_array.end(), \\[\\](uint32\\_t a, uint32\\_t b) { return a < b; }) \\`\\`\\` - \\[ \\] B \\`\\`\\`cpp lambda(uint32\\_t a, uint32\\_t b){ return a < b; } std::sort(my\\_array.begin(), my\\_array.end(), lambda); \\`\\`\\` - \\[ \\] C \\`\\`\\`cpp std::sort(my\\_array.begin(), my\\_array.end(), lambda(uint32\\_t a, uint32\\_t b){ return a < b; }) \\`\\`\\` - \\[ \\] D \\`\\`\\`cpp lambda(uint32\\_t a, uint32\\_t b){ return a < b; } std::sort(my\\_array.begin(), my\\_array.end(), &lambda); \\`\\`\\` \\[Reference\\](https://docs.microsoft.com/en-us/cpp/cpp/lambda-expressions-in-cpp?view=msvc-160)"
      ],
      "answer": "A \\`\\`\\`cpp std::sort(my\\_array.begin(), my\\_array.end(), \\[\\](uint32\\_t a, uint32\\_t b) { return a < b; }) \\`\\`\\` - \\[ \\] B \\`\\`\\`cpp lambda(uint32\\_t a, uint32\\_t b){ return a < b; } std::sort(my\\_array.begin(), my\\_array.end(), lambda); \\`\\`\\` - \\[ \\] C \\`\\`\\`cpp std::sort(my\\_array.begin(), my\\_array.end(), lambda(uint32\\_t a, uint32\\_t b){ return a < b; }) \\`\\`\\` - \\[ \\] D \\`\\`\\`cpp lambda(uint32\\_t a, uint32\\_t b){ return a < b; } std::sort(my\\_array.begin(), my\\_array.end(), &lambda); \\`\\`\\` \\[Reference\\](https://docs.microsoft.com/en-us/cpp/cpp/lambda-expressions-in-cpp?view=msvc-160)"
    },
    {
      "id": 60,
      "title": "Q60. 61. Which choice is the most reasonable implementation of the function std::mutex::lock() by using std::mutex::try_lock()?",
      "code": null,
      "choices": [
        "\\- \\[X\\] A \\`\\`\\`cpp void std::mutex::lock(){ while(!this->try\\_lock()); } \\`\\`\\` B \\`\\`\\`cpp void std::mutex::lock(){ return (this->try\\_lock()); } \\`\\`\\` - \\[ \\] C \\`\\`\\`cpp void std::mutex::lock(){ while(1) this->try\\_lock(); } \\`\\`\\` - \\[ \\] D \\`\\`\\`cpp void std::mutex::lock(){ while(this->try\\_lock()); } \\`\\`\\`"
      ],
      "answer": ""
    },
    {
      "id": 61,
      "title": "Q61. 62. What is the purpose of a destructor?",
      "code": null,
      "choices": [
        "\\- \\[X\\] It allows the programmer to write the necessary code to free the resources acquired by the object prior to deleting the object itself. It deletes an object. One example of a destructor is the \\`delete()\\` function. - \\[ \\] It terminates a program. This may be achieved as a regular function call or as an exception. - \\[ \\] There are no destructors in C++."
      ],
      "answer": ""
    },
    {
      "id": 62,
      "title": "Q62. .63 What is the output of this code?",
      "code": null,
      "choices": [
        "1/2 = 0.499999 - \\[ \\] 1/2 = 0 - \\[ \\] 1/2 = 0.000000 << correct - \\[ \\] 1/2 = 0.5 ### Q.64 What is the difference between a public and a private class member?",
        "Public members are the same as global variables, so every part of the code has access to them. Private members are the same as automatic variables, so only their class has access to them. - \\[ \\] Public members are made accessible to any running application. Private members are made accessible only to the application where the object is instantiated. - \\[ \\] Public members will be compiled as shared variables in a multithreaded environment. Private members will be compiled as Thread-local variables. - \\[ \\] Public members can be accessed by any function. Private members can be accessed only by the same class's member functions and the friends of the class.",
        "3 - \\[ \\] 7 - \\[ \\] -3 - \\[ \\] 13",
        "float f=\\*(float)ptr; - \\[ \\] float f=(float \\*)ptr; - \\[ \\] float f=(float)\\*ptr; - \\[ \\] float f=\\*(float \\*)ptr;",
        "It is the same as the class member access operator, or arrow operator (->), which allows you to access a member of an object through a pointer to the object. - \\[ \\] It is the pointer to member operator, and it allows you to access a member of an object through a pointer to that specific class member. - \\[ \\] It is the member access with address of operator, which returns the address of a class or struct member. - \\[ \\] It is a combination of the member access operator (.) and the dereference operator (\\*), so it allows you to access the object that a member pointer points to",
        "\\- \\[ \\] \\`\\`\\` c = buff\\[16\\]; C = str\\[5\\]; C = \\* (buff+16); c = \\* (str+5); \\`\\`\\` \\`\\`\\` C = \\*(buff\\[15\\]); C = \\* (str\\[4\\]); c = buff+15; C-str+4; \\`\\`\\` - \\[ \\] \\`\\`\\` c = buff\\[15\\]; C = str\\[4\\]; c = (buff+15); C = \\*(str+4); \\`\\`\\`"
      ],
      "answer": ""
    },
    {
      "id": 63,
      "title": "Q63. .70 What is the output of this code? \n```c++\nprintf(\"1/2 = %f\",(float)(1/2)); \n```",
      "code": null,
      "choices": [
        "1/2 = 0.499999 - \\[ \\] 1/2 = 0 - \\[x\\] 1/2 = 0.000000 - \\[ \\] 1/2 = 0.5"
      ],
      "answer": "\\- \\[ \\] 1/2 = 0.499999 - \\[ \\] 1/2 = 0 1/2 = 0.000000 - \\[ \\] 1/2 = 0.5"
    },
    {
      "id": 64,
      "title": "Q64. .71 Which choice is *not* related to declaring the member variable count as static in my_class?",
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">my_class</span>{\n    <span class=\"hljs-keyword\">public</span>: <span class=\"hljs-type\">static</span> <span class=\"hljs-type\">int</span> count;\n}",
      "choices": [
        "All objects that try to access their count member variable actually refer to the only class-bound static count variable. - \\[ \\] The variable exists even when no objects of the class have been defined, so it can be modified at any point in the source code. - \\[ \\] The variable cannot be modified by any part of the code in the same application or thread. However, other threads may modify it. - \\[ \\] The variable is allocated only once, regardless of how many objects are instantiated, because it is bound to the class itself, not its instances."
      ],
      "answer": ""
    }
  ]

let cppq1 = cpp[Math.floor(Math.random())* cpp.length+9];
// console.log(cppq1);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "getRandomQuestion") {
		const randomQuestion = cppq1;

		sendResponse([randomQuestion]);
		console.log("Sending response for question:", randomQuestion);
	}
});
