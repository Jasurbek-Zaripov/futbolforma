// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    if (request.method.toUpperCase() !== 'POST') return NextResponse;
}

export const config = {
    matcher: '/',
};