import { useEffect } from "react";

export const useCustomFloor = (initialState) => {
    useEffect(() => {
        const initialMaxFloor = Number(
        window.prompt("Mention the number of floor to be simulated?", "")
        );
        initialState.MAX_NUMBER_OF_FLOORS = initialMaxFloor ?? 4;
    }, []);
    return initialState.MAX_NUMBER_OF_FLOORS
}