import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/header" element={<Header />}>
          <Route path="calculator" element={<Counter />} />
        </Route>
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <HashRouter>
    <Provider store={store}>
      <AppContent />
    </Provider>
    </HashRouter>
  );
};

export default App;
