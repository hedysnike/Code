import { Suspense } from 'react'
import { Icon } from '@iconify/react';

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
 
  const demoCode = `import { Button } from '@mantine/core';

  
  function Demo() {
    return <Button>Hello</Button>
  }`;
  
  
 
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
aegaeg
      <pre className='text-white bg-[#1A1B1E]'>
      <Icon icon="iconamoon:copy" />
        {demoCode}
      </pre>


    </main>
  )
}
