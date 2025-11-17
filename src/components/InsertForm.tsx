const InsertForm = () => {
  return (
    <div className="max-w-xl mx-auto my-8">
      <p className="text-3xl font-semibold text-center">Insert Book</p>
      <form action="" className="space-y-5">
        <label htmlFor="title" className="block text-lg font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          name=""
          id="title"
          className="w-full bg-gray-200 rounded-md py-2 outline-0 px-5"
        />
        {/* ---------- */}
        <label htmlFor="price" className="block text-lg font-medium mb-1">
          Price
        </label>
        <input
          type="text"
          name=""
          id="price"
          className="w-full bg-gray-200 rounded-md py-2 outline-0 px-5"
        />
        {/* ---------- */}
        <label htmlFor="desc" className="block text-lg font-medium mb-1">
          Description
        </label>
        <input
          type="text"
          name=""
          id="desc"
          className="w-full bg-gray-200 rounded-md py-2 outline-0 px-5"
        />
        <button
          type="submit"
          className="w-full text-center text-xl font-medium bg-gray-700 text-white hover:bg-gray-600 py-2 rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertForm;
