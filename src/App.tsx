import { useSelector } from "react-redux";
import BookContainer from "./components/BookContainer";
import Header from "./components/Header";
import InsertForm from "./components/InsertForm";
import type { RootState } from "./store/store";

const App = () => {
  const { error } = useSelector((state: RootState) => state.book);
  return (
    <>
      {error && <div>{error}</div>}
      <Header />
      <InsertForm />
      <BookContainer />
    </>
  );
};

export default App;
