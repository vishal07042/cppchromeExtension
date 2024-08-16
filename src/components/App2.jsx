import React, { useEffect, useState } from 'react'

//    import { cpp } from "@codemirror/lang-cpp";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
// import { cpp } from "@codemirror/legacy-modes/mode/cpp";

import { cpp } from "@codemirror/lang-cpp";
import { basicSetup } from "codemirror";

 import { EditorView } from "@codemirror/view";

//  import { basicSetup } from "codemirror";
//  import { cpp } from "@codemirror/lang-cpp";

const stripHtmlTags = (html) => {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html;
	return tempDiv.textContent || tempDiv.innerText || "";
};

function App2() {

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [choices, setChoices] = useState([]);
	const [answer, setAnswer] = useState("");

	const[variabletoAnswer,setVariabletoAnswer] = useState(false)
     useEffect(() => {
        chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
            // console.log("Response received:", response);
            if (response && response.length > 0) {
                setTitle(response[0].title);
				setChoices(response[0].choices);
				//  console.log(response[0].choices[0])

				 let stringOfChoices = response[0].choices[0]

				 let convertChoice = String(stringOfChoices);

				 let ss = convertChoice;

				 let startIndex = ss.indexOf("\\[x\\]");
					let endIndex = ss.indexOf("\\[ \\]", startIndex);
					let subString = ss.substring(startIndex, endIndex + 4);
					// console.log(subString);

					let finalAnswer = subString.substring(6, subString.length - 6);

					console.log(finalAnswer);

					set

				//  console.log(typeof convertChoice) // string

				// let aanswer = response[0].choices;

				// const correctAnswerLine = convertChoice
				// 	.split("\n")
				// 	.find((line) => line.includes("- \\[x\\]"));

				// if (correctAnswerLine) {
				// 	// Extract text after '- \[x\]'
				// 	const correctAnswer = correctAnswerLine
				// 		.substring(correctAnswerLine.indexOf("- \\[x\\]") + 7) // Adjusted for the extra characters
				// 		.trim();

				// 	console.log(correctAnswer);
				// } else {
				// 	console.log("No correct answer found");
				// }

				// let {answer} = aanswer

	const plainCode = stripHtmlTags(response[0].code);
					setCode(plainCode);
            }
        });
    }, []);

     // Define a theme to customize the font size
    const customTheme = EditorView.theme({
        "&": {
            fontSize: "16px", // Adjust the font size as needed
        },
        
    });
    return (
		<div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10'>
			<h2 className='text-2xl mt-10'>{title}</h2>
			<CodeMirror
				className='text-3xl m-10 line-height-10'
				value={code}
				height='400px'
				width='700px'
				extensions={[cpp()]}
				theme='dark' // Optional: Choose a theme
				basicSetup={basicSetup}
				onChange={(value) => {
					setCode(value);
				}}
			/>

			{/* <pre>
				<code>{code}</code>
			</pre> */}

			{/* <div id="playground">
    <pre class="code">
msg = "Hello, World!"
print(msg)
    </pre>
</div>

<codapi-snippet sandbox="python" editor="basic" selector="#playground .code">
</codapi-snippet>

		<pre>
def greet(name):
    print(f"Hello, {name}!")

greet("World")
</pre>

<codapi-snippet sandbox="python" editor="basic"> </codapi-snippet> */}

			<pre className='text-2xl hidden'>
				{`#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    
    ${code}
}`}
			</pre>
			<h1>
				<codapi-snippet
					className='text-2xl'
					sandbox='cpp'
					editor='basic'
				></codapi-snippet>{" "}
			</h1>

			{/* {choices.map((choice, index) => (
				<div key={index} className='flex items-center justify-center border-4 border-gray-500 rounded-md'>
					<h1 className='text-2xl block' >{choice}</h1>
				</div>
				
			))} */}

			{/* {choices.map((choice, index) => (
				<div
					key={index}
					className='flex items-center justify-center border-4 border-gray-500 rounded-md'
				>
					{choice}
				</div>
			))} */}

			{/* {choices.map((choice, index) => {
				const options = choice.split(" - \\[ \\] ");
				return (
					<div key={index} className=''>
						{options.map((option, idx) => (
							<h1
								key={idx}
								className='text-2xl w-full my-2 p-4 border-4 border-gray-500 rounded-md text-center  bg-pink-500  hover:bg-green-400 '
							>
								{option}
							</h1>
						))}
					</div>
				);
			})} */}

			{choices.map((choice, index) => {
				// Split the choice by either checked or unchecked markers
				const options = choice.split(/ - \\[ \] | - \\[x\\]/);
				return (
					<div key={index} className=''>
						{options.map((option, idx) => {
							const isCorrect = choice.includes(
								` - \\[x\\] ${option.trim()}`
							);

							return (
								<h1
									key={idx}
									className={`text-2xl w-full my-2 p-4 border-4 rounded-md text-center ${
										isCorrect
											? "bg-green-400 border-gray-500"
											: "bg-pink-500 border-gray-500 hover:bg-green-400"
									}`}
								>
									{option.trim()}
								</h1>
							);
						})}
					</div>
				);
			})}

			<button
				className='bg-blue-500 text-white p-2 rounded-md'
				onClick={() => {
					setVariabletoAnswer(true);
				}}
			>
				show answer
			</button>

			<p className='text-2xl '>{variabletoAnswer ? answer : ""}</p>

			{variabletoAnswer && (
				<button
					className='bg-blue-500 text-white p-2 rounded-md'
					onClick={() => {}}
				>
					next question
				</button>
			)}
		</div>
	);
}

export default App2