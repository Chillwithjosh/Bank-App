import React from 'react'
import LatestArticleCard from '../components/LatestArticleCard'
import { LatestArticle } from '../constants'

const LatestArticles = () => {
  return (
    <section id='LatestArticles' className='padding-x'>
      <div>
        <h1 className='text-DarkBlue max-sm:text-[30px] md:text-[3rem] max-lg:text-center'>Latest Article</h1>
      </div>
      <div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-1 grid-cols-1 sm:gap-4 gap-14" >
        {LatestArticle.map((LatestArticle =>(
          <LatestArticleCard key= {LatestArticle.customerName} {...LatestArticle}/>
        )))}
      </div>
      </div>
    </section>
  )
}

export default LatestArticles