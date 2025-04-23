//
// import { redirect } from '@sveltejs/kit';
// import { query } from '$lib/server/db';
//
// export async function load({ cookies }) {
//     const session = cookies.get('session');
//
//     if (!session) {
//         throw redirect(302, '/login');
//     }
//
//     const user = JSON.parse(session);
//
//     if (!user.isAdmin) {
//         throw redirect(302, '/login');
//     }
//
//     const res = await query('SELECT * FROM albums ORDER BY id DESC');
//     const albums = res.rows;
//
//     return {
//         albums
//     };
//     console.log('Albums loaded:', albums);
// }
import { query } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    const session = cookies.get('session');

    if (!session) {
        throw redirect(302, '/login');
    }

    const user = JSON.parse(session);

    if (!user.isAdmin) {
        throw redirect(302, '/login');
    }

    const res = await query('SELECT * FROM albums ORDER BY id DESC');
    const albums = res.rows;

    return { albums };
}

export const actions = {
    delete: async ({ request, cookies }) => {
        const session = cookies.get('session');
        if (!session) {
            throw redirect(302, '/login');
        }

        const user = JSON.parse(session);
        if (!user.isAdmin) {
            throw redirect(302, '/login');
        }

        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) {
            return fail(400, { error: 'Album ID is required for deletion' });
        }

        await query('DELETE FROM albums WHERE id = $1', [id]);

        throw redirect(302, '/admin');
    }
};
