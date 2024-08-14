import pool from './connection';

export async function SelectQuery<T>(sql:string, values: unknown[] = []) {
    const results = await pool.query(sql, values)
    return results.rows as T[];
}

export async function ModifyQuery(sql: string, values: unknown[] = []) {
    const results = await pool.query(sql, values)


    if(results.command === "INSERT") {
        const [newItem] = results.rows;
    if (!newItem) {
        return results;
    }
} else {
    return results
}
}