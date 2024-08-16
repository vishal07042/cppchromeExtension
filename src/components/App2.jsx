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
     useEffect(() => {
        chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
            console.log("Response received:", response);
            if (response && response.length > 0) {
                setTitle(response[0].title);
				setChoices(response[0].choices);
				console.log(response[0].choices)
                // setCode(response[0].code);

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
			<h2 className='text-2xl '>{title}</h2>
			<CodeMirror
				className='text-4xl m-10 line-height-10'
				value={code}
				height='200px'
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

			{choices.map((choice, index) => {
				const options = choice.split(" - \\[ \\] ");
				return (
					<div
						key={index}
						className='w-full my-2 p-4 border-4 border-gray-500 rounded-md text-center'
					>
						{options.map((option, idx) => (
							<h1 key={idx} className='text-2xl'>
								{option}
							</h1>
						))}
					</div>
				);
			})}
		</div>
	);
}

export default App2