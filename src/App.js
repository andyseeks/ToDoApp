import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { store } from "./app/store";
import ToDos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <ToDos />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
