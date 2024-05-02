import { useState } from "react";
import sinImagen from "../assets/img/sin_imagen.png";


const Formulario = () => {

    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!image) {
            alert('Seleccione un archivo');
        }
        else {
            alert('Subiendo Archivo');
        }
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
        else {
            return;
        }

    }

    return (
        <form action="" onSubmit={handleSubmit} className="container flex justify-center items-center gap-7 flex-col">
            <div className="border border-dashed border-blue-400 h-56 w-3/4 flex justify-center items-center ">
                {
                    image
                        ?
                        <img src={image} alt="" className="w-full h-full object-cover object-center
                    " />
                        :

                        <img src={sinImagen} alt="sin_imagen" />
                }
            </div>

            <div className="w-3/4 flex flex-col gap-5">
                <label htmlFor="file" className="hover:bg-sky-800 font-medium p-2 text-center bg-sky-500 text-white rounded-md">Seleccione un Archivo</label>
                <input onChange={handleChange} type="file" name="file" id="file" className="hidden" />
                <button type="submit" className="hover:bg-gray-700 font-medium p-2 text-center bg-gray-500 text-white rounded-md">Enviar</button>
            </div>
        </form>
    );
}


export default Formulario;