import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=' max-w-screen-2xl mx-auto bg-gray-100'>
        <nav>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </nav>
    </header>
  )
}

export default Header