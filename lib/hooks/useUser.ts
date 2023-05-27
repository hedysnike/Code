import prisma from '@/lib/prisma'

export async function UseUsers() {
    const users = await prisma.users.findMany()
    
    
}