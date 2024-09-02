import NavBar from '@/components/NavBar'
import ReviewBar from '@/components/ReviewBar'
import ReviewComment from '@/components/ReviewComment'
import ReviewComment2 from '@/components/ReviewComment2'
import React from 'react'

const ReviewDetailPage = () => {
  return (
    <div className="bg-[#ffecdc] bg-cover">
      <NavBar/>
      <div className="flex items-center justify-center mt-20">
        <div className='flec flex-col pb-16'>
        <ReviewBar/>
        <ReviewComment/>
        <ReviewComment2/>
        <ReviewComment/>
        <ReviewComment2/>
        <ReviewComment/>
        <ReviewComment2/>
        <ReviewComment/>
        <ReviewComment2/>
        <ReviewComment/>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetailPage