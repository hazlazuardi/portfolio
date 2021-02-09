import React, { useState, useEffect } from 'react';

function TodoAdd() {
	const [ count, setCount ] = useState(0);

	useEffect(() => {});
	document.title = `You clicked ${count} times`;
	console.log(count);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
			<Counter initialCount={0} />
		</div>
	);
}

export default TodoAdd;

function Counter({ initialCount }) {
	const [ count, setCount ] = useState(initialCount);
	return (
		<div>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
		</div>
	);
}
