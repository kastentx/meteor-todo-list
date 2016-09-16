import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Task component - represents a single to-do item
export default class Task extends Component {
	toggleChecked() {
		// Set the checked property to the opposite of its current value
		Meteor.call('tasks.setChecked', this.props.task_id, !this.props.task.setChecked);
	}

	deleteThisTask() {
		Meteor.call('tasks.remove', this.props.task_id);
	}

	render() {
		// give tasks a different className when they are checked off
		// so we can style them differently in CSS
		const taskClassName = this.props.task.checked ? 'checked' : '';

		return (
			<li className={taskClassName}>
				<button className="delete" onClick={this.deleteThisTask.bind(this)}>
					&times;
				</button>

				<input 
					type="checkbox"
					readOnly
					checked={this.props.task.checked}
					onClick={this.toggleChecked.bind(this)}
				/>

				<span className="text"><strong>{this.props.task.username}</strong>: {this.props.task.text}</span>
			</li>
		);
	}
}

Task.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required.
	task: PropTypes.object.isRequired,
};