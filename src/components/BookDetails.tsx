interface Props {
  isLoading: boolean;
}

const BookDetails = ({ isLoading }: Props) => {
  if (isLoading) return <div className="flex-1 p-4">Loading....</div>;
  return (
    <div className="flex-1 p-4">
      <p className="text-3xl font-medium mb-4">Book Details</p>
      <p className="bg-gray-200 p-3 rounded-lg font-medium">
        There is no Book selected yet. Please select!
      </p>
    </div>
  );
};

export default BookDetails;
