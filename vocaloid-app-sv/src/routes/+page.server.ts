
import { query } from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const sort = url.searchParams.get('sort') || 'newest';

    let orderClause = 'ORDER BY id DESC';
    if (sort === 'oldest') orderClause = 'ORDER BY id ASC';
    if (sort === 'name') orderClause = 'ORDER BY LOWER(name) ASC';
    if (sort === 'artist') orderClause = 'ORDER BY LOWER(artist) ASC';

    const res = await query(`SELECT * FROM albums ${orderClause}`);
    const albums = res.rows;

    return {
        albums,
        sort
    };
}

