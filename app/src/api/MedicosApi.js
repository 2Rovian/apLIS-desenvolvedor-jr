const BASE_URL = "http://localhost:8080/api/v1/medicos";

export async function getMedicos() {
    const res = await fetch(BASE_URL);
    return res.json();
}

export async function createMedico(data) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function updateMedico(data) {
    return fetch(BASE_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function deleteMedico(data) {
    return fetch(BASE_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}