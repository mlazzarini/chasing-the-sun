import Image from 'next/image'
import worldMap from '../../public/world-map.svg'

export default function WorldMap() {
  return (
    <div className="p-10">
      <Image priority src={worldMap} alt="World map" />
    </div>
  )
}
