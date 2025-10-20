import { api } from "@/_lib/axios";
import { CreateUserInput, User } from "../types";

export async function createUser(data: CreateUserInput): Promise<User> {
    const res = await api.post("/users", data);
    return res.data;
}
