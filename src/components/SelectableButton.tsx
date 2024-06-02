import React, { FunctionComponent, useMemo } from 'react'
import { Button } from './ui/button'

interface SelectableButtonProps {
  countryName: string
  text: string
  toggleCountry: (country: string) => void
  emoji: string
  selectedCountries: string[]
}

const SelectableButton: FunctionComponent<SelectableButtonProps> = ({
  countryName,
  text,
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
      {text}
      {selected ? ' ✔️' : ` ${emoji}`}
    </Button>
  )
}

export default SelectableButton
//border-${selected ? '1' : '2'}
