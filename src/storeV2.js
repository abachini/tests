import { createStore, action } from "easy-peasy";

export const store = createStore({
  selectedItems: [],
  selectItem: action((state, payload) => {
    console.log("[store][selectItem] payload:", payload);
    state.selectedItems.push(payload);
  }),
  deselectItem: action((state, payload) => {
    console.log("[store][deselectItem] payload:", payload);
    const filteredItems = state.selectedItems.filter(
      i => i.name !== payload.name
    );
    state.selectedItems = filteredItems;
  })
});

export default store;
