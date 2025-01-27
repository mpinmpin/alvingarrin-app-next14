import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/libs/connectDB';
import Blog from '@/models/Blog';

// This code below is refractored from old pages router AND converted into app router version using claude.ai
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    await connectDB();
  
    try {
      const blog = await Blog.findOne({ id: params.id });
      if (!blog) {
        return NextResponse.json(
          { message: 'Blog not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(blog);
    } catch (error) {
      console.error('Error fetching blog:', error);
      return NextResponse.json(
        { message: 'Internal server error' },
        { status: 500 }
      );
    }
  }
  
// for updating

export async function PUT(
	request: NextRequest, 
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	const { title, body, author } = await request.json();
	await connectDB();
	await Blog.findByIdAndUpdate(id, { 
		title,
		body,
		author
	})
	return NextResponse.json({ message: "Blog updated" }, { status: 200 });
  }
  
export async function OPTIONS(request: NextRequest) {
	return new NextResponse(null, {
		status: 204,
		headers: {
			'Allow': 'GET'
		},
	});
}

export async function POST(request :NextRequest) {
		return methodNotAllowed(request);
}

export async function DELETE(request: NextRequest) {
	return methodNotAllowed(request);
}

function methodNotAllowed(request: NextRequest) {
	return NextResponse.json(
		{ message: `Method ${request.method} not allowed` },
		{ status: 405 }
	);
}