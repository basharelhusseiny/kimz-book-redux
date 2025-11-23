import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { insertBook } from "../store/bookSlice";

export interface form {
  title: string;
  price: string;
  description: string;
  author: string;
}

const InsertForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, name } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<form>({
    title: "",
    price: "",
    description: "",
    author: name,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(insertBook(formData));
    setFormData({ title: "", price: "", description: "", author: name });
  };

  return (
    <div className="max-w-xl mx-auto my-8 ">
      <p className="text-3xl font-semibold text-center">Insert Book</p>
      <form onSubmit={handleSubmit} className="space-y-5 ">
        <label htmlFor="title" className="block text-lg font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-gray-200 rounded-md py-2 outline-0 px-5"
        />
        {/* ---------- */}
        <label htmlFor="price" className="block text-lg font-medium mb-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full bg-gray-200 rounded-md py-2 outline-0 px-5"
        />
        {/* ---------- */}
        <label htmlFor="description" className="block text-lg font-medium mb-1">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-gray-200 rounded-md py-2 outline-0 px-5"
        />
        <button
          type="submit"
          disabled={!isLoggedIn}
          className="disabled:cursor-not-allowed disabled:bg-gray-400 w-full text-center text-xl font-medium bg-gray-700 text-white hover:bg-gray-600 py-2 rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertForm;
