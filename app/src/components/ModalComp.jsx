// components/ModalComp.tsx

export default function ModalComp({ title, onClose, children }) {


  return (
    <div className="fixed inset-0 z-50 flex justify-center">
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      <div className="relative bg-white w-full size-fit mt-36 max-w-lg rounded-md shadow-lg p-5">
        <div className="flex justify-between items-center pb-3 mb-4">
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>

          <button
            onClick={onClose}
            className="text-slate-500 cursor-pointer hover:text-red-500"
          >
            Fechar
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}