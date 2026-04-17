const BASE_URL = "http://localhost:3000/api/v1/pacientes";

export async function getPacientes() {
    const res = await fetch(BASE_URL);
    return res.json();
}

export async function createPaciente(data) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function updatePaciente(id, data) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deletePaciente(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}
