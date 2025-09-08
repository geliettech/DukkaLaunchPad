interface PropsType {
  label: string
  id?: string
  name?: string
  value?: string
  checked: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

const Checkbox: React.FC<PropsType> = ({
  label,
  id = 'default-checkbox',
  name,
  value,
  checked,
  handleChange,
  disabled = false,
}) => {
  return (
    <div className="relative flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        className="size-6 transform cursor-pointer appearance-none rounded-lg border-2 border-gray-400 transition duration-[120ms] ease-in-out checked:border-none checked:border-[#CC76A1] checked:bg-[#CC76A1] disabled:cursor-not-allowed disabled:opacity-50"
        aria-checked={checked}
      />
      <label htmlFor={id} className="cursor-pointer text-sm font-medium text-zinc-400">
        {label}
      </label>
      {checked && (
        <span className="pointer-events-none absolute top-[-4px] left-[7px] scale-x-[-1] rotate-[35deg] transform text-lg font-bold text-white">
          L
        </span>
      )}
    </div>
  )
}

export default Checkbox