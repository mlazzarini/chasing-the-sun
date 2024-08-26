'use client'

import { FunctionComponent } from 'react'
import FiltersDivider from './FiltersDivider'
import SelectableButton from './SelectableButton'

interface FilterByCountryProps {
  toggleCountry: (country: string) => void
  selectedCountries: string[]
}

const FilterByCountry: FunctionComponent<FilterByCountryProps> = ({
  toggleCountry,
  selectedCountries,
}) => {
  return (
    <div className="flex items-center justify-center self-start flex-wrap mb-8">
      <span className="mx-1">Filter:</span>
      <SelectableButton
        countryName="colombia"
        text="Colombia"
        emoji="🇨🇴"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="mexico"
        text="Mexico"
        emoji="🇲🇽"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="usa"
        text="USA"
        emoji="🇺🇸"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="japan"
        text="Japan"
        emoji="🇯🇵"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="singapore"
        text="Singapore"
        emoji="🇸🇬"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="indonesia"
        text="Indonesia"
        emoji="🇮🇩"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
    </div>
  )
}

export default FilterByCountry
