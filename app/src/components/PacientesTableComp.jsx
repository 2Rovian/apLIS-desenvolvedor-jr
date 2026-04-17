import { useEffect, useState } from "react";

export default function PacientesTableComp() {
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchPacientes() {
        try {
            setLoading(true);

            const res = await fetch("http://localhost:3000/api/v1/pacientes");
            const json = await res.json();
            setPacientes(json);
        } catch (err) {
            console.error(err);
            setPacientes([]);
        } finally {
            setLoading(false);
        }
    }

    function handleEdit(paciente) {
        console.log("Editar paciente:", paciente);
    }

    async function handleDelete(id) {

        try {
            await fetch("http://localhost:3000/api/v1/pacientes", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            fetchPacientes();
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchPacientes();
    }, []);

    if (loading) {
        return <p className="mt-4 text-slate-500">Carregando pacientes...</p>;
    }

    return (
        <div className="mt-6 bg-white border-slate-300 border rounded-md shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                <h2 className="font-semibold text-slate-800">Lista de Pacientes</h2>

                <button
                    onClick={fetchPacientes}
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
                                <tr
                                    key={p.id}
                                    className="hover:bg-slate-50 transition border-b border-slate-300"
                                >
                                    <td className="p-3">{p.id}</td>
                                    <td className="p-3">{p.nome}</td>
                                    <td className="p-3">{p.dataNascimento.split("T")[0] || "-"}</td>
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
        </div>
    );
}