import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "😀": "Grinning",
  "😉": "Winking",
  "🤩": "Star-Struck",
  "🙌": "Raising Hands",
  "💪": "Flexed Biceps",
  "😑": "annoyance" 
};
var emojiKeys = Object.keys(emojis);
export default function App() {
	const [userInputMeaning, emojiMeaning] = useState("");

	function emojiInput(i) {
		var Input = i.target.value;
		var meaning = emojis[Input];
		if (meaning === undefined) {
			meaning = "Emoji not found in Database";
		}
		emojiMeaning(meaning);
	}

	function emojiClickHandler(emoji) {
		var meaning = emojis[emoji];
		emojiMeaning(meaning);
	}

	return (
		<div className="App">
			<h1>Emoji finder </h1>
			<input onChange={emojiInput} />
			<h2>{userInputMeaning}</h2>
			<h2>What we know</h2>
			{emojiKeys.map(function (keys) {
				return (
					<span onClick={() => emojiClickHandler(keys)}>{keys}</span>
				);
			})}
		</div>
	);
}