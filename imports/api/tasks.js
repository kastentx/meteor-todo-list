import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
	// this code only runs on the server
	Meteor.publish('tasks', function tasksPublication() {
		return Tasks.find();
	});
}

Meteor.methods({
	'tasks.insert'(text) {
		check(text, String);
	}
})