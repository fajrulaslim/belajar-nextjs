import React, { ReactNode } from 'react'
import Header from "../Header"
import Footer from "../Footer"
import Head from 'next/head';
import Image from 'next/image';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={pageTitle} />
      </Head>
      <div className='h-screen flex flex-col'>
        <Header />
        <div className='container mx-auto'>{children}</div>
        <div className="container mx-auto">
          <div className="w-20">
            <Image src="/images/download.jpg" width={200} height={200} alt="Profile" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
