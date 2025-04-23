import { fail, redirect } from '@sveltejs/kit';
import { findUserByUsername, validatePassword } from '$lib/server/auth';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const user = await findUserByUsername(username);

        if (!user) {
            return fail(400, { error: 'Invalid username or password' });
        }

        const valid = await validatePassword(user, password);

        if (!valid) {
            return fail(400, { error: 'Invalid username or password' });
        }

        cookies.set('session', JSON.stringify({
            userId: user.id,
            username: user.username,
            isAdmin: user.is_admin
        }), {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            maxAge: 60 * 5 * 1 // 5 min
        });

        throw redirect(302, '/admin');
    }
};
