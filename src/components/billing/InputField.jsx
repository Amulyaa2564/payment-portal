export default function InputField({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = false,
  maxLength,
  pattern,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      maxLength={maxLength}
      pattern={pattern}
      className="border border-gray-300 rounded-lg py-2 px-3 text-sm placeholder:text-sm text-gray-700 outline-none focus:ring-1 focus:ring-blue-500"
    />
  )
}