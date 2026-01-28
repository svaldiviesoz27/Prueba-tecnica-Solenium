import { useState } from "react"

export const DropDown = ({ options, onChange }: any) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const handleInputChange = (e: any) => {
        setSearchTerm(e.target.value)
        setIsOpen(true)
    }

    const handleOptionClick = (option: any) => {
        setSearchTerm(option.label)
        setIsOpen(false)
        if (onChange) {
            onChange(option.value)
        }
    }

    const filteredOptions = options.filter((option: any) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                placeholder="Buscar..."
            />
            {isOpen && filteredOptions.length > 0 && (
                <div>
                    {filteredOptions.map((option: any, index: number) => (
                        <div key={index} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}