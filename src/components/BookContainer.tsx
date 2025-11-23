import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/bookSlice";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "../store/store";

const BookContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books, isLoading } = useSelector((state: RootState) => state.book);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="flex border-t-2 border-gray-300 w-6xl mx-auto">
      <BookList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} />
      <BookDetails isLoading={isLoading} />
    </div>
  );
};

export default BookContainer;
