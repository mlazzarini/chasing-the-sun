'use client'

import MainWrapper from '@/components/MainWrapper'
import { FunctionComponent, useCallback, useEffect, useState } from 'react'
import { Post, allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import PostTeaser from '@/components/PostTeaser'
import FilterByCountry from '@/components/FilterByCountry'

const AllPosts: FunctionComponent = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const orderedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(orderedPosts)

  useEffect(() => {
    if (selectedCountries.length > 0) {
      const newPosts = orderedPosts.filter((post) =>
        selectedCountries.includes(post.country)
      )
      setFilteredPosts(newPosts)
      return
    }
    setFilteredPosts(orderedPosts)
  }, [selectedCountries, orderedPosts])

  const toggleCountry = useCallback(
    (country: string) => {
      if (selectedCountries.find((c) => c === country)) {
        const newCountryList = selectedCountries.filter((c) => c !== country)
        setSelectedCountries(newCountryList)
        return
      }
      setSelectedCountries([...selectedCountries, country])
    },
    [selectedCountries]
  )

  return (
    <MainWrapper title="All posts">
      <FilterByCountry
        toggleCountry={toggleCountry}
        selectedCountries={selectedCountries}
      />
      {filteredPosts.map((post, idx) => (
        <PostTeaser key={idx} {...post} />
      ))}
    </MainWrapper>
  )
}

export default AllPosts
