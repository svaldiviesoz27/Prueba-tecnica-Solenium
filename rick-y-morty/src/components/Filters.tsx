import { STATUS_OPTIONS, SPECIES_OPTIONS, GENDER_OPTIONS } from '../constants/filters'
import { FilterIcon, XIcon } from './Icons'
import { CustomSelect } from './CustomSelect'

interface FiltersProps {
    status: string
    species: string
    gender: string
    onStatusChange: (value: string) => void
    onSpeciesChange: (value: string) => void
    onGenderChange: (value: string) => void
    onReset: () => void
}

export const Filters = ({
    status,
    species,
    gender,
    onStatusChange,
    onSpeciesChange,
    onGenderChange,
    onReset,
}: FiltersProps) => {
    const hasActiveFilters = status !== 'all' || species !== 'all' || gender !== 'all'

    return (
        <div className="filters">
            <div className="filters__header">
                <h3 className="filters__title">
                    <FilterIcon size={18} className="filters__icon" />
                    Filters
                </h3>
                {hasActiveFilters && (
                    <button type="button" className="filters__reset" onClick={onReset}>
                        <XIcon size={16} />
                        Clear
                    </button>
                )}
            </div>
            <div className="filters__grid">
                <CustomSelect
                    id="status"
                    label="Status"
                    value={status}
                    options={STATUS_OPTIONS}
                    onChange={onStatusChange}
                />

                <CustomSelect
                    id="species"
                    label="Species"
                    value={species}
                    options={SPECIES_OPTIONS}
                    onChange={onSpeciesChange}
                />

                <CustomSelect
                    id="gender"
                    label="Gender"
                    value={gender}
                    options={GENDER_OPTIONS}
                    onChange={onGenderChange}
                />
            </div>
        </div>
    )
}
