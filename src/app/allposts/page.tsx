'use client'

import MainWrapper from '@/components/MainWrapper'
import { FunctionComponent, useCallback, useEffect, useState } from 'react'
import { Post, allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import FilterByCountry from '@/components/FilterByCountry'
import PostsChunks from '@/components/PostsChunks'

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
      <PostsChunks posts={filteredPosts} />
    </MainWrapper>
  )
}

export default AllPosts
