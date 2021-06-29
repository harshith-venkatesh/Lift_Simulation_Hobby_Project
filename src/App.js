import { useEffect, useReducer } from "react";
import "./styles.css";

export const ELEVATE_UP = "ELEVATE_UP";
export const ELEVATE_DOWN = "ELEVATE_DOWN";
export const RESET_FLOOR = "RESET_FLOOR";
const initialState = {
  CURRENT_POSITION_OF_FLOOR: 0,
  MAX_NUMBER_OF_FLOORS: 5
};

const checkUpOrDownFloor = (floor) => floor>0?floor:-(floor)

const liftSimulationCSS = (lift,payload,floorDifference) => {
  lift.style.bottom = 6 + payload * 12 + "rem";
  lift.style.transition =  `bottom ease ${checkUpOrDownFloor(floorDifference)}s`;
}

const arrangeLiftNumbers = (liftNumbers) => [...Array(liftNumbers).keys()].reverse()


const LiftSection = ({floorNumber,floorDispatch}) => {
  return(
    <>
              <div className="floor" key={floorNumber}>
                <div class="floor__buttons">
                  {floorNumber !== initialState.MAX_NUMBER_OF_FLOORS - 1 && (
                    <button class="floor__buttons__up"
                      onClick={() =>
                        floorDispatch({ type: ELEVATE_UP, payload: floorNumber })
                      }
                    >
                      Up
                    </button>
                  )}
                  {floorNumber !== 0 && (
                    <button class="floor__buttons__down"
                      onClick={() =>
                        floorDispatch({ type: ELEVATE_UP, payload: floorNumber })
                      }
                    >
                      Down
                    </button>
                  )}
                </div>
                <div class="floor__line">
                  <div class="floor__line-text">Floor {floorNumber}</div>
                </div>
              </div>
            </>
  )
}

const floorReducer = (state, action) => {
  const lift = document.querySelector(".lift");
  const floorDifference = action.payload - state.CURRENT_POSITION_OF_FLOOR
  switch (action.type) {
    case ELEVATE_UP:
      liftSimulationCSS(lift,action.payload,floorDifference)
      return { ...state, CURRENT_POSITION_OF_FLOOR: action.payload };
    case ELEVATE_DOWN:
      liftSimulationCSS(lift,action.payload,floorDifference)
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
      <div>
        {arrangeLiftNumbers(state.MAX_NUMBER_OF_FLOORS).map((i) => {
          return (
            <LiftSection floorNumber={i} floorDispatch={floorDispatch}/>
          );
        })}
      </div>
      <div class="lift" id="lift"></div>
    </div>
  );
}
