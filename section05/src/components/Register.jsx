import {useState} from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
	const [name, setName] = useState('임영욱');
	const onChangeName = (e) => {
		setName(e.target.value);
	}

	const [birth, setBirth] = useState('2024-03-31');
	const onChangeBirth = (e) => {
		setBirth(e.target.value);
	}

	const [country, setCountry] = useState('');
	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	}

	const [bio, setBio] = useState('1234');
	const onChangeBio = (e) => {
		setBio(e.target.value);
	}

	return (
		<div>
			<div>
			<input
				// 초기값 설정
				value={name}
				// change event
				onChange={onChangeName}
				placeholder={'이름'}/>
			</div>
			<div>
				<input
					type='date'
					value={birth}
					onChange={onChangeBirth} />
				{birth}
			</div>
			<div>
				<select
					value={country}
					onChange={onChangeCountry}>
					<option></option>
					<option value={'kr'}>한국</option>
					<option value={'us'}>미국</option>
					<option value={'uk'}>영국</option>
				</select>
				{country}
			</div>
			<div>
				<textarea
					value={bio}
					onChange={onChangeBio}/>
				{bio}
			</div>
		</div>
	)
}


export default Register;