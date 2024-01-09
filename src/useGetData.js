import { useEffect, useState } from 'react';

const checkPromiseStatus = (promise) => {
	let status = 'pending';
	let result;

	//인수로 전달된 promise의 상태에 따라 상태와 value값을 각각 변수에 담아줌.
	const setPromise = promise
		.then((value) => {
			status = 'fulfiled';
			result = value;
		})
		.catch((error) => {
			status = 'rejected';
			result = error;
		});
	//
	return () => {
		if (status === 'pending') {
		} else if (status === 'fulfiled') {
		} else if (status === 'rejected') {
		} else throw new Error('Unknown Statue');
	};
};

const useGetData = (url) => {
	const [Data, setData] = useState(null);

	useEffect(() => {
		const getData = async () => {};
	}, []);
};

export default getData;
