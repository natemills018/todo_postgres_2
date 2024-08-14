import pg from "pg";
import config from "../config";


const pool = new pg.Pool(config.postgres)

export default pool;



