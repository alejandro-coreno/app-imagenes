import { useState } from "react";


const Formulario = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Subiendo Archivo');
    }

    return (
        <form action="" className="container flex justify-center items-center gap-7 flex-col">
            <div className="border-2 border-dotted border-blue-400 h-52 w-3/4">
                <img src="" alt="" />
            </div>

            <div className="w-3/4 flex flex-col gap-5">
                <label htmlFor="file" className="hover:bg-sky-800 font-medium p-2 text-center bg-sky-500 text-white rounded-md">Seleccione un Archivo</label>
                <input type="file" name="file" id="file" className="hidden" />
                <button onClick={handleSubmit}  type="submit" className="hover:bg-gray-700 font-medium p-2 text-center bg-gray-500 text-white rounded-md">Enviar</button>
            </div>
        </form>
    );
}


export default Formulario;