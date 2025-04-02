import {ReactNode} from 'react'
import Image from "next/image"
import Link from 'next/link'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const Rootlayout = async ({ children }:{children: ReactNode}) => {
  
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex itemms-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className='text-primary-100'>Skillify</h2>
        </Link>
      </nav>
      { children }
    </div>
  )
}

export default Rootlayout 
