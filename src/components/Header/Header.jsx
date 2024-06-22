import React from 'react'
import Container from "../Container"
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Business",
      slug: "/business",
      active: true,
  },
  {
      name: "Entertainment",
      slug: "/entertainment",
      active: true,
  },
  {
      name: "General",
      slug: "/general",
      active: true,
  },
  {
    name: "Health",
    slug: "/health",
    active: true,
  },
  {
    name: "Science",
    slug: "/science",
    active: true,
  },
  {
    name: "Sports",
    slug: "/sports",
    active: true,
  },
  {
    name: "Technology",
    slug: "/technology",
    active: true,
  },
  ]

  return (
    <>

    <header className='flex flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700'>
        <Container>
        <nav className='flex flex-row sm:flex-col justify-between items-center w-[100%] md:w-full ml-[139px] md:ml-5 sm:gap-10'>
        <div className="flex flex-col justify-between items-center w-[80%] sm:w-full">
          
          <div className="border-2 border-gray-400 m-0 w-full mb-2"></div>
          {/* NavItems */}
          <ul className='flex flex-row items-center text-md justify-start gap-1'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-red-100 text-xs rounded-full font-bold text-black hover:!text-red-50 hover:scale-110 tracking-[0.12px] text-center'
                >{item.name}</button>
              </li>
            ) : null
            )}
          </ul>
          <div className="border-2 border-gray-400 m-0 w-full mt-2"></div>

            <div>
            <img src="name.png" className='w-44 mt-10'/>
            </div>

          </div>
        </nav>
        </Container>
    </header>
    </>
  )
}

export default Header