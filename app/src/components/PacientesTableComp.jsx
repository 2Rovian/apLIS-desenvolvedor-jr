import { useEffect, useState } from "react";
import ModalComp from "./ModalComp";
import { usePacientes } from "../hooks/usePacientes";

export default function PacientesTableComp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPaciente, setEditingPaciente] = useState(null);

    const { pacientes, loading, savePaciente, removePaciente } = usePacientes();

    const [form, setForm] = useState({
        id: "",
        nome: "",
        dataNascimento: "",
        carteirinha: "",
        cpf: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function openCreateModal() {
        setEditingPaciente(null);

        setForm({
            id: "",
            nome: "",
            dataNascimento: "",
            carteirinha: "",
            cpf: "",
        });

        setIsModalOpen(true);
    }

    function handleEdit(p) {
        setEditingPaciente(p);

        setForm({
            id: p.id,
            nome: p.nome,
            dataNascimento: p.dataNascimento
                ? p.dataNascimento.split("T")[0]
                : "",
            carteirinha: p.carteirinha,
            cpf: p.cpf,
        });

        setIsModalOpen(true);
    }

    async function handleSubmit() {
        await savePaciente(editingPaciente, form);

        setIsModalOpen(false);
        setEditingPaciente(null);

        setForm({
            id: "",
            nome: "",
            dataNascimento: "",
            carteirinha: "",
            cpf: "",
        });
    }

    async function handleDelete(id) {
        if (!confirm("Deseja excluir este paciente?")) return;

        try {
            await removePaciente(id);
        } catch (err) {
            console.error("Erro ao deletar paciente:", err);
        }
    }

    if (loading) {
        return <p className="mt-4 text-slate-500">Carregando pacientes...</p>;
    }

    return (
        <div className="mt-6 bg-white border-slate-300 border rounded-md shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-300 flex justify-between items-center">
                <h2 className="font-semibold text-slate-800">Lista de Pacientes</h2>

                <button
                    onClick={openCreateModal}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                    Cadastrar
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-100 text-slate-700 ">
                        <tr>
                            <th className="p-3 border-b border-slate-300">ID</th>
                            <th className="p-3 border-b border-slate-300">Nome</th>
                            <th className="p-3 border-b border-slate-300">Nascimento</th>
                            <th className="p-3 border-b border-slate-300">Carteirinha</th>
                            <th className="p-3 border-b border-slate-300">CPF</th>
                            <th className="p-3 border-b border-slate-300 text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pacientes.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="p-4 text-center text-slate-500">
                                    Nenhum paciente encontrado
                                </td>
                            </tr>
                        ) : (
                            pacientes.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50 transition border-b border-slate-300">
                                    <td className="p-3">{p.id}</td>
                                    <td className="p-3">{p.nome}</td>
                                    <td className="p-3">
                                        {p.dataNascimento
                                            ? p.dataNascimento.split("T")[0]
                                            : "-"}
                                    </td>
                                    <td className="p-3">{p.carteirinha}</td>
                                    <td className="p-3">{p.cpf}</td>

                                    <td className="p-3">
                                        <div className="flex gap-x-2 items-center justify-center">
                                            <button
                                                className="px-3 cursor-pointer py-1 rounded-md text-sm font-medium border border-blue-500 text-blue-600 hover:bg-blue-50 duration-200"
                                                onClick={() => handleEdit(p)}
                                            >
                                                Editar
                                            </button>

                                            <button
                                                className="px-3 cursor-pointer py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-600 hover:border-red-500 hover:text-red-600 hover:bg-red-50 duration-200"
                                                onClick={() => handleDelete(p.id)}
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
                    title={editingPaciente ? "Editar Paciente" : "Cadastrar Paciente"}
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
                            type="date"
                            name="dataNascimento"
                            value={form.dataNascimento}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            name="carteirinha"
                            placeholder="Carteirinha"
                            value={form.carteirinha}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            name="cpf"
                            placeholder="CPF"
                            value={form.cpf}
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