export default function FormEntry({
  placeholder,
  name,
  value
}: {
  placeholder: string;
  name: string;
  value:string;
}) {

  return (
    <div>
      <label
        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
      >
        {placeholder}
      </label>
      <div className="relative p-2">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id={name}
          type="text"
          name={name}
          placeholder={`Enter ${placeholder.toLowerCase()} here.`}
          defaultValue={value}
          required
        />
      </div>
    </div>
  );
}
