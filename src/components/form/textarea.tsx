import type { ChangeEvent, TextareaHTMLAttributes } from 'react'
import { useEffect, useRef } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  autoHeight?: boolean // Enable auto-height adjustment
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' // Control resizing
  className?: string // Allow custom classes
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Enter text...',
  autoHeight = true,
  resize = 'vertical',
  className = '',
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (autoHeight && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto' // Reset height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px` // Adjust to content
    }
  }, [value, autoHeight])

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="mb-2 block text-sm font-medium text-zinc-500">{label}</label>}
      <textarea
        ref={textAreaRef}
        value={value}
        rows={7}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-[#DCDFEA] bg-white p-3 text-sm placeholder:text-[#9C9C9C] focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-hidden ${resize === 'none' ? 'resize-none' : ''} ${resize === 'both' ? 'resize' : ''} ${resize === 'horizontal' ? 'resize-x' : ''} ${resize === 'vertical' ? 'resize-y' : ''} `}
        style={{ resize }}
        {...props}
      />
    </div>
  )
}

export default TextArea