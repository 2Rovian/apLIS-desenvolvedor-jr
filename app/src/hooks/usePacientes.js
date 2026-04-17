import { useEffect, useState } from "react";
import { getPacientes, createPaciente, deletePaciente, updatePaciente } from "../api/PacientesApi.js";

export function usePacientes(){
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchPacientes() {
        try {
            setLoading(true);
            const json = await getPacientes();
            setPacientes(json || []);
        } catch (error) {
            console.error(error);
            setPacientes([]);
        } finally {
            setLoading(false)
        }
    }

    async function savePaciente(editingPaciente, form) {
        if(editingPaciente) {
            await updatePaciente(editingPaciente.id, form);
        } else {
            await createPaciente(form);
        }

        await fetchPacientes();
    }

    async function removePaciente(id) {
        await deletePaciente(id);
        await fetchPacientes();
    }

    useEffect(() => {
        fetchPacientes();
    }, []);

    return {
        pacientes, loading, fetchPacientes, savePaciente, removePaciente
    };
}