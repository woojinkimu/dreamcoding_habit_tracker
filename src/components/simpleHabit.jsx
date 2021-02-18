// use react hook
import React, { useCallback, useState, useRef, useEffect, } from 'react';

const SimpleHabit = () => {
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated: ${count}, ${spanRef.current.innerText}`);
  }, [count]);
  
  return (
    <li>
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-lus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({count: this.state.count + 1});
//   }

//   render() {
//     return (
//       <li>
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//           <i className="fas fa-lus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

// export default SimpleHabit;