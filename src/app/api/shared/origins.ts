// src/app/api/shared/cors.ts

import { NextRequest } from 'next/server';

const allowedOriginsBase = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS?.split(',').map(o => o.trim()) || [];

/**
 * Returns a CORS-ready header object based on the request's Origin.
 */
export function createCORSHeaders(req: NextRequest): HeadersInit {
    const origin = req.headers.get('origin');
    const allowedOrigins : string[] = [];

    allowedOriginsBase.forEach(o => {
        allowedOrigins.push(`https://${o}`);
        allowedOrigins.push(`https://www.${o}`);
    });

    console.log('Allowed Origins:', allowedOrigins);
    const isAllowed = origin && allowedOrigins.includes(origin);

    return {
        'Access-Control-Allow-Origin': isAllowed ? origin! : 'null',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
    };
}

/**
 * Handles CORS preflight requests (OPTIONS method).
 */
export function handlePreflight(req: NextRequest): Response {
    const headers = createCORSHeaders(req);
    return new Response(null, {
        status: 204,
        headers,
    });
}
