//
import { redirect, fail } from '@sveltejs/kit';
import { query } from '$lib/server/db';
//
// export const actions = {
//     default: async ({ request, cookies }) => {
//         const session = cookies.get('session');
//
//         if (!session) {
//             throw redirect(302, '/login');
//         }
//
//         const user = JSON.parse(session);
//         if (!user.isAdmin) {
//             throw redirect(302, '/login');
//         }
//
//         const formData = await request.formData();
//         const name = formData.get('name') as string;
//         const artist = formData.get('artist') as string;
//         const release_date = formData.get('release_date') as string;
//         const cover_url = formData.get('cover_url') as string;
//         const description = formData.get('description') as string;
//
//         if (!name || !artist) {
//             return fail(400, { error: 'Name and artist are required' });
//         }
//
//         await query(
//             `INSERT INTO albums (name, artist, release_date, cover_url, description)
//        VALUES ($1, $2, $3, $4, $5)`,
//             [name, artist, release_date || null, cover_url || null, description || null]
//         );
//
//         throw redirect(302, '/admin');
//     }
// };
export const actions = {
    default: async ({ request, cookies }) => {
        const session = cookies.get('session');
        if (!session) throw redirect(302, '/login');

        const user = JSON.parse(session);
        if (!user.isAdmin) throw redirect(302, '/login');

        const formData = await request.formData();
        const name = (formData.get('name') as string)?.trim();
        const artist = (formData.get('artist') as string)?.trim();
        const release_date = (formData.get('release_date') as string)?.trim();
        const cover_url = (formData.get('cover_url') as string)?.trim();
        const description = (formData.get('description') as string)?.trim();

        // === VALIDATION ===
        const errors = [];

        if (!name || name.length < 1 || name.length > 100) {
            errors.push('Album name must be 1–100 characters.');
        }

        if (!artist || artist.length < 1 || artist.length > 100) {
            errors.push('Artist name must be 1–100 characters.');
        }

        if (release_date && isNaN(Date.parse(release_date))) {
            errors.push('Invalid release date.');
        }

        if (cover_url && !/^https?:\/\/.+\..+/.test(cover_url)) {
            errors.push('Cover URL must be a valid http or https URL.');
        }

        if (description && description.length > 1000) {
            errors.push('Description must be less than 1000 characters.');
        }

        if (errors.length > 0) {
            return fail(400, { errors, values: { name, artist, release_date, cover_url, description } });
        }

        await query(
            `INSERT INTO albums (name, artist, release_date, cover_url, description)
       VALUES ($1, $2, $3, $4, $5)`,
            [name, artist, release_date || null, cover_url || null, description || null]
        );

        throw redirect(302, '/admin');
    }
};
