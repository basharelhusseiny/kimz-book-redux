import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { form } from "../components/InsertForm";

export interface book {
  id: number;
  title: string;
  description: string;
  price: number;
  author: string;
}
interface bookState {
  books: book[];
  isLoading: boolean;
  error: string;
}

// GET Data
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// POST Data
export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData: form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: bookState = { books: [], isLoading: false, error: "" };

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET Data
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      // POST Data
      .addCase(insertBook.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default bookSlice.reducer;
