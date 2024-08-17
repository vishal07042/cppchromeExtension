import React, { useEffect, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { cpp } from "@codemirror/lang-cpp";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";

const stripHtmlTags = (html) => {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html;
	return tempDiv.textContent || tempDiv.innerText || "";
};

function App2() {
	const [fullCode, setFullCode] = useState(``);

	const [title, setTitle] = useState("");
	const [code, setCode] = useState("");
	const [choices, setChoices] = useState([]);
	const [answer, setAnswer] = useState("");

	const [randomNumber, setRandomNumber] = useState(2);

	const [variabletoAnswer, setVariabletoAnswer] = useState(false);

	const [editCode, setEditCode] = useState(true);

	useEffect(() => {
		chrome.runtime.sendMessage(
			{ message: "getRandomQuestion" },
			(response) => {
				console.log("Initial response received:", response);
				if (response && response.length > 0) {
					setTitle(response[0].title);
					setChoices(response[0].choices);
					const plainCode = stripHtmlTags(response[0].code);
					setCode(plainCode);
				}
			}
		);
	}, []);

	const fetchNextQuestion = () => {
		console.log("Next question button clicked");
		chrome.runtime.sendMessage(
			{ message: "getRandomQuestion" },
			(response) => {
				console.log("Response received:", response);
				if (response && response.length > 0) {
					setTitle(response[0].title);
					setChoices(response[0].choices);
					const plainCode = stripHtmlTags(response[0].code);
					setCode(plainCode);
					setVariabletoAnswer(false); // Reset the answer visibility
				}
			}
		);
	};

	const customTheme = EditorView.theme({
		"&": {
			fontSize: "16px", // Adjust the font size as needed
		},
	});
	return (
		<div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 '>
			<h2 className='text-2xl mt-10'>{title}</h2>

			{code && (
				<CodeMirror
					className='text-3xl m-10 line-height-10'
					value={code}
					height='300px'
					width='700px'
					extensions={[cpp()]}
					theme='dark' // Optional: Choose a theme
					basicSetup={basicSetup}
					onChange={(values) => {}}
				/>
			)}

			<pre className={`aside   text-2xl ${editCode ? "hidden" : ""}`} onChange={(e)=>{
                setCode(e.target.value)
            }}>
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
				<button
					className='bg-blue-500 text-white p-2 rounded-md m-4'
					onClick={() => setEditCode(false)}
				>
					edit code
				</button>
			</h1>

			{choices.map((choice, index) => {
				const options = choice.split(/ - \\[ \] | - \\[x\\]/);
				return (
					<div key={index} className='space-y-2'>
						{options.map((option, idx) => (
							<button
								key={idx}
								className='w-full flex items-center justify-between px-12 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100 m-4 transform transition-transform duration-300 hover:rotate-z-3 hover:origin-top-left'
							>
								<span className='text-xl font-semibold'>
									{idx + 1}
								</span>
								<span className='text-gray-900 items-center font-bold  text-2xl px-4'>
									{option
										.replace(/\\/g, "")
										.replace(/\\[x\\]/g, "")
										.replace(/[\]x]/g, "")
										.trim()}
								</span>
							</button>
						))}
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

			<p className='text-2xl m-4 '>{variabletoAnswer ? answer : ""}</p>

			{variabletoAnswer && (
				<button
					className='bg-blue-500 text-black p-2 rounded-md m-4'
					onClick={fetchNextQuestion}
				>
					next question
				</button>
			)}
		</div>
	);
}

export default App2;
