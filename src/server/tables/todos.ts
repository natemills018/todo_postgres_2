import { SelectQuery, ModifyQuery } from "../queryUtils";


export function getOne(id: number) {
    return SelectQuery('SELECT * FROM todolist')
}