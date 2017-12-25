import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';


class App extends Component {
	render() {
		const renderTodo = todo => (			
			<li key={todo.id}>
				{todo.text} {todo.id}
			</li>
		)
	
		return (
			<div>
				<h2>Todos</h2>
				<input type="text" placeholder="Type a todo"/>
				{ 
					this.props.todos.map(renderTodo)
				}
			</div>
		);
	}
}

App.propTypes = {
	todos: PropTypes.array.isRequired,
}

const mapStateToProps = function(state){
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)