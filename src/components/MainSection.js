import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MainSection extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	renderTodo = todo => (
		<li key={todo.id}>
			{todo.next} {todo.id}
		</li>
	)

	render() {
		return (
			<div>
				MainSection
				{this.props.todos.map(this.renderTodo)}
			</div>
		);
	}
}

export default MainSection