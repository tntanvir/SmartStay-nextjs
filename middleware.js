import { NextResponse } from 'next/server';
export function middleware(request) {
    const token = request.cookies.get('access')?.value;


    if (!token) {
        return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/deshboard/:path*",
    ],
};
