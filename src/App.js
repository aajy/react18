import { useState } from 'react';
import News from './components/news/News';
import Pics from './components/pics/Pics';
import Visual from './components/visual/Visual';
import './global.scss';
import { flushSync } from 'react-dom';

function App() {
	console.log('re-render');
	const [Count1, setCount1] = useState(1);
	const [Count2, setCount2] = useState(2);
	const [Count3, setCount3] = useState(3);

	const returnPromise = () => {
		return new Promise((res) => setTimeout(res, 500));
	};

	const changeState = () => {
		returnPromise().then(() => {
			//특정 State값을 Auto Batching에서 제외처리
			flushSync(() => {
				setCount1(Count1 + 1);
			});
			setCount2(Count2 + 1);
			setCount3(Count3 + 1);
		});
	};
	return (
		<div className='App'>
			<button
				style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}
				onClick={changeState}
			>
				변경
			</button>
			<Visual />
			<News />
			<Pics />
		</div>
	);
}

export default App;
