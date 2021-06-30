import React from 'react'

export const LiftSection = ({floorNumber,floorDispatch}) => {
    return(
      <>
                <div className="floor" key={floorNumber}>
                  <div class="floor__buttons">
                    {floorNumber !== state.MAX_NUMBER_OF_FLOORS - 1 && (
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

  