import './List.css';
import TodoItem from './TodoItem.jsx';
import {useState} from 'react';

const List = ({todos, onUpdate, onDelete}) => {
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

	const filteredTodos = getFilteredData().toSorted((a, b) => {
		return b.id - a.id;
	});

	return (
		<div className={"List"}>
			<h4>Todo List 🍾</h4>
			<input
				placeholder={"검색어를 입력해주세요"}
				value={search}
				onChange={onChange}/>
			<div className={"todos_wrapper"}>
				{
					filteredTodos.map(todo => {
						return <TodoItem
							key={todo.id}
							todo={todo}
							onUpdate={onUpdate}
							onDelete={onDelete}/>;
					})
				}
			</div>
		</div>
	)
}

export default List;