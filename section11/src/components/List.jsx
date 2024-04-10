import './List.css';
import TodoItem from './TodoItem.jsx';
import {useState, useMemo, useContext} from 'react';
import {TodoStateContext} from "../App.jsx";

const List = () => {
	const todos = useContext(TodoStateContext);
	const [search, setSearch] = useState('');
	const onChange = (e) => {
		setSearch(e.target.value);
	}
	const getFilteredData = () => {
		if(search === '') {
			return todos;
		} else {
			return todos.filter(todo => todo.content.toLowerCase().includes(search.toLowerCase()));
		}
	}

	const filteredTodos = getFilteredData();
	// const getAnalyzedData = () => {
	// 	const totalCount = todos.length;
	// 	const doneCount = todos.filter(todo => todo.isDone).length;
	// 	const notDoneCount = totalCount - doneCount;
	//
	// 	return {totalCount, doneCount, notDoneCount};
	// }

	// 의존성배열 : deps
	// 의존성배열이 변화해야지만 반환함
	const {totalCount, doneCount, notDoneCount} = useMemo(() => {
		console.log('memo');
		const totalCount = todos.length;
		const doneCount = todos.filter(todo => todo.isDone).length;
		const notDoneCount = totalCount - doneCount;

		return {totalCount, doneCount, notDoneCount};
	}, [todos]);

	// const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

	return (
		<div className={"List"}>
			<h4>Todo List 🍾</h4>
			<div>
				<div>total: {totalCount}</div>
				<div>done: {doneCount}</div>
				<div>notDone: {notDoneCount}</div>
			</div>
			<input
				placeholder={"검색어를 입력해주세요"}
				value={search}
				onChange={onChange}/>
			<div className={"todos_wrapper"}>
				{
					filteredTodos.map(todo => {
						return <TodoItem
							key={todo.id}
							{...todo}/>;
					})
				}
			</div>
		</div>
	)
}

export default List;