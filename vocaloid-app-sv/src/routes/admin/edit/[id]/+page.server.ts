import { fail, redirect, error } from '@sveltejs/kit';
import { query } from '$lib/server/db';

export async function load({ params, cookies }) {
    const session = cookies.get('session');
    if (!session) throw redirect(302, '/login');

    const user = JSON.parse(session);
    if (!user.isAdmin) throw redirect(302, '/login');

    const id = params.id;

    const res = await query('SELECT * FROM albums WHERE id = $1', [id]);
    const album = res.rows[0];

    if (!album) throw error(404, 'Album not found');

    return { album };
}

export const actions = {
    default: async ({ request, params, cookies }) => {
        const session = cookies.get('session');
        if (!session) throw redirect(302, '/login');

        const user = JSON.parse(session);
        if (!user.isAdmin) throw redirect(302, '/login');

        const id = params.id;

        const formData = await request.formData();
        const name = formData.get('name') as string;
        const artist = formData.get('artist') as string;
        const release_date = formData.get('release_date') as string;
        const cover_url = formData.get('cover_url') as string;
        const description = formData.get('description') as string;

        if (!name || !artist) {
            return fail(400, { error: 'Name and artist are required' });
        }

        await query(
            `UPDATE albums SET name = $1, artist = $2, release_date = $3, cover_url = $4, description = $5 WHERE id = $6`,
            [name, artist, release_date || null, cover_url || null, description || null, id]
        );

        throw redirect(302, '/admin');
    }
};
