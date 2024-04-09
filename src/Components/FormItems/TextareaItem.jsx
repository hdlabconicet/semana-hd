const TextareaItem = (idItem, titleItem) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex flex-col">
        <label htmlFor={idItem} className="text-gray-500">
          {titleItem}
        </label>
        <textarea
          id={idItem}
          name={idItem}
          className="border border-gray-200 resize-none focus:border-green_hd focus:ring-0 focus:outline-none rounded p-2 w-full"
          required
        />
      </div>
    </div>
  );
};

export default TextareaItem;
