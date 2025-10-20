// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createUser } from "../api/user-create";
// import type { CreateUserInput, User } from "../types";

// export function useUserCreate() {
//     const queryClient = useQueryClient();

//     return useMutation<User, Error, CreateUserInput>({
//         mutationFn: createUser,

//         onSuccess: (data) => {
//             console.log("User created:", data);
//         },

//         onError: (error) => {
//             console.error("Failed to create user:", error);
//         },
//     });
// }
