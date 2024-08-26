import Image from 'next/image'
import { FunctionComponent } from 'react'
import planeIcon from '../../public/plane.svg'

const FiltersDivider: FunctionComponent = () => (
  <Image
    className="size-3 rotate-150 m-1"
    priority
    src={planeIcon}
    alt="plane icon"
  />
)

export default FiltersDivider
