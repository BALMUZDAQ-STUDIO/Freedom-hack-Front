export async function authorizeUser({ login, password }) {
    try {
        const response = await fetch('/api/v1/users/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password }),
            credentials: 'include', 
        });

        if (!response.ok) {
            return false;
        }

        return true;
    } catch (error) {
        console.error('Ошибка при авторизации пользователя:', error);
        throw error;
    }
}



export const logoutUser = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    console.log('Пользователь вышел, token удален.');
}