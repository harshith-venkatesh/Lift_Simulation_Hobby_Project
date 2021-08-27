import { useReducer } from "react";
import { LiftContainer } from "./components/LiftContainer";
import "./styles.css";

export const ELEVATE_UP = "ELEVATE_UP";
export const ELEVATE_DOWN = "ELEVATE_DOWN";
export const RESET_FLOOR = "RESET_FLOOR";
const initialState = {
  CURRENT_POSITION_OF_FLOOR: 0,
  MAX_NUMBER_OF_FLOORS: 5
};

const checkUpOrDownFloor = (floor) => (floor > 0 ? floor : -floor);

const liftSimulationCSS = (lift, payload, floorDifference) => {
  lift.style.bottom = 6 + payload * 12 + "rem";
  lift.style.transition = `bottom ease ${checkUpOrDownFloor(floorDifference)}s`;
};

const floorReducer = (state, action) => {
  const lift = document.querySelector(".lift");
  const floorDifference = action.payload - state.CURRENT_POSITION_OF_FLOOR;
  switch (action.type) {
    case ELEVATE_UP:
      liftSimulationCSS(lift, action.payload, floorDifference);
      return { ...state, CURRENT_POSITION_OF_FLOOR: action.payload };
    case ELEVATE_DOWN:
      liftSimulationCSS(lift, action.payload, floorDifference);
      return { ...state, CURRENT_POSITION_OF_FLOOR: action.payload };
    default:
      return state;
  }
};

export default function App() {
  const [state, floorDispatch] = useReducer(floorReducer, initialState);

  return (
    <div className="App">
      <h1>Lift Simulation</h1>
      <LiftContainer state={state} floorDispatch={floorDispatch} />
      <footer>
        <a
          href="https://github.com/harshith-venkatesh/Lift_Simulation_Hobby_Project"
          target="_blank"
          rel="noreferrer"
        >
          Link To Repo
        </a>
      </footer>
    </div>
  );
}
