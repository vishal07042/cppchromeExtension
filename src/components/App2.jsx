import React, { useEffect, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { cpp } from "@codemirror/lang-cpp";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import cpps from "highlight.js/lib/languages/cpp";

const stripHtmlTags = (html) => {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html;
	return tempDiv.textContent || tempDiv.innerText || "";
};

function App2() {
	// const ccpp = hljs.registerLanguage("cpp", cpp);
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
					let arr = [];
					let arrs = response[0].choices[0];
					console.log("arr is ", arr);

					arr.push(arrs);

					console.log(typeof arr); // string
					console.log("zeroindex", arr[0]);

					let str = arr[0];

					// Split by - \\[ \\] first to separate unchecked options
					let splitByUnchecked = str.split("- \\[ \\]");

					// Combine all parts back with a separator for easier processing
					let combinedString = splitByUnchecked.join(" - \\[ \\]");

					// Split by - \\[x\\] to find the checked option
					let splitByChecked = combinedString.split("- \\[x\\]");

					// The first part contains all the text before the checked option
					let beforeChecked = splitByChecked[0].trim();

					// The second part contains the checked option and remaining unchecked options
					let afterChecked = splitByChecked[1];

					// Further split by - \\[ \\] to identify unchecked options after the checked one
					let remainingUncheckedOptions = afterChecked
						.split("- \\[ \\]")
						.map((option) => option.trim());

					// The first element in this split is the checked option
					let checkedOption = remainingUncheckedOptions[0];

					// The remaining elements are the unchecked options after the checked option
					let uncheckedOptionsAfterChecked =
						remainingUncheckedOptions.slice(1);

					// All unchecked options, including those before the checked one
					let allUncheckedOptions = splitByUnchecked
						.slice(1)
						.map((option) => option.trim());

					// Combine all options and add numbers
					let allOptions = [
						`1. ${beforeChecked}`,
						`2. ${checkedOption}`,
						...allUncheckedOptions.map(
							(option, index) => `${index + 3}. ${option}`
						),
					];

					// Log the results
					console.log("All options:", allOptions);
					console.log("Correct option:", checkedOption);
					setAnswer(checkedOption);

					// Count the correct answer number
					let correctAnswerNumber =
						allOptions.findIndex((option) =>
							option.includes(checkedOption)
						) + 2;

					console.log("Correct option number:", correctAnswerNumber);

				}

				// The first element of this split is the checked option
				// let checkedOption = splitByUnchecked[0].trim();

				// The remaining elements are the unchecked options
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

			<pre
				className={`aside  ccpp  text-2xl ${editCode ? "hidden" : ""}`}
				onChange={(e) => {
					setCode(e.target.value);
				}}
			>
				<code className='language-cpp'>
					{`#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    
    ${code}
}`}
				</code>
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
								className=' card w-full flex items-center justify-between px-12 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100 m-4 '
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
				className='bg-blue-500 text-white p-2 rounded-md m-4'
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
