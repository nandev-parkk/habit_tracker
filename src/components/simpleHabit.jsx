import React, {
  Component,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

export default function SimpleHabit() {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {});
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </li>
  );
}

// export default class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button
//           className="habit-button habit-increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fa-solid fa-square-plus"></i>
//         </button>
//       </li>
//     );
//   }
// }
