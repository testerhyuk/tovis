import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicLayout({children}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 로고 */}
      <div className="text-center py-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold">작업 일지 시스템</h1>
      </div>

      {/* 네비게이션 바 */}
      <nav className="bg-blue-600 text-white flex justify-center space-x-8 py-3">
        <button className="hover:bg-blue-700 px-4 py-2 rounded"><Link to={"/"}>작업 일지</Link></button>
        <button className="hover:bg-blue-700 px-4 py-2 rounded"><Link to={"/works"}>작업 작성</Link></button>
      </nav>

      <div>
        {children}
      </div>
    </div>
  )
}
