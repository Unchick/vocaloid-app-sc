import pkg from 'pg';
const { Pool } = pkg;

// DIRECT connection without .env
const pool = new Pool({
    connectionString: 'postgresql://postgres:eee@localhost:5432/vocaloid_app'
});

export async function query(text: string, params?: any[]) {
    const res = await pool.query(text, params);
    return res;
}
