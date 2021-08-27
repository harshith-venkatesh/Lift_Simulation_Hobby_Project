import { ELEVATE_UP } from "../../App";

export const LiftSection = ({ state, floorNumber, floorDispatch }) => {
  return (
    <>
      <div className="floor" key={floorNumber}>
        <div className="floor__buttons">
          {floorNumber !== state.MAX_NUMBER_OF_FLOORS - 1 && (
            <button
              className="floor__buttons__up"
              onClick={() =>
                floorDispatch({ type: ELEVATE_UP, payload: floorNumber })
              }
            >
              Up
            </button>
          )}
          {floorNumber !== 0 && (
            <button
              className="floor__buttons__down"
              onClick={() =>
                floorDispatch({ type: ELEVATE_UP, payload: floorNumber })
              }
            >
              Down
            </button>
          )}
        </div>
        <div className="floor__line">
          <div className="floor__line-text">Floor {floorNumber}</div>
        </div>
      </div>
    </>
  );
};
