import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';

import Header from './Header';
import MainSection from './MainSection';


const App = ({ todos, actions}) => (
	<div>
		<Header addTodo={actions.addTodo}/>
		<MainSection todos={todos} actions={actions} />
	</div>
);

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
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