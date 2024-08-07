import { create } from "zustand";

// Define the state type
interface SelectedFoodState {
  selectedFood: { [key: string]: any };
}

// Define the action type
type Action = {
  updateSelectedFood: (selectedFood: SelectedFoodState["selectedFood"]) => void;
}

// Create the Zustand store
const useSelectedFood = create<SelectedFoodState & Action>((set) => ({
  selectedFood: {}, // Initial state for selected food items
  updateSelectedFood: (selectedFood) => set({ selectedFood }) // Action to update selected food state
}));

export default useSelectedFood;
