import { NextRequest } from 'next/server'

import { redirect } from 'next/navigation';

export async function GET (_req: NextRequest) {
    redirect('/')
}