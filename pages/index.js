import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'
import { request } from '@/lib/datocms'

const SITESEO_QUERY = `query SiteInfo {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  start {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }
}`

export async function getStaticProps(context) {
  const data = await request({
    query: SITESEO_QUERY,
    preview: context.preview,
  })

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>{renderMetaTags(data.start.seo.concat(data.site.favicon))}</Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="font-display text-6xl font-extrabold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            <span className="font-bold text-green-700">Black</span>
            <span className="text-green-500 font-light">Nickr</span>
          </a>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
