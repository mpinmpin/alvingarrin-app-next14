import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/libs/connectDB';
import Blog from '@/models/Blog';

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Or specify your origin (for production)
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

export async function GET() {
  await connectDB();

  try {
    const data = await Blog.find();
    return NextResponse.json(data, { headers: { 'Access-Control-Allow-Origin': '*' } }); // Add CORS header
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } } // Add CORS header
    );
  }
}

//this POST route is under testing
export async function POST(req: NextRequest) {
  const { id, title, body, author } = await req.json();
  await connectDB();
  await Blog.create({
    id,
    title,
    body,
    author,
  });
  return NextResponse.json({ message: 'New blog post added successfully' }, { headers: { 'Access-Control-Allow-Origin': '*' } });//Add CORS header
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  await connectDB();
  await Blog.findOneAndDelete({ id: id });
  return NextResponse.json({ message: 'Topic deleted' }, { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } });//Add CORS header
}