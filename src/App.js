import { Suspense } from 'react';
import './global.scss';
import Post from './Post';

function App() {
	return (
		<div className='App'>
			<h1>App</h1>

			<Suspense fallback={<p>Loading...</p>}>
				<h1>Post List</h1>
				<Post />
			</Suspense>
		</div>
	);
}

export default App;
