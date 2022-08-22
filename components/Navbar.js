import React from 'react'
import { Disclosure } from '@headlessui/react'

export default function Navbar({ navigation }) {
  return (
    <>
        <div>
            {navigation.map((item, index) => (
                <div key={index}>{item.title}</div>
            ))}
        </div>
    </>
  )
}
