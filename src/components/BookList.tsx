import type { book } from "../store/bookSlice";

interface Props {
  isLoading: boolean;
  books: book[];
}

const BookList = ({ isLoading, books }: Props) => {
  if (isLoading)
    return (
      <div className="flex-1 border-r-2 border-gray-300 p-4">Loading....</div>
    );

  return (
    <div className="flex-1 border-r-2 border-gray-300 p-4">
      <p className="text-3xl font-medium mb-4">Book List</p>
      {books.length > 0 ? (
        books?.map((book: book) => {
          return (
            <div
              key={book.id}
              className="p-3 rounded-lg border-2 border-gray-200 flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="font-medium">{book.description}</p>
                <p className="font-medium">{book.price}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-0.5 text-center bg-sky-500 hover:bg-sky-600 text-white rounded-md cursor-pointer">
                  Read
                </button>
                <button className="px-3 py-0.5 text-center bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="bg-gray-200 p-3 rounded-lg font-medium">
          There is no Book Available!
        </p>
      )}
    </div>
  );
};

export default BookList;
