import { LiftSection } from "../LiftSection";

const arrangeLiftNumbers = (liftNumbers) =>
  [...Array(liftNumbers).keys()].reverse();

export const LiftContainer = ({ state, floorDispatch }) => {
  return (
    <>
      <div>
        {arrangeLiftNumbers(state.MAX_NUMBER_OF_FLOORS).map((i, index) => {
          return (
            <LiftSection
              state={state}
              floorNumber={i}
              key={index}
              floorDispatch={floorDispatch}
            />
          );
        })}
      </div>
      <div className="lift" id="lift"></div>
    </>
  );
};
