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
            setImage(null)
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
        <form action="" onSubmit={handleSubmit} className="container flex justify-center items-center gap-7 flex-col md:w-1/3 bg-white p-6 shadow-md rounded-md">
            <div className="h-56 w-3/4 flex justify-center items-center md:border md:border-blue-700 md:border-dashed md:w-full">
                {
                    image
                        ?
                        <img src={image} alt="" className="w-full h-full object-cover object-center
                    " />
                        :

                        <img src={sinImagen} alt="sin_imagen" />
                }
            </div>

            <div className="w-3/4 flex flex-col gap-5 md:w-full">
                <label htmlFor="file" className="hover:bg-sky-600 transition-all duration-150 hover:shadow-md  font-medium p-2 text-center bg-sky-500 text-white rounded-md cursor-pointer">Seleccione un Archivo</label>
                <input onChange={handleChange} type="file" name="file" id="file" className="hidden" />
                <button type="submit" className="hover:bg-gray-600  transition-all duration-150 hover:shadow-md font-medium p-2 text-center bg-gray-500 text-white rounded-md  cursor-pointer">Enviar</button>
            </div>
        </form>
    );
}


export default Formulario;