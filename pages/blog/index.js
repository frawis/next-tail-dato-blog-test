import { useState } from 'react'
import Head from 'next/head'
import { request } from '@/lib/datocms'
import { renderMetaTags } from 'react-datocms'
import { ViewListIcon, CreditCardIcon } from '@heroicons/react/solid'
import { cx } from '@/utils/cx'
import Container from '@/components/container'
import PostCard from '@/components/card/post-card'
import PostList from '@/components/card/post-list'

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  allPosts(first: $limit) {
    id
    title
    excerpt
    slug
    category {
      name
      slug
      color
    }
    author {
      name
      slug
      picture {
        url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
      }
    }
    _publishedAt
    _createdAt
    date
  }
}`

const HOMEPAGE_QUERY_NEW = `query HomePage($first: IntType!, $skip: IntType!) {
  site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }

  allPosts(
    first: $first
    skip: $skip
    orderBy: [_firstPublishedAt_DESC, _createdAt_DESC]
    ) {
    id
    title
    excerpt
    slug
    category {
      name
      slug
      color
    }
    author {
      name
      slug
      picture {
        url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
      }
    }
    _firstPublishedAt
    _createdAt
    date
  }

  meta: _allPostsMeta {
    count
  }
}`

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY_NEW,
    variables: { first: 12, skip: 0 },
    preview: context.preview,
  })

  return {
    props: {
      data,
    },
  }
}

const BlogIndex = ({ data }) => {
  const [postLayout, setPostLayout] = useState('card')
  return (
    <>
      <Head>{renderMetaTags(data.blog.seo.concat(data.site.favicon))}</Head>
      <div className="mt-6 mb-6 lg:mb-12">
        <Container>
          <div className="lg:mt-12">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-extrabold sm:text-5xl sm:truncate">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                  Latest News
                </span>
              </h2>
              <div>
                <div className="inline-flex shadow-sm rounded-md">
                  <button
                    onClick={() => setPostLayout('list')}
                    className={cx(postLayout === 'list' ? 'bg-green-200 hover:bg-green-100' : 'bg-green-100 hover:bg-green-50', 'relative inline-flex items-center px-4 py-2 rounded-l-md border border-green-300  text-sm font-medium text-green-700  focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500')}
                  >
                    <ViewListIcon className={cx(postLayout === 'list' ? 'text-green-500' : 'text-green-700', 'w-5 h-5')} />
                  </button>
                  <button
                    onClick={() => setPostLayout('card')}
                    className={cx(postLayout === 'card' ? 'bg-green-200 hover:bg-green-100' : 'bg-green-100 hover:bg-green-50','-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-green-300 bg-green-100 text-sm font-medium text-green-700 hover:bg-green-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500')}
                  >
                    <CreditCardIcon className={cx(postLayout === 'card' ? 'text-green-500' : 'text-green-700', 'w-5 h-5')} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={cx( postLayout === 'card' ? 'grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12' : 'max-w-4xl mx-auto flex flex-col divide-y divide-green-100' ,'pt-6 lg:pt-12')}>
            {postLayout === 'card' && data.allPosts && data.allPosts.map((blogPost) => <PostCard key={blogPost.id} data={blogPost}/>) }
            {postLayout === 'list' && data.allPosts && data.allPosts.map((blogPost) => <PostList key={blogPost.id} data={blogPost} />) }
          </div>
        </Container>
      </div>
    </>
  )
}

export default BlogIndex
