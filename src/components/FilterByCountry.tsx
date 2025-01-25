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
        emoji="🇨🇴"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="mexico"
        emoji="🇲🇽"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="usa"
        emoji="🇺🇸"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="japan"
        emoji="🇯🇵"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="singapore"
        emoji="🇸🇬"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="indonesia"
        emoji="🇮🇩"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="vietnam"
        emoji="🇻🇳"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="cambodia"
        emoji="🇰🇭"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="thailand"
        emoji="🇹🇭"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <FiltersDivider />
      <SelectableButton
        countryName="malaysia"
        emoji="🇲🇾"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
    </div>
  )
}

export default FilterByCountry
