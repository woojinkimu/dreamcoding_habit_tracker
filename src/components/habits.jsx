import React, { PureComponent } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends PureComponent {
	// state = {
	// 	habits: [
	// 		{id: 1, name: 'Reading', count: 0},
	// 		{id: 2, name: 'Running', count: 0},
	// 		{id: 3, name: 'Coding', count: 0},
	// 	]
	// };

	// handleIncrement = (habit) => {
	// 	// console.log(`increment ${habit.name}`);
	// 	const habits = [...this.state.habits];
	// 	const index = habits.indexOf(habit);
	// 	habits[index].count++;
	// 	this.setState({habits});
	// }

	// handleDecrement = (habit) => {
	// 	// console.log(`decrement ${habit.name}`);
	// 	const habits = [...this.state.habits];
	// 	const index = habits.indexOf(habit);
	// 	const count = habits[index].count - 1;
	// 	habits[index].count = count < 0 ? 0 :count;
	// 	this.setState({habits});
	// }
  
  // handleDelete = (habit) => {
	// 	// console.log(`delete ${habit.name}`);
	// 	const habits= this.state.habits.filter(item => item.id !== habit.id);
	// 	this.setState({habits});
	// }

	render() {
		return (
			<>
				<HabitAddForm onAdd={this.props.onAdd} />
				<ul>
					{
						this.props.habits.map(habit => 
							<Habit 
								key={habit.id}
								habit={habit}
								onIncrement={this.props.onIncrement}
								onDecrement={this.props.onDecrement}
								onDelete={this.props.onDelete}
							/>
						)
					}
				</ul>
				<button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
			</>
		)
	}
}

export default Habits;