import React from 'react'

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-gray-600">Learn more about our mission and team.</p>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default AboutLayout