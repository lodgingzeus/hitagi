import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { logo } from './assets'
import { MdLightMode, MdNightsStay } from 'react-icons/md'
import { AiOutlineQq } from 'react-icons/ai'
import { Home, CreatePost } from './pages'

const App = () => {
  
  const [ isDark, setIsDark ] = useState(true)

  useEffect(() => {
    console.log('hello')
    console.log(isDark)
  }, [isDark])

  const changeTheme = () => {
    setIsDark(prevState => !prevState)
  }

  return (
    <BrowserRouter>
      <header className={`w-full flex justify-between items-center ${isDark ? 'bg-[#1B2430] border-b-[#000]' : 'bg-white border-b-[#e6ebf4]'} sm:px-8 px-4 py-4 border-b `}>
        <Link to = "/">
          <AiOutlineQq color={`${isDark ? 'white' : 'black'}`} size={54}/>
        </Link>
        <div className='flex items-center justify-between'>
        {isDark ? (
          <MdLightMode className={`mx-4 text-3xl hover:cursor-pointer ${isDark ? 'text-[#FB2576]' : 'text-black'}`} onClick={changeTheme}/>
        ) : (
          <MdNightsStay className={`mx-4 text-3xl hover:cursor-pointer ${isDark ? 'text-[#FB2576]' : 'text-black'}`} onClick={changeTheme}/>
        )}
        <Link to= "/create-post" className={`font-inter font-medium ${isDark ? 'bg-[#FB2576]' : 'bg-[#6469ff]'} text-white px-4 py-2 rounded-md`}>
          Create
        </Link>
        </div>
      </header>
      <main className={`sm:p-8 px-4 py-8 w-full ${isDark ? 'bg-gray-700' : 'bg-[#f9fafe]'} min-h-[calc(100vh-73px)]`}>
          <Routes>
            <Route path='/' element = {<Home isDark = {isDark}/>}/>
            <Route path='/create-post' element = {<CreatePost isDark = {isDark}/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App