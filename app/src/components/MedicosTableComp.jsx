import { useEffect, useState } from "react";

export default function MedicosTableComp() {
    const [medicos, setMedicos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchMedicos() {
        try {
            setLoading(true);

            const res = await fetch("http://localhost:8080/api/v1/medicos");
            const json = await res.json();

            setMedicos(json.data || []);
        } catch (err) {
            console.error(err);
            setMedicos([]);
        } finally {
            setLoading(false);
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
                    onClick={fetchMedicos}
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
                                <td colSpan={4} className="p-4 text-center text-slate-500">
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
        </div>
    );
}