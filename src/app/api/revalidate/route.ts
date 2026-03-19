import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * ISR revalidation webhook.
 * Called by the portal admin (or Supabase webhook) when marketing content changes.
 * Busts the Next.js cache for specified paths so updated content appears.
 */
export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidate-secret');
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { paths } = await request.json();

    if (!Array.isArray(paths) || paths.length === 0) {
      return NextResponse.json(
        { error: 'paths array is required' },
        { status: 400 }
      );
    }

    for (const path of paths) {
      revalidatePath(path);
    }

    return NextResponse.json({ revalidated: true, paths });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    );
  }
}
