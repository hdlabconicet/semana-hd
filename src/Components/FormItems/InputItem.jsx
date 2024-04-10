const InputItem = (idItem, typeItem, titleItem, requiredItem) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={idItem} className="text-gray-500">
        {titleItem}
      </label>
      <input
        type={typeItem}
        id={idItem}
        name={idItem}
        className={`border border-gray-200 focus:border-green_hd focus:ring-0 focus:outline-none rounded p-2`}
        required={requiredItem}
      />
    </div>
  );
};

export default InputItem;
