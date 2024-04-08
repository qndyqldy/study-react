import './TodoItem.css';

const TodoItem = ({todo, onUpdate, onDelete}) => {
	const onChangeCheckbox = () => {
		onUpdate(todo.id);
	}
	const onClickDelete = () => {
		onDelete(todo.id);
	}
	return (
		<div className={"TodoItem"}>
			<input
				type="checkbox"
				checked={todo.isDone}
				onChange={onChangeCheckbox}/>
			<div className={"content"}>
				{todo.content}
			</div>
			<div className={"date"}>
				{new Date(todo.date).toLocaleDateString()}
			</div>
			<button onClick={onClickDelete}>삭제</button>
		</div>
	)
}

export default TodoItem;