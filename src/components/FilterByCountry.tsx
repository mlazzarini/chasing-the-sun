'use client'

import React, { FunctionComponent } from 'react'
import planeIcon from '../../public/plane.svg'
import Image from 'next/image'
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
      <Image
        className="size-3 rotate-150 m-1"
        priority
        src={planeIcon}
        alt="plane icon"
      />
      <SelectableButton
        countryName="mexico"
        text="Mexico"
        emoji="🇲🇽"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <Image
        className="size-3 rotate-150 m-1"
        priority
        src={planeIcon}
        alt="plane icon"
      />
      <SelectableButton
        countryName="usa"
        text="USA"
        emoji="🇺🇸"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <Image
        className="size-3 rotate-150 m-1"
        priority
        src={planeIcon}
        alt="plane icon"
      />
      <SelectableButton
        countryName="japan"
        text="Japan"
        emoji="🇯🇵"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <Image
        className="size-3 rotate-150 m-1"
        priority
        src={planeIcon}
        alt="plane icon"
      />
      <SelectableButton
        countryName="singapore"
        text="Singapore"
        emoji="🇸🇬"
        selectedCountries={selectedCountries}
        toggleCountry={toggleCountry}
      />
      <Image
        className="size-3 rotate-150 m-1"
        priority
        src={planeIcon}
        alt="plane icon"
      />
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
