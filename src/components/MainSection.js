import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class MainSection extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	render() {
		const { todos, actions } = this.props;
		return (
			<section className="main">
				<ul className="todo-list">
					{ todos.map(todo => (
						<TodoItem key={todo.id} todo={todo} { ...actions } />
					))}
				</ul>
			</section>
		);
	}
}

export default MainSection