console.log("Hello World");



let cpp = [
	{
		id: 1,
		question: "Q1. What is the output of this code?",
		choices: ["A: False", "B: 0", "C: 1", "D: This code has an error."],
		answer: "1",
	},
	{
		id: 2,
		question:
			"Q2. Which of the following is a reason why using this line is considered a bad practice? (Alternative: Why is using this line considered a bad practice?)",
		choices: [
			"A: The compiled code is always bigger because of all of the imported symbols.",
			"B: If the code uses a function defined in two different libraries with the same prototype but possibly with different implementations, there will be a compilation error due to ambiguity.",
			"C: It automatically includes all header files in the standard library (cstdint, cstdlib, cstdio, iostream, etc).",
			"D: It causes the compiler to enforce the exclusive inclusion of header files belonging to the standard library, generating a compilation error when a different header file is included.",
		],
		answer: "If the code uses a function defined in two different libraries with the same prototype but possibly with different implementations, there will be a compilation error due to ambiguity.",
	},
	{
		id: 3,
		question:
			"Q3. What is the smallest size a variable of the type child_t may occupy in memory?",
		choices: ["A: 7 bits.", "B: 25 bytes.", "C: 1 bit.", "D: 1 byte."],
		answer: "1 byte.",
	},
	{
		id: 4,
		question:
			"Q4. What are the vectors v1 and v2 after executing the code?",
		choices: [
			"A: Error",
			"B: v1:{1,2,3,4}; v2:{5};",
			"C: v1:{1,2,3,4,5}; v2:{1,2,3,4,5};",
			"D: v1:{1,2,3,4}; v2:{1,2,3,5};",
		],
		answer: "v1:{1,2,3,4}; v2:{1,2,3,5};",
	},
	{
		id: 5,
		question:
			"Q5. Which of the following is a true statement about the difference between pointers and iterators?",
		choices: [
			"A: While pointers are variables that hold memory addresses, iterators are generic functions used to traverse containers. This function allows the programmer to implement read and write code as the container is traversed.",
			"B: Incrementing an iterator always means accessing the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element.",
			"C: Pointers are variables that hold memory address whereas iterator is unsigned integers that refer to offsets in arrays.",
			"D: All iterators are implemented with pointers so all iterators are pointers but not all pointers are iterators.",
		],
		answer: "Incrementing an iterator always means accessing the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element.",
	},
	{
		id: 6,
		question: "Q6. What's the storage occupied by u1?",
		choices: ["A: 4 bytes", "B: 7 bytes", "C: 8 bytes", "D: 2 bytes"],
		answer: "4 bytes",
	},
	{
		id: 7,
		question: "Q7. Which of the following operator can be overloaded?",
		choices: ["A: ?:", "B: new", "C: ::", "D: ."],
		answer: "new",
	},
	{
		id: 8,
		question:
			"Q8. Which of the following shows the contents of the vector pointed by v1 and v2 after running this code?",
		choices: [
			"A: *v1:{1,2,3,4}; *v2:{5};",
			"B: *v1:{1,2,3,4,5}; *v2:{1,2,3,4,5};",
			"C: Error",
			"D: *v1:{1,2,3,4}; *v2:{1,2,3,5};",
		],
		answer: "*v1:{1,2,3,4,5}; *v2:{1,2,3,4,5};",
	},
	{
		id: 9,
		question:
			"Q9. Which of the following is not a difference between a class and a struct?",
		choices: [
			"A: Because structs are part of the C programming language, there is some complexity between C and C++ structs. This is not the case with classes.",
			"B: Classes may have member functions; structs are private.",
			"C: The default access specifier for members of a struct is public, whereas, for members of the class, it is private.",
			"D: Template type parameters can be declared with classes, but not with the struct keyword.",
		],
		answer: "Template type parameters can be declared with classes, but not with the struct keyword.",
	},
	{
		id: 10,
		question:
			"Q10. Suppose you need to keep a data struct with permission to access some resource based on the days of the week, but you can't use a bool variable for each day. You need to use one bit per day of the week. Which of the following is a correct implementation of a structure with bit fields for this application?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 11,
		question: "Q11. What is an lvalue?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 12,
		question:
			"Q12. What does auto type specifier do in this line of code (since C++11)?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 13,
		question: "Q13. A class template is a _?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 14,
		question:
			"Q14. What is the ternary operator equivalent to this code snippet?",
		choices: [
			"A: It's a constant expression, meaning an expression composed of constants and operations.",
			"B: It's an expression that represents an object with an address.",
			"C: It's an expression suitable for the left-hand side operand in a binary operation.",
			"D: It's a location value, meaning a memory address suitable for assigning to a pointer or reference.",
		],
		answer: "It's a location value, meaning a memory address suitable for assigning to a pointer or reference.",
	},
	{
		id: 15,
		question: "Q15. What is the output of the code given below?",
		choices: [
			"A: It specifies that the type of x will be deduced from the initializer - in this case, double.",
			"B: It specifies that the type of x is automatic meaning that it can be assigned different types of data throughout the program.",
			"C: It specifies that x is a variable with automatic storage duration.",
			"D: It specifies that more memory will be allocated for x in case it needs more space, avoiding loss of data due to overflow.",
		],
		answer: "It specifies that the type of x will be deduced from the initializer - in this case, double.",
	},
	{
		id: 16,
		question:
			"Q16. What is the meaning of the two parts specified between parentheses in a range-based for loop, separated by a colon?",
		choices: [
			"A: class written with the generic programming paradigm, specifying behavior in terms of type parameter rather than specific type.",
			"B: blank superclass intended for inheritance and polymorphism.",
			"C: class that only consists of a member variable, with no constructor, destructor, or member functions.",
			"D: skeleton source code for a class where the programmer has to fill in specific parts to define the data types and algorithms used.",
		],
		answer: "class written with the generic programming paradigm, specifying behavior in terms of type parameter rather than specific type.",
	},
	{
		id: 17,
		question: "Q17. What is the output of the code given below?",
		choices: [
			"A: y=a?b:x;",
			"B: y=if(x?a:b);",
			"C: y=(x&a)?a:(x&b)?b:0;",
			"D: y=x?a:b;",
		],
		answer: "y=x?a:b;",
	},
	{
		id: 18,
		question: "Q18. What is the output of this block of code?",
		choices: [
			"A: x = 10 and y = 20x = 11 and y = 19",
			"B: x = 11 and y = 19x = 10 and y = 20",
			"C: x = 10 and y = 19x = 11 and y = 20",
			"D: x = 11 and y = 20x = 10 and y = 19",
		],
		answer: "x = 10 and y = 19x = 11 and y = 20",
	},
	{
		id: 19,
		question: "Q19. What is the output after executing this code snippet?",
		choices: [
			"A: The first is a variable declaration that will hold an element in a sequence. The second is the sequence to traverse.",
			"B: The first is an iterator, and the second is the increment value to be added to the iterator.",
			"C: The first is the iterating variable. The second is astd::pairthat specifies the range (start and end) in which the variable will iterate.",
			"D: The first is a container object. The second is astd::pairthat specifies the range (start and end) in which the elements will be accessed within the loop.",
		],
		answer: "The first is a variable declaration that will hold an element in a sequence. The second is the sequence to traverse.",
	},
	{
		id: 20,
		question:
			"Q20. What is a valid definition for theget_lengthfunction, which returns the length of a null-terminated string?",
		choices: [
			"A: There is no output because there is an exception when comparing an int8_t with a uint8_t.",
			"B: greater",
			"C: less",
			"D: There is no output because there is a compiler error.",
		],
		answer: "less",
	},
	{
		id: 21,
		question:
			"Q21. Which STL class is the best fit for implementing a collection of data that is always ordered so that the pop operation always gets the greatest of the elements? Suppose you are interested only in push and pop operations.",
		choices: [
			"A: a=-56, b=100",
			"B: a=-55, b=100",
			"C: a=200, b=-156",
			"D: a=200, b=100",
		],
		answer: "a=-56, b=100",
	},
	{
		id: 22,
		question:
			"Q22. What is the meaning of the three sections specified between parentheses in a for loop separated by semicolons?",
		choices: [
			"A: Part A executes because x==5 (true) and y==2 (true), thus the AND operation evaluates as true.",
			"B: Part B executes because (x & y) results in 0, or false.",
			"C: Part A executes because (x & y) results in a nonzero value, or true.",
			"D: Part B executes because the statement (x & y) is invalid, thus false.",
		],
		answer: "Part B executes because (x & y) results in 0, or false.",
	},
	{
		id: 23,
		question: "Q23. What does this code print?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 24,
		question: "Q24. What is true about the variable namedptr?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 25,
		question: "Q25. What is the output of the code given below?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 26,
		question: "Q26. What is the output of this code?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 27,
		question:
			"Q27. What is the difference between a public and a private class member?",
		choices: [
			"A: std::list",
			"B: std::vector",
			"C: std::priority_queue",
			"D: std::map",
		],
		answer: "std::priority_queue",
	},
	{
		id: 28,
		question: "Q28. What is the value ofxafter executing this code?",
		choices: [
			"A: The first is the iterating variable name, the second is the number of times to iterate, and the third is the desired increment or decrement (specified with a signed integer).",
			"B: The first is the initialization block, the second is the condition to iterate, and the third is the increment block.",
			"C: The first is the iterating variable, the second is the container in which it should operate, and the third is an exit condition to abort at any time.",
			"D: The first is the iterating variable name, the second is the starting value for the iterating variable, and the third is the stop value (the last value plus one).",
		],
		answer: "The first is the initialization block, the second is the condition to iterate, and the third is the increment block.",
	},
	{
		id: 29,
		question: "Q29. Which statement is true?",
		choices: ["A: 0,1,1,0", "B: 0,1,0,1", "C: 0,0,1,0", "D: 1,0,1,0"],
		answer: "0,1,1,0",
	},
	{
		id: 30,
		question:
			"Q30. Consider a pointer to void, namedptr, which has been set to point to a floating point variableg. Which choice is a valid way to dereferenceptrto assign its pointed value to a float variableflater in the program?",
		choices: [
			"A: It is a pointer initialized at NULL.",
			"B: It is a pointer to a void function.",
			"C: That declaration causes a compiler error, as pointers must specify a type.",
			"D: It is a pointer to a value with no specific type, so it may be cast to point to any type.",
		],
		answer: "It is a pointer to a value with no specific type, so it may be cast to point to any type.",
	},
	{
		id: 31,
		question: "Q31. What is the.*operator and what does it do?",
		choices: [
			"A: c is d and d is c",
			"B: c is A and d is 3",
			"C: c is 3 and d is A",
			"D: c is c and d is d",
		],
		answer: "c is 3 and d is A",
	},
	{
		id: 32,
		question:
			'Q32. For these declarations, which choice shows four equivalent ways to assign the character "y" in the string to a char variable c?',
		choices: [
			"A: 1/2 = 0.499999",
			"B: 1/2 = 0",
			"C: 1/2 = 0.000000",
			"D: 1/2 = 0.5",
		],
		answer: "1/2 = 0.000000",
	},
	{
		id: 33,
		question:
			"Q33. Which choice is the correct declaration for the class named Dog, derived from the Animal class?",
		choices: [
			"A: Public members are the same as global variables, so every part of the code has access to them. Private members are the same as automatic variables, so only their class has access to them.",
			"B: Public members are made accessible to any running application. Private members are made accessible only to the application where the object is instantiated.",
			"C: Public members will be compiled as shared variables in a multithreaded environment. Private members will be compiled as Thread-local variables.",
			"D: Public members can be accessed by any function. Private members can be accessed only by the same class's member functions and the friends of the class.",
		],
		answer: "Public members can be accessed by any function. Private members can be accessed only by the same class's member functions and the friends of the class.",
	},
	{
		id: 34,
		question: "Q34. What is the output of this code given below?",
		choices: ["A: 3", "B: 7", "C: -3", "D: 13"],
		answer: "3",
	},
	{
		id: 35,
		question: "Q35. How can C++ code call a C function?",
		choices: [
			"A: Only classes can have member variables and methods.",
			"B: C++ supports multiple inheritance.",
			"C: C++ supports only single inheritance.",
			"D: Only structs can inherit.",
		],
		answer: "C++ supports multiple inheritance.",
	},
	{
		id: 36,
		question:
			"Q36. Which choice isnota valid type definition of a structure that contains x and y coordinates as integers, and that can be used exactly as shown for the variable namedcenter?",
		choices: [
			"A: float f=*(float)ptr;",
			"B: float f=(float *)ptr;",
			"C: float f=(float)*ptr;",
			"D: float f=*(float *)ptr;",
		],
		answer: "float f=*(float *)ptr;",
	},
	{
		id: 37,
		question:
			"Q37. Which choice doesnotproduce the same output as this code snippet? Assume the variableiwill not be used anywhere else in the code.",
		choices: [
			"A: It is the same as the class member access operator, or arrow operator(->), which allows you to access a member of an object through a pointer to the object.",
			"B: It is the pointer to the member operator, and it allows you to access a member of an object through a pointer to that specific class member.",
			"C: It is the member access with an address of the operator, which returns the address of a class or struct member.",
			"D: It is a combination of the member access operator(.)and the dereference operator(*), so it allows you to access the object that a member pointer points to.",
		],
		answer: "It is the pointer to the member operator, and it allows you to access a member of an object through a pointer to that specific class member.",
	},
	{
		id: 38,
		question: "Q38. What does this part of a main.cpp file do?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 39,
		question:
			"Q39. Consider this function declaration ofis_even, which takes in an integer and returns true if the argument is an even number and false otherwise. Which declarations are correct for overloaded versions of that function to support floating point numbers and string representations of numbers?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 40,
		question:
			"Q40. Which choice is an include guard for the header filemy_library.h?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 41,
		question:
			"Q41. What's wrong with this definition when using a pre-C++11 compiler?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 42,
		question: "Q42. What is the statement below equivalent to?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 43,
		question: "Q42.b. What is the statement equivalent to?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 44,
		question:
			"Q43. Consider a class namedcomplexNumber. Which code will result in an equivalent object?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 45,
		question: "Q44. What is the result of executing this code snippet?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 46,
		question: "Q45. What would be the output of this code?",
		choices: [
			"A: c = -1, which is less than 10",
			"B: c = 255, which is greater than 10",
			"C: c = -1, which is greater than 10",
			"D: c = 255, which is less than 10",
		],
		answer: "c = -1, which is less than 10",
	},
	{
		id: 47,
		question: "Q46. What is the output of this code?",
		choices: [
			"A: by simply calling the C code",
			"B: There is no way for C++ to call a C function",
			'C: by using extern "C"',
			"D: by importing the source C code",
		],
		answer: 'by using extern "C"',
	},
	{
		id: 48,
		question:
			"Q47. Which of the following STL classes is the best fit for implementing a phonebook? Suppose each entry contains a name and a phone number, with no duplicates, and you want to have a lookup by name.",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 49,
		question: "Q48. What does this program do?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 50,
		question:
			"Q49. Which of the following isnota consequence of declaring the member variablecountof my_class as static? / Alt.: Which statement is true when declaring the member variablecountas static?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 51,
		question:
			"Q50. What is the assumed type of a constant represented in the source code as0.44?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 52,
		question:
			"Q51. What is an appropriate way of removingmy_objectas shown below?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 53,
		question:
			"Q52. What is the correct way to call thecountmember function for the object pointer calledgrades?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 54,
		question: "Q53. What would be the output of this code?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 55,
		question:
			"Q54. Does this code cause a compiler error? If so, why, and if not, what ischild_t?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 56,
		question: "Q55. What is this expression equivalent to?",
		choices: [
			"A: It causes the toolchain to compile all the contents of library.h so that its executable code is available when needed by the final application.",
			"B: It cherry-picks library.h for the declarations and definitions of all data and functions used in the remainder of the source file main.cpp, finally replacing the#includedirective with those declarations and definitions.",
			"C: It informs the linker that some functions or data used in the source file main.cpp are contained in library.h, so that they can be called in run time. This is also known as dynamic linking.",
			"D: It causes the replacement of the#includedirective by the entire contents of the source file library.h. This is similar to the Copy-Paste operation of library.h into main.cpp.",
		],
		answer: "It causes the replacement of the#includedirective by the entire contents of the source file library.h. This is similar to the Copy-Paste operation of library.h into main.cpp.",
	},
	{
		id: 57,
		question: "Q56. What is this expression equivalent to?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 58,
		question: "Q57. What does this function do?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 59,
		question:
			"Q58. Consider a class namedCustomData. Which choice is a correct declaration syntax to overload the postfix++operator as a class member?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 60,
		question:
			"Q59. You want to sort my_array, declared below. Which choice is the correct call to std::sort, using a lambda expression as the comparison function?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 61,
		question:
			"Q60. Which choice is the most reasonable implementation of the function std::mutex::lock() by using std::mutex::try_lock()?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 62,
		question:
			"Q61. What is the main difference between these two Functions?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 63,
		question: "Q62. What is the purpose of a destructor?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 64,
		question:
			"Q63. What is one benefit of declaring the parameter as aconstreference instead of declaring it as a regular object?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 65,
		question: "Q64. What is an include guard?",
		choices: [
			"A: There's nothing wrong with it.",
			"B: Anstd::vectorcannot contain morestd::vectorcontainers as its elements.",
			"C: The correct syntax should be:std::vector[std::vector[int]] thematrix;",
			"D: >>is parsed as the shift-right operator, and thus results in a compile error.",
		],
		answer: "There's nothing wrong with it.",
	},
	{
		id: 66,
		question:
			"Q65. What would be the correct declaration of a default constructor for a class named Sprite?",
		choices: [
			"A: sprite.x",
			"B: sprite.*x",
			"C: (*sprite).x",
			"D: *sprite.x",
		],
		answer: "(*sprite).x",
	},
	{
		id: 67,
		question: "Q66. What is the purpose of this line in a header file?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 68,
		question: "Q67. What is a variable of type double?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 69,
		question:
			"Q68. Other than shifting bits to the left, what is the << operator used for?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 70,
		question:
			"Q69. Which choice is a reason to specify the type of a pointer instead of usingvoid *, which works as a pointer to any type?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 71,
		question: "Q70. What is wrong with this piece of code?",
		choices: [
			"A: Part A executes because the expression(~x || y)always results in true ify==false.",
			"B: Part B executes because the statement(~x || y)is invalid, thus false.",
			"C: Part A executes because~xis not zero, meaning true.",
			"D: Part B executes because~xis false andyis false, thus theORoperation evaluates as false.",
		],
		answer: "Part A executes because~xis not zero, meaning true.",
	},
	{
		id: 72,
		question:
			"Q71. When placed in a valid execution context, which statement will dynamically allocate memory from the heap for an integer of value 11?",
		choices: [
			"A: The output is the addresses ofnums[0],nums[1], andnums[2], in that order, with no spaces.",
			"B: 256",
			"C: 0",
			"D: 243",
		],
		answer: "256",
	},
	{
		id: 73,
		question: "Q72. Which choice best describes the typelong?",
		choices: [
			"A: 0.54 2.71828 3.14159 5.499999 10.0",
			"B: 1 3 4 6 11",
			"C: 0 2 3 5 10",
			"D: 1 3 3 5 10",
		],
		answer: "1 3 3 5 10",
	},
	{
		id: 74,
		question:
			"Q73. Which of the following types has the closest functionality to a class?",
		choices: [
			"A: std::priority_queue",
			"B: std::list",
			"C: std::vector",
			"D: std::map",
		],
		answer: "std::priority_queue",
	},
	{
		id: 75,
		question:
			'Q74. Given these records in a map, how will you update the value for the key "Sinead" to 22?',
		choices: [
			"A: It renames text1.txt to text2.txt.",
			"B: It makes a directory called text2.txt and moves text1.txt there.",
			"C: It copies the contents of text1.txt into text2.txt - i.e., it makes a copy of text1.txt, named text2.txt.",
			"D: It appends the contents of text1.txt into text2.txt - i.e., replaces the contents of text2.txt by the concatenation of text2.txt and text1.txt.",
		],
		answer: "It copies the contents of text1.txt into text2.txt - i.e., it makes a copy of text1.txt, named text2.txt.",
	},
	{
		id: 76,
		question:
			"Q75. Why can the std::sort receive a function object as one of its parameters?",
		choices: [
			"A: The variable cannot be modified by any part of the code in the same application or thread. However, other threads may modify it.",
			"B: The variable exists even when no objects of the class have been defined so it can be modified at any point in the source code.",
			"C: The variable is allocated only once, regardless of how many objects are instantiated because it is bound to the class itself, not its instances.",
			"D: All objects that try to access their count member variable actually refer to the only class-bound static count variable.",
		],
		answer: "The variable cannot be modified by any part of the code in the same application or thread. However, other threads may modify it.",
	},
	{
		id: 77,
		question: "Q76. What will happen when you execute this code snippet?",
		choices: ["A: double", "B: long float", "C: long double", "D: float"],
		answer: "double",
	},
	{
		id: 78,
		question:
			"Q77. Which access specifier does not allow class members to be accessed from outside the class, but allows them to be accessed by derived classes?",
		choices: [
			"A: delete(my_object);",
			"B: free(my_object);",
			"C: The garbage collector will destroy the object eventually.",
			"D: Exiting the scope will destroy the object.",
		],
		answer: "delete(my_object);",
	},
	{
		id: 79,
		question:
			"Q78. The default executable generation on UNIX for a C++ program is _",
		choices: [
			"A: grades.count();",
			"B: my_array->count();",
			"C: grades->count();",
			"D: my_array.count();",
		],
		answer: "grades->count();",
	},
	{
		id: 80,
		question: "Q79. What will be the output of the following program?",
		choices: [
			"A: There is no output. The code causes a compiler error becausenumsis an array of references, which is illegal.",
			"B: 846",
			"C: The output is the addresses ofi2,i0, andi1, in that order, with no spaces.",
			"D: 468",
		],
		answer: "There is no output. The code causes a compiler error becausenumsis an array of references, which is illegal.",
	},
	{
		id: 81,
		question: 'Q80. What does "c" stand for in cout and cin?',
		choices: [
			"A: Yes, it causes a compiler error because the colon character is not allowed in struct definitions.",
			"B: No, andchild_tis a type defined as a structure with bit fields. It has 4 bits for age and 1 bit for gender in the first byte, and 2 bits for size in the second byte.",
			"C: Yes, it causes a compiler error because there is an unnamed field.",
			"D: Yes, it causes a compiler error because one field is defined as having a size of 0.",
		],
		answer: "No, andchild_tis a type defined as a structure with bit fields. It has 4 bits for age and 1 bit for gender in the first byte, and 2 bits for size in the second byte.",
	},
	{
		id: 82,
		question: "Q81. What is the use of tellp()?",
		choices: ["A: *(A.B)", "B: B=A", "C: (*A).B", "D: &A.B"],
		answer: "(*A).B",
	},
	{
		id: 83,
		question: "Q82. What is callback function?",
		choices: [
			"A: A.B.C.D",
			"B: *A.*B.*C.*D",
			"C: &A.&B.&C.&D",
			"D: *(*((*A).B).C).D",
		],
		answer: "*(*((*A).B).C).D",
	},
	{
		id: 84,
		question:
			'Q83. What is the correct syntax to output "Hello World" in C++?',
		choices: [
			"A: It declares a memory buffer named buff that starts at address 20 and ends at address 70.",
			"B: It sets all bits in the array named buffer from its element at index 20 to its element at index 50.",
			"C: It writes the value 20 in every memory address from buff to buff+49.",
			"D: It declares a memory buffer named buff that starts at address 20 and ends at address 50.",
		],
		answer: "It writes the value 20 in every memory address from buff to buff+49.",
	},
	{
		id: 85,
		question: "Q84. How many categories of iterators are there in C++?",
		choices: [
			"A: CustomData& operator++();",
			"B: void operator++(CustomData);",
			"C: CustomData operator++(CustomData);",
			"D: CustomData operator++(int);",
		],
		answer: "CustomData operator++(int);",
	},
	{
		id: 86,
		question: "Q85. What is the meaning of base class in C++ ?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 87,
		question:
			"Q86. The size of C++ objects is expressed in terms of multiples of the size of a ** and the size of a char is **.",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 88,
		question:
			"Q87. Implementation-dependent aspects about an implementation can be found in",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 89,
		question: "Q88. What is a default constructor?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 90,
		question:
			"Q89. When protecting a header file, why would you use '#pragma once' instead of 'include' guard?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 91,
		question: "Q90. Which of the following statements is valid?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 92,
		question:
			"Q91. Which of the following is/are automatically added to every class, if we do not write our own?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 93,
		question:
			"Q92. The if-else statement can be replaced by which operator?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 94,
		question:
			"Q93. Which choice would be a recursive solution to the factorial n! problem?",
		choices: [
			"A: lock()has a higher privilege overtry_lock(). This means that you have a better chance of acquiring a mutexwith lock().",
			"B: Both attempt to acquire a lock, butlock()blocks if the mutex is not available, whereastry_lock()returns whether the mutex is available or not.",
			"C: lock()enforces preemption, whereastry_lock()suggests preemption.",
			"D: If the mutex is not available,try_lock()returns with a corresponding code, whereaslock()snatches the mutex from the thread that currently has it.",
		],
		answer: "Both attempt to acquire a lock, butlock()blocks if the mutex is not available, whereastry_lock()returns whether the mutex is available or not.",
	},
	{
		id: 95,
		question:
			"Q94. A class destructor can be called when a variety of situations occur. Which choice is not one of those situations?",
		choices: [
			"A: It allows the programmer to write the necessary code to free the resources acquired by the object prior to deleting the object itself.",
			"B: It deletes an object. One example of a destructor is thedelete()function.",
			"C: It terminates a program. This may be achieved as a regular function call or as an exception.",
			"D: There are no destructors in C++.",
		],
		answer: "It allows the programmer to write the necessary code to free the resources acquired by the object prior to deleting the object itself.",
	},
	{
		id: 96,
		question:
			"Q95. You are designing a foreign exchange payments system in C++, You need to model a transaction of a currency that has an integer as its quantity and a float as its price. You then want to declare an actual object of this type. How will you achieve this?",
		choices: [
			"A: Actually, objects cannot be passed as regular variables, because they require a constructor call. Therefore, aconstreference is the only way to pass class instances to functions.",
			"B: There are no benefits because a reference and an object are treated as the same thing.",
			"C: Theconstqualifier forbids the code to modify the argument, so the programmer can rest assured that the source object will remain unchanged. / Alt.: The argument is passed as a reference, so if the passed my_array object is large, the program will require less time and memory.",
			"D: The argument is passed as a reference, so the function receives a copy that can be modified without affecting the original variable.",
		],
		answer: "Theconstqualifier forbids the code to modify the argument, so the programmer can rest assured that the source object will remain unchanged. / Alt.: The argument is passed as a reference, so if the passed my_array object is large, the program will require less time and memory.",
	},
	{
		id: 97,
		question:
			'Q96. What will happen if you attempt to call this function with checkConcatThreshold("a");?',
		choices: [
			"A: a preprocessor directive that prevents inconsistent behaviors in lines that contain the #ifdef, #ifndef, or #elif directives",
			"B: a compiler option that prevents the user code from including additional libraries",
			"C: a preprocessor statement that prevents a source file from being included more than once in a project",
			"D: a library that adds safety features such as mutexes, watchdog timers, and assertions to the project",
		],
		answer: "a preprocessor statement that prevents a source file from being included more than once in a project",
	},
	{
		id: 98,
		question:
			"Q97. You need to define a C++ lambda function. You want the function to have access to only the variables that are local to it. The function should receive a single parameter, and a name, and construct a simple greeting. How will you achieve this?",
		choices: [
			"A: Apublic:Sprite();",
			"B: Bprivate:voidSprite();",
			"C: Cpublic:voidSprite();",
			"D: Dprivate:Sprite();",
		],
		answer: "Apublic:Sprite();",
	},
	{
		id: 99,
		question: "Q98. What is the value of X after running this code?",
		choices: [
			"A: to restrict the use of its contents to only one source file",
			"B: to tell the compiler that only one variable can be instantiated from the classes or types contained in this header file",
			"C: to help the compiler finish faster by assuring that only one compiler pass is necessary for the code included in this header file",
			"D: to make the compiler parse that header file only once, even if it is included multiple times in the source",
		],
		answer: "to make the compiler parse that header file only once, even if it is included multiple times in the source",
	},
	{
		id: 100,
		question:
			"Q99. Once you are done writing to a file, what method will you call on theofstreamto notify the operating system?",
		choices: [
			"A: a 2-tuple",
			"B: an integer number",
			"C: a floating point number",
			"D: a string with more than 255 characters",
		],
		answer: "a floating point number",
	},
	{
		id: 101,
		question: "Q100. Which choice is not a C++ keyword?",
		choices: [
			"A: shifting characters to the left in a string.",
			"B: inserting characters into an output stream like std::cout.",
			"C: comparing floating point numbers as less-than.",
			"D: assigning a variable to a reference.",
		],
		answer: "inserting characters into an output stream like std::cout.",
	},
	{
		id: 102,
		question:
			"Q101. The size_in_bits function seems to take any type of parameter. This can be done by overloading the function, or by letting the compiler take care of it by writing a template. Which choice is an implementation of that template?",
		choices: [
			"A: The compiler needs the data type to make sure that the pointer is not going to be used on illegal non-pointable types such as functions, labels, pointers, and references.",
			"B: void *does not work for any type. The language does not allow assigning anything other thanvoidto a pointer tovoid *.",
			"C: The compiler needs the data type to know how much memory to allocate for the pointer because different data types require different pointer lengths.",
			"D: Yes, it causes a compiler error because one field is defined as having a size of 0.",
		],
		answer: "The compiler needs the data type to know how much memory to allocate for the pointer because different data types require different pointer lengths.",
	},
	{
		id: 103,
		question:
			"Q102. To use the keyboard as input the iostream library is included. To read input from files as input what library is needed?",
		choices: [
			"A: The main function is supposed to have a void return type.",
			"B: std::cinandstd::coutare invalid. The correct names for the character input and output streams arecinandcout.",
			"C: The address ofstris supposed to be used. That is&strinstead ofstr.",
			"D: The input operator flow is inverted. it should start fromstd::cinand then flow (>>) intostr.",
		],
		answer: "The input operator flow is inverted. it should start fromstd::cinand then flow (>>) intostr.",
	},
	{
		id: 104,
		question: "Q103. What will this object-oriented program print?",
		choices: [
			"A: int anInt = new int(11);",
			"B: int* anInt = new int[11];",
			"C: int anInt = new int[11];",
			"D: int* anInt = new int(11);",
		],
		answer: "int* anInt = new int(11);",
	},
	{
		id: 105,
		question:
			"Q104. The program below is handling a stack container. What is the output of running the program?",
		choices: [
			"A: an integer number of at least 32 bits",
			"B: a string with more than 255 characters",
			"C: a pointer",
			"D: a 64-bit floating point number",
		],
		answer: "an integer number of at least 32 bits",
	},
	{
		id: 106,
		question:
			"Q105. Which choice is a valid way to overload the ternary conditional operator?",
		choices: ["A: struct", "B: union", "C: enum", "D: namespace"],
		answer: "struct",
	},
	{
		id: 107,
		question:
			"Q106. Which class hierarchy represents an example of multilevel inheritance?",
		choices: [
			'A: marks["Sinead"] = 22',
			'B: marks["Sinead"].22',
			'C: marks["Sinead"] -> 22',
			'D: marks["Sinead"].value = 22',
		],
		answer: 'marks["Sinead"] = 22',
	},
	{
		id: 108,
		question:
			"Q107. Which of the following is the correct syntax to print the message in C++ language?",
		choices: [
			"A: The std::sort function is a template. The programmer is free to enter the sorting algorithm in a function object as an argument.",
			"B: Actually, std::sort takes only one argument, which is the container to be sorted.",
			"C: std::sort operates on a template container. The compiler does not know how to relationally compare the values it contains, so a function must be provided to do the comparison.",
			"D: std::sort will use the parameter function as an error handler. The function will be called if an error occurs.",
		],
		answer: "The std::sort function is a template. The programmer is free to enter the sorting algorithm in a function object as an argument.",
	},
	{
		id: 109,
		question:
			"Q108. Consider the following program. What will be the output/error?",
		choices: [
			"A: 6 will be printed on standard output, with no compilation warnings generated.",
			"B: 5 will be printed on standard output, with no compilation warnings generated.",
			"C: 6 will be printed on standard output, with compilation warnings generated.",
			"D: 5 will be printed on standard output, with compilation warnings generated.",
		],
		answer: "5 will be printed on standard output, with no compilation warnings generated.",
	},
	{
		id: 110,
		question:
			'Q109. Consider the following code segment. Fill in the blank at LINE-1 so that the program will print "not found"?',
		choices: ["A: guarded", "B: protected", "C: public", "D: private"],
		answer: "protected",
	},
	{
		id: 111,
		question:
			"Q110. Consider the following code segment. What will be the output?",
		choices: ["A: a.exe", "B: a", "C: a.out", "D: out.a"],
		answer: "a.out",
	},
	{
		id: 112,
		question:
			"Q111. Consider the following code segment. What will be the output?",
		choices: ["A: 1", "B: 2", "C: 3", "D: 6"],
		answer: "1",
	},
	{
		id: 113,
		question:
			"Q112. Consider the following code segment. What will be the output?",
		choices: [
			"A: compiler",
			"B: console",
			"C: character",
			"D: standard namespace",
		],
		answer: "character",
	},
	{
		id: 114,
		question:
			"Q113. Consider the following code segment. Choose the appropriate option to fill in the blank at LINE-1, such that the output of the code would be: a C++ Program.",
		choices: [
			"A: Current Input Pointer position",
			"B: Current Output Pointer position",
			"C: Last Input Pointer position",
			"D: Last Output Pointer position",
		],
		answer: "Current Output Pointer position",
	},
	{
		id: 115,
		question:
			"Q114. Consider the following code segment. Fill in the blank at LINE-1 such that the output is 5 2 3 4 5",
		choices: [
			"A: Pointer for a pointer",
			"B: Pointer for a function",
			"C: function for a pointer",
			"D: function for a class",
		],
		answer: "Pointer for a function",
	},
	{
		id: 116,
		question:
			"Q115. Consider the following code segment. What will be the output?",
		choices: [
			'A: cout << "Hello World";',
			'B: System.out.println("Hello World");',
			'C: print("Hello World");',
			'D: Console.WriteLine("Hello World");```',
		],
		answer: 'cout << "Hello World";',
	},
	{
		id: 117,
		question:
			"Q116. Consider the following code segment. Which statement/statements is/are correct?",
		choices: ["A: 4", "B: 3", "C: 7", "D: 5"],
		answer: "3",
	},
	{
		id: 118,
		question:
			"Q117. Consider the following program. What will be the output/error(s)?",
		choices: [
			"A: It inherits other class",
			"B: It has a pointer variable",
			"C: It is the first class declared",
			"D: Another class got inherited from this class",
		],
		answer: "Another class got inherited from this class",
	},
	{
		id: 119,
		question:
			"Q118. Consider the following code segment. What will be the output?",
		choices: ["A: char, 4", "B: float, 8", "C: int, 1", "D: char, 1"],
		answer: "char, 1",
	},
	{
		id: 120,
		question:
			"Q119. Consider the following code segment. Which line/s will give you an error?",
		choices: [
			"A: <numeric>",
			"B: <limit>",
			"C: <limits>",
			"D: <implementation>",
		],
		answer: "<limits>",
	},
	{
		id: 121,
		question:
			"Q120. Consider the following code segment. What will be the output/error?",
		choices: [
			"A: a constructor that can be used with no arguments",
			"B: a constructor that does not have a return value",
			"C: a constructor that is used by multiple classes",
			"D: a constructor that initializes all members of a class",
		],
		answer: "a constructor that can be used with no arguments",
	},
	{
		id: 122,
		question:
			"Q121. Consider the following code segment. What will be the output?",
		choices: [
			"A: There is no reason to choose because they serve different purposes",
			"B: An include guard uses a macro to achieve single inclusion, but the compiler cannot prevent the programmer from defining that macro elsewhere, which would result in no inclusion at all\ndefining that macro elsewhere, which would result in no inclusion at all",
			"C: '#pragma once' guarantees that the header code will never be changed because it is enforced by the compiler",
			"D: Include guards refer to the header file in the file system, not to the code, so they are not helpful if the header file exists\nmore than once in a project. This is not a problem with '#pragma once'",
		],
		answer: "An include guard uses a macro to achieve single inclusion, but the compiler cannot prevent the programmer from defining that macro elsewhere, which would result in no inclusion at all\ndefining that macro elsewhere, which would result in no inclusion at all",
	},
	{
		id: 123,
		question:
			"Q122. Consider the following code segment. Choose the appropriate option to fill in the blanks at LINE-1, such that the output of the code would be: 300 20000.",
		choices: [
			"A: We can create a new C++ operator.",
			"B: We can change the precedence of the C++ operator.",
			"C: We can not change the operator templates.",
			"D: We can change the associativity of the C++ operators.",
		],
		answer: "We can not change the operator templates.",
	},
	{
		id: 124,
		question:
			"Q123. Consider the following code segment. What will be the output/error?",
		choices: [
			"A: Copy Constructor",
			"B: Assignment Operator",
			"C: A constructor without any parameter",
			"D: All of the above",
		],
		answer: "All of the above",
	},
	{
		id: 125,
		question:
			"Q124. Consider the following code segment. What will be the output/error?",
		choices: [
			"A: certain structure",
			"B: choosing structure",
			"C: selective structure",
			"D: None of the Above",
		],
		answer: "selective structure",
	},
	{
		id: 126,
		question:
			"Q125. Consider the following code segment. Fill in the blank at LINE-1 such that the program will print 5 + i3",
		choices: ["A: \u00ad"],
		answer: "\u00ad",
	},
	{
		id: 127,
		question:
			"Q126. Consider the following program. Which line/s will generate an error?",
		choices: ["A: \u00ad"],
		answer: "\u00ad",
	},
	{
		id: 128,
		question:
			"Q127. Consider the following class. Fill in the blanks with proper access specifiers so that member y can be accessed from outside of the class but member x cannot be accessed.",
		choices: ["A: \u00ad"],
		answer: "\u00ad",
	},
	{
		id: 129,
		question:
			"Q128. Which C++ Standard did add in-class default member initializers?",
		choices: ["A: \u00ad"],
		answer: "\u00ad",
	},
	{
		id: 130,
		question:
			"Q129. Can you use auto type deduction for non-static data members?",
		choices: [
			"A: The program is terminated. This calls the destructor of static duration objects.",
			"B: The delete () function is called for an object pointer assigned with the new operator.",
			"C: The garbage collector detects that an object is no longer going to be used.",
			"D: An automatic storage duration object goes out of scope.",
		],
		answer: "The garbage collector detects that an object is no longer going to be used.",
	},
	{
		id: 131,
		question:
			"Q130. Do you need to define a static inline data member in a cpp file?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 132,
		question: "Q131. What's the output of the following code:",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 133,
		question: "Q132. Can a static inline variable be non-constant?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 134,
		question: "Q133. Consider the following code:",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 135,
		question:
			"Q134. What happens when you throw an exception from a constructor?",
		choices: [
			"A: A compilation warning will occur and the second argument will be given a default value of b.",
			"B: A compilation warning will occur and the second argument will be given a default value of the empty string.",
			"C: A compilation error will occur.",
			"D: No compilation errors will occur and no compilation warnings will occur.",
		],
		answer: "A compilation error will occur.",
	},
	{
		id: 136,
		question: "Q135. What happens when you compile this code?",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 137,
		question: "Q136. Will this code work in C++11?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 138,
		question:
			"Q137. Assume you have a std::map<string, int> m;. Select the single true statement about the following loop:",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 139,
		question:
			"Q138. Identify the correct extension of the user-defined header file in C++.",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 140,
		question: "Q139.Identify the incorrect constructor type.",
		choices: ["A: -3", "B: 7", "C: 13", "D: 3"],
		answer: "7",
	},
	{
		id: 141,
		question:
			"Q140.Which of the following data types is supported in C++ but not in C?",
		choices: ["A: printout()", "B: close()", "C: destroy()", "D: flush()"],
		answer: "close()",
	},
	{
		id: 142,
		question:
			"Q141. Identify the correct syntax for declaring arrays in C++.",
		choices: [
			"A: static_assert",
			"B: reinterpret_cast",
			"C: comPl",
			"D: alignas",
		],
		answer: "comPl",
	},
	{
		id: 143,
		question: "Q142.Size of wchat_t is.",
		choices: ["A: A"],
		answer: "A",
	},
	{
		id: 144,
		question:
			"Q143.Which of the following loops is best when we know the number of iterations?",
		choices: ["A: B"],
		answer: "B",
	},
	{
		id: 145,
		question: "Q144.Which keyword is used to define the macros in C++?",
		choices: ["A: C"],
		answer: "C",
	},
	{
		id: 146,
		question:
			"Q145.Which of the following operators should be preferred to overload as a global function rather than a member method?",
		choices: ["A: D"],
		answer: null,
	},
	{
		id: 147,
		question:
			"Q146.How can we restrict the dynamic allocation of objects of a class using new?",
		choices: ["A: fstream", "B: cstdlib", "C: filestream", "D: iostream"],
		answer: "fstream",
	},
	{
		id: 148,
		question: "Q147.What is the time complexity of the below code?",
		choices: ["A: fossil", "B: fossil none", "C: hydrogen", "D: none"],
		answer: "fossil",
	},
	{
		id: 149,
		question: "Q148.What is the output of the code given below?",
		choices: ["A: 1", "B: 2", "C: 3", "D: 4"],
		answer: "1",
	},
	{
		id: 150,
		question: "Q149. Which C++ construct is used for exception handling?",
		choices: [
			"A: void& operator ?:(const bool cond, const void& iftrue, const void& iffalse);",
			"B: The ternary operator is not overloadable.",
			"C: void& operator conditional(const bool cond, const void& iftrue, const void& iffalse);",
			"D: void* operator ?:(const bool cond, const void* iftrue, const void* iffalse);",
		],
		answer: "The ternary operator is not overloadable.",
	},
	{
		id: 151,
		question:
			"Q150. What is the purpose of thebreakstatement in a loop in C++?",
		choices: [
			"A: In the same program, at different points, a given class derives individually from more than one different class.",
			"B: A first-class derives directly, at the same time, from a second and third class.",
			"C: In the same program, at different points, a given class derives individually from more than two different classes.",
			"D: A first classderives from a second class, and that second class is already derived from a third class",
		],
		answer: "In the same program, at different points, a given class derives individually from more than two different classes.",
	},
	{
		id: 152,
		question:
			"Q151. In C++, what is the purpose of theconstkeyword when used with a variable?",
		choices: [
			'A: Out <<"Hello world!',
			"B: Cout << Hello world! ;",
			'C: cout <<"Hello world!";',
			"D: None of the above",
		],
		answer: 'cout <<"Hello world!";',
	},
	{
		id: 153,
		question:
			"Q152. Which is more effective while calling the C++ functions??",
		choices: [
			"A: 1",
			"B: 0",
			"C: -1",
			"D: Compilation Error: function is not defined",
		],
		answer: "1",
	},
	{
		id: 154,
		question: "Q153. What will be the output of the following C++ program?",
		choices: [
			"A: &data[0], &data[5], key",
			"B: data, data+5, key",
			"C: &data[0], &data[4], key",
			"D: data+1, data+4, key",
		],
		answer: "&data[0], &data[4], key",
	},
	{
		id: 155,
		question: "Q.154 What is the output of this code?",
		choices: [
			"A: 10 20 30 40 50",
			"B: 10 30 40 50 20",
			"C: 50 10 30 40 20",
			"D: 50 10 20 30 40",
		],
		answer: "50 10 30 40 20",
	},
	{
		id: 156,
		question:
			"Q.155 Which choice isnotrelated to declaring the member variable count as static in my_class?",
		choices: [
			"A: 5 10 15 20 25",
			"B: 5 10 15 25 20",
			"C: 20 10 15 25 5",
			"D: 25 5 10 15 20",
		],
		answer: "5 10 15 25 20",
	},
	{
		id: 157,
		question: "Q156. What is the purpose of theconstexprkeyword in C++?",
		choices: [
			"A: A A A B C Z Z Z",
			"B: A A B B C Z Z Z",
			"C: A A A B C Z Z",
			"D: A A A B C Z Z Z Z",
		],
		answer: "A A A B C Z Z Z",
	},
	{
		id: 158,
		question: "Q157. What is a template metaprogram in C++?",
		choices: [
			"A: s1 += s2",
			"B: strcat(s1, s2)",
			"C: s1.append(s2)",
			"D: s1.insert(s2)",
		],
		answer: "s1 += s2",
	},
	{
		id: 159,
		question:
			"Q158.Identify the correct example for a pre-increment operator.",
		choices: [
			"A: data + 4 - i",
			"B: data + 5 - i",
			"C: data + i - 4",
			"D: data + i - 5",
		],
		answer: "data + 4 - i",
	},
	{
		id: 160,
		question: "Q159. What will be the output of following code?",
		choices: [
			"A: 1234987654",
			"B: 123498765",
			"C: 1234897654",
			"D: 123459876",
		],
		answer: "1234987654",
	},
];



let cppq1 = cpp[Math.floor(Math.random())* cpp.length];
console.log(cppq1);