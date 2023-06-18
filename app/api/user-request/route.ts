import { NextResponse } from "next/server"

type VectorRequest = {
 
    title?: string,
    description?: string,
    email?: string,
}

export async function POST(request: Request) {
    const data: VectorRequest = await request.json()
    console.log('data:', data)
    
    const {  title, description, email } = data

    return NextResponse.json({ title, description, email})


    
}