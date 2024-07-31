import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className="flex-1 container">
        <Section />
      </main>
      <Footer />
    </div>
  )
}

export default Main


export const Section = () => {
  return (
    <section className="p-40 shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">메인 화면</h2>
        <p className="mb-6">안녕하세요~! React x Tailwind 기본 프로젝트입니다.</p>
        <Link to="/login">
          <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-lg hover:bg-yellow-500">
            Login
          </button>
        </Link>
      </div>
    </section>
  )
}
