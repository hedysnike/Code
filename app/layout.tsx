import { Sidebar } from '../components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Vercel Postgres Demo with Prisma',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <div className="flex">
        
        <div className="hidden lg:flex">
      <Sidebar />
        </div>

      <div className="lg:w-[calc(100%_-_225px)] bg-black">
      {children}
      </div>

        </div>
        </body>
    </html>
  )
}
