import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import SimpleHabit from './components/simpleHabit';

class App extends Component {
  state = {
		habits: [
			{id: 1, name: 'Reading', count: 0},
			{id: 2, name: 'Running', count: 0},
			{id: 3, name: 'Coding', count: 0},
		]
	};

  handleIncrement = (habit) => {
		// console.log(`increment ${habit.name}`);
		const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count: habit.count + 1};
      }
      return item;
    })
		this.setState({habits});
	}

	handleDecrement = (habit) => {
		// console.log(`decrement ${habit.name}`);
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// const count = habits[index].count - 1;
		// habits[index].count = count < 0 ? 0 :count;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};
      }
      return item;
    });
		this.setState({habits});
	}
  
  handleDelete = (habit) => {
		// console.log(`delete ${habit.name}`);
		const habits= this.state.habits.filter(item => item.id !== habit.id);
		this.setState({habits});
	}

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}]
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count: 0};
      }
      return habit;
    });
    this.setState({habits});
  }

  render() {
    const { habits } = this.state;
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />,
        {/* <Habits
          key={habits.id}
          habits={habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        /> */}
        <SimpleHabit />
      </>
    );
  }
}

export default App;
