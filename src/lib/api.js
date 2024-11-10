export async function authorizeUser({ login, password }) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/users/sessions', {
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


export async function createVacancy({title,
									password,
									specification,
									equired_count,
									urgency,
									salary,
									links,
									descriptions}) {

    try {
        const response = await fetch('http://localhost:3000/api/v1/vacancies/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title,
									password,
									specification,
									equired_count,
									urgency,
									salary,
									links,
									descriptions}),
            credentials: 'include'
        });

        if (!response.ok) {
            return { "success": false };
        }

        return { "success": true, "id": response.json().id };
    } catch (error) {
        console.error('Ошибка при авторизации пользователя:', error);
        throw error;
    }
}



export async function getVacancies({ filter, count = 30 }) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/vacancies/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filter, count }),
            credentials: 'include', 
        });

        if (!response.ok) {
            return { "success": false };
        }

        return { "success": true, "vacancies": response.json() };
    } catch (error) {
        console.error('Ошибка при авторизации пользователя:', error);
        throw error;
    }
}



export async function getEmployeesFromVacancy({ vacancy_id, filter, count = 30 }) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/vacancies/${vacancy_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ vacancy_id, filter, count = 30 }),
            credentials: 'include', 
        });

        if (!response.ok) {
            return false;
        }

        return { "success": true, "vacancies": response.json() };
    } catch (error) {
        console.error('Ошибка при авторизации пользователя:', error);
        throw error;
    }
}



export async function getEmployees({ filter, count = 30 }) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/employees/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filter, count}),
            credentials: 'include', 
        });

        if (!response.ok) {
            return false;
        }

        return { "success": true, "vacancies": response.json() };
    } catch (error) {
        console.error('Ошибка при авторизации пользователя:', error);
        throw error;
    }
}




export async function sendEmployeesFiles( /*?????*/) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/users/sessions', {
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


export async function createEmployeesFromFileID(files_id) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/users/sessions', {
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