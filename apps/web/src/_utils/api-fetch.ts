const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch(path: string, options?: RequestInit) {
    const response = await fetch(`${BASE_URL}${path}`, options);
    if (!response.ok) throw new Error("Network error");
    return response.json();
}
