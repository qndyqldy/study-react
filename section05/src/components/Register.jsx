import {useState, useRef} from 'react';

const Register = () => {
	const [input, setInput] = useState({
		name: '',
		birth: '',
		country: '',
		bio: ''
	});

	const inputRef = useRef();

	const onChangeInput = (e) => {
		setInput({
			...input,
			// object에 대괄호[] 안에 변수를 넣으면 key 값으로 설정 됨
			[e.target.name]: e.target.value
		})
	}
	const onSubmit = () => {
		if(input.name === '') {
			// 이름을 입력하는 DOM 요소 포커스
			inputRef.current.focus();
		}
	}

	return (
		<div>
			<div>
				<input
					// 초기값 설정
					ref={inputRef}
					name={'name'}
					value={input.name}
					// change event
					onChange={onChangeInput}
					placeholder={'이름'}/>
				</div>
			<div>
				<input
					name={'birth'}
					type='date'
					value={input.birth}
					onChange={onChangeInput} />
				{input.birth}
			</div>
			<div>
				<select
					name={'country'}
					value={input.country}
					onChange={onChangeInput}>
					<option></option>
					<option value={'kr'}>한국</option>
					<option value={'us'}>미국</option>
					<option value={'uk'}>영국</option>
				</select>
				{input.country}
			</div>
			<div>
				<textarea
					name={'bio'}
					value={input.bio}
					onChange={onChangeInput}/>
				{input.bio}
			</div>
			<button onClick={onSubmit}>제출</button>
		</div>
	)
}


export default Register;