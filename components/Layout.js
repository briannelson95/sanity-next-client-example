import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="h-screen">
        <div className='mx-5'>
            {children}
        </div>
    </div>
  )
}
