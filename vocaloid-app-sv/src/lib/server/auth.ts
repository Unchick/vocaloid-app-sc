// src/lib/server/auth.ts
import { query } from './db';
import bcrypt from 'bcryptjs';

export async function findUserByUsername(username: string) {
    const res = await query('SELECT * FROM users WHERE username = $1', [username]);
    return res.rows[0];
}

export async function validatePassword(user: any, password: string) {
    if (!user) return false;
    return bcrypt.compare(password, user.password_hash);
}
