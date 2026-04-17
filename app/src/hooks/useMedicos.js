import { useEffect, useState } from "react";
import {
    getMedicos,
    createMedico,
    updateMedico,
    deleteMedico,
} from "../api/MedicosApi.js";

export function useMedicos() {
    const [medicos, setMedicos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchMedicos() {
        try {
            setLoading(true);
            const json = await getMedicos();
            setMedicos(json.data || json || []);
        } catch (error) {
            console.error(error);
            setMedicos([]);
        } finally {
            setLoading(false);
        }
    }

    async function saveMedico(editingMedico, form) {
        if (editingMedico) {
            await updateMedico({
                id: editingMedico.id,
                ...form,
            });
        } else {
            await createMedico(form);
        }

        await fetchMedicos();
    }

    async function removeMedico(id) {
        await deleteMedico({ id });
        await fetchMedicos();
    }

    useEffect(() => {
        fetchMedicos();
    }, []);

    return {
        medicos,
        loading,
        fetchMedicos,
        saveMedico,
        removeMedico,
    };
}