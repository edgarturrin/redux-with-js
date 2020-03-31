import { createStore } from "redux";

const contador = document.getElementById("contador");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");

const INITIAL_STATE = {
  counter: 0
};

function counterApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
      break;
    case "DECREMENT":
      return { counter: state.counter - 1 };
      break;
    default:
      return state;
      break;
  }
}

const store = createStore(counterApp);

store.subscribe(() => {
  const state = store.getState();
  contador.innerText = state.counter;
});

incrementar.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decrementar.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
