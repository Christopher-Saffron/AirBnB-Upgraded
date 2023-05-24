import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { MenuIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import Image from 'next/image'

function HeaderMenu() {
    // onClick={() => {router.push('/register')}}
    const { data: session } = useSession()
    const [isMenuOpen, toggleMenu] = useState(false)
    const router = useRouter()

    function handleClick () {
        if (!session) router.push('/register')
    }

    function logOut () {
        signOut()
    }

    function logIn () {
        signIn()
    }

    function history () {
        router.push('/history')
    }

    function handleMenuOpen(bool) {
        if (!bool) {
              document.querySelectorAll('.headerMenuOption').forEach(item => item.classList.add('headerMenuOptionHide'))
            setTimeout(() => {
                toggleMenu(bool)
            }, 400)
        } else {
            toggleMenu(bool)
        }
    }

  return (
    <>
        <div onClick={() => {toggleMenu(!isMenuOpen)}} className='flex group items-center relative space-x-2 border-2 p-2 rounded-full cursor-pointer duration-200 transition hover:border-[#FD5B61] hover:bg-red-300' >
            <MenuIcon className='h-6' />
            <div>
                {session ? (
                    <Image width={30} height={30} src={session.user.image} alt='' className='object-fit rounded-full' />
                ) : (
                    <UserCircleIcon className='h-6' />
                )}
            </div>
            {isMenuOpen && (
                <div className='  text-gray-800 flex flex-col gap-2 font-semibold text-2xl absolute top-full max-w-[250px] right-0 mt-5 bg-white shadow-xl p-2  rounded-b-md'>
                    {session ? (
                        <>
                            <button onClick={history} className='bg-white hover:bg-[#FD5B61] hover:text-white duration-200 py-1 shadow-md cursor-pointer border-2 w-[150px] max-w-[250px] rounded-md headerMenuOption relative'>History</button>
                            <button onClick={logOut} className='bg-white hover:bg-[#FD5B61] hover:text-white duration-200 py-1 shadow-md cursor-pointer border-2 w-[150px] max-w-[250px] rounded-md headerMenuOption relative'>Logout</button>
                        </>
                    ) : (
                        <button onClick={logIn} className='bg-white hover:bg-[#FD5B61] hover:text-white duration-200 py-1 shadow-md cursor-pointer border-2 w-[150px] max-w-[250px] rounded-md headerMenuOption relative'>Login</button>
                )}
            
                </div>
                )}   
        </div>
    </>
  )
}

export default HeaderMenu