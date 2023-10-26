import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginPage from '@/components/sing-in/login'
import ArchivePage from '@/components/sing-in/archive'
import LoggedPage from '@/components/sing-in/logged'
import ServicePage from '@/components/sing-in/service'
import DataPage from '@/components/sing-in/data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
    <LoginPage />
    <ArchivePage />
    <LoggedPage />
    <ServicePage /> 
    <DataPage />
    </>
  )
}
