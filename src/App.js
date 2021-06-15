import { useEffect, useReducer } from "react";
import "./styles.css";

export const ELEVATE_UP = "ELEVATE_UP";
export const ELEVATE_DOWN = "ELEVATE_DOWN";
export const RESET_FLOOR = "RESET_FLOOR";
const initialState = {
  CURRENT_POSITION_OF_FLOOR: 0,
  MAX_NUMBER_OF_FLOORS: 5
};

const floorReducer = (state, action) => {
  const lift = document.querySelector(".lift");
  switch (action.type) {
    case ELEVATE_UP:
      lift.style.bottom = 6 + action.payload * 12 + "rem";
      return { ...state, CURRENT_POSITION_OF_FLOOR: action.payload };
    case ELEVATE_DOWN:
      lift.style.bottom = 6 + action.payload * 12 + "rem";
      return { ...state, CURRENT_POSITION_OF_FLOOR: action.payload };
    default:
      return state;
  }
};

export default function App() {
  // useEffect(() => {
  //   const initialMaxFloor = Number(
  //     window.prompt("Mention the number of floor to be simulated?", "")
  //   );
  //   initialState.MAX_NUMBER_OF_FLOORS = initialMaxFloor ?? 4;
  // }, []);
  const [state, floorDispatch] = useReducer(floorReducer, initialState);

  return (
    <div className="App">
      <h1>Lift Simulation</h1>
      <div>
        {[...Array(state.MAX_NUMBER_OF_FLOORS).keys()].reverse().map((i) => {
          return (
            <>
              <div className="floor" key={i}>
                <div class="floor__buttons">
                  {i !== initialState.MAX_NUMBER_OF_FLOORS - 1 && (
                    <button
                      onClick={() =>
                        floorDispatch({ type: ELEVATE_UP, payload: i })
                      }
                    >
                      Up
                    </button>
                  )}
                  {i !== 0 && (
                    <button
                      onClick={() =>
                        floorDispatch({ type: ELEVATE_UP, payload: i })
                      }
                    >
                      Down
                    </button>
                  )}
                </div>

                <div class="floor__line">
                  <div class="text">Floor {i}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div class="lift" id="lift"></div>
    </div>
  );
}
