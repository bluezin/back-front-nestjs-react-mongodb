import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import TaskApp from "./components/task-app";
import { Provider } from "react-redux";
import { store } from "./core/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TaskApp />
    </Provider>
  </StrictMode>,
);
