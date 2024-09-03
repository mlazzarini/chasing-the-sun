import React, { FunctionComponent, useMemo } from 'react'
import { Button } from './ui/button'

interface SelectableButtonProps {
  countryName: string
  toggleCountry: (country: string) => void
  emoji: string
  selectedCountries: string[]
}

const SelectableButton: FunctionComponent<SelectableButtonProps> = ({
  countryName,
  emoji,
  toggleCountry,
  selectedCountries,
}) => {
  const selected = useMemo(() => {
    return selectedCountries.find((c) => c === countryName)
  }, [countryName, selectedCountries])
  return (
    <Button
      title={countryName}
      className={`p-1 h-8 border-[#FF4E50] text-[#FF4E50] m-1 ${selected ? 'border-2 bg-[#F9D423]' : ''}`}
      variant="outline"
      onClick={() => {
        toggleCountry(countryName)
      }}>
      {countryName.charAt(0).toUpperCase() + countryName.slice(1)}
      {selected ? ' ✔️' : ` ${emoji}`}
    </Button>
  )
}

export default SelectableButton
