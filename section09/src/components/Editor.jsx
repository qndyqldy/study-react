import './Editor.css';
import {useRef, useState} from 'react';

const Editor = ({onCreate}) => {
	const [content, setContent] = useState('');
	const contentRef = useRef();
	const onSubmit = () => {
		if(content === '') {
			contentRef.current.focus();
			return;
		}

		onCreate(content);
		setContent('');
	}

	const onKeyDown = (e) => {
		if(e.keyCode === 13) {
			onSubmit();
		}
	}

	return (
		<div className={"Editor"}>
			<input
				ref={contentRef}
				value={content}
				onKeyDown={onKeyDown}
				onChange={(e) => setContent(e.target.value)}
				placeholder="새로운 Todo..." />
			<button onClick={onSubmit}>추가</button>
		</div>
	)
}

export default Editor;