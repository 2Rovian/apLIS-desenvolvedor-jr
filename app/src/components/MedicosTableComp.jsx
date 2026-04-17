import { useEffect, useState } from "react";
import ModalComp from "./ModalComp";
import { useMedicos } from "../hooks/useMedicos";

export default function MedicosTableComp() {
    const { medicos, loading, fetchMedicos, removeMedico, saveMedico } = useMedicos();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMedico, setEditingMedico] = useState(null);

    const [form, setForm] = useState({
        id: "",
        nome: "",
        CRM: "",
        UFCRM: "",
    });

    async function handleDelete(id) {
        if (!confirm("Deseja excluir este médico?")) return;

        try {
            await removeMedico(id);
        } catch (err) {
            console.error("Erro ao deletar médico:", err);
        }
    }
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function openCreateModal() {
        setEditingMedico(null);

        setForm({
            id: "",
            nome: "",
            CRM: "",
            UFCRM: "",
        });

        setIsModalOpen(true);
    }

    function handleEdit(m) {
        setEditingMedico(m);

        setForm({
            id: m.id,
            nome: m.nome,
            CRM: m.CRM,
            UFCRM: m.UFCRM,
        });

        setIsModalOpen(true);
    }

    async function handleSubmit() {
        try {
            await saveMedico(editingMedico, form);

            setIsModalOpen(false);
            setEditingMedico(null);

            setForm({
                id: "",
                nome: "",
                CRM: "",
                UFCRM: "",
            });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchMedicos();
    }, []);

    if (loading) {
        return <p className="mt-4 text-slate-500">Carregando médicos...</p>;
    }

    return (
        <div className="mt-6 bg-white border-slate-300 border rounded-md shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                <h2 className="font-semibold text-slate-800">Lista de Médicos</h2>

                <button
                    onClick={openCreateModal}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                    Cadastrar
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-100 text-slate-700">
                        <tr>
                            <th className="p-3 border-b border-slate-300">ID</th>
                            <th className="p-3 border-b border-slate-300">Nome</th>
                            <th className="p-3 border-b border-slate-300">CRM</th>
                            <th className="p-3 border-b border-slate-300">UFCRM</th>
                            <th className="p-3 border-b border-slate-300 text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {medicos.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-4 text-center text-slate-500">
                                    Nenhum médico encontrado
                                </td>
                            </tr>
                        ) : (
                            medicos.map((m) => (
                                <tr
                                    key={m.id}
                                    className="hover:bg-slate-50 transition border-b border-slate-300"
                                >
                                    <td className="p-3">{m.id}</td>
                                    <td className="p-3">{m.nome}</td>
                                    <td className="p-3">{m.CRM}</td>
                                    <td className="p-3">{m.UFCRM}</td>
                                    <td className="p-3">
                                        <div className="flex gap-x-2 items-center justify-center">
                                            <button
                                                className="px-3 cursor-pointer py-1 rounded-md text-sm font-medium border border-blue-500 text-blue-600 hover:bg-blue-50 duration-200"
                                                onClick={() => handleEdit(m)}
                                            >
                                                Editar
                                            </button>

                                            <button
                                                className="px-3 cursor-pointer py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-600 hover:border-red-500 hover:text-red-600 hover:bg-red-50 duration-200"
                                                onClick={() => handleDelete(m.id)}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <ModalComp
                    title={editingMedico ? "Editar Médico" : "Cadastrar Médico"}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="flex flex-col gap-3">

                        <input
                            name="id"
                            placeholder="Id"
                            value={form.id}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            name="nome"
                            placeholder="Nome"
                            value={form.nome}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            name="CRM"
                            placeholder="CRM"
                            value={form.CRM}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            name="UFCRM"
                            placeholder="UFCRM"
                            value={form.UFCRM}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Salvar
                        </button>
                    </div>
                </ModalComp>
            )}

        </div>
    );
}