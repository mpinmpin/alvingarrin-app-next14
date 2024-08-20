import { NextResponse } from 'next/server';
import connectDB from '../../libs/connectDB';
import Blog from '../../models/Blog';

export async function GET() {
  await connectDB();
  
  try {
    const data = await Blog.find();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}