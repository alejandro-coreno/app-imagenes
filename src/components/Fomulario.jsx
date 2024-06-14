import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import sinImagen from "../assets/img/sin_imagen.png";
import pdf from "../assets/img/pdf-image.jpeg"


const Formulario = () => {

    const [file, setFile] = useState(null);

    const alertMessage = () => {
        const Toast =  Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: `${file ? 'success' : 'error'}`,
            title: `${file ? 'Archivo subido correctamente' : '¡Seleccione un archivo!' }`
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const storageRef = ref(storage, `${file?.name}`);
        if (!file) {
            alertMessage();
            return;
        }
        else {
            await uploadBytes( storageRef, file);
            alertMessage();
            setFile(null);
        }
    }


    return (
        <form action="" onSubmit={handleSubmit} className="container flex justify-center items-center gap-7 flex-col md:w-1/3 bg-white p-6 shadow-md rounded-md">
            <div className="h-56 w-3/4 flex justify-center items-center md:border-2 md:border-blue-700 md:border-dashed md:w-full">
                {
                    file
                        ?
                        <img src={pdf} alt="image" className="w-full h-full object-cover object-center" 
                    />
                        :

                        <img src={sinImagen} alt="sin_imagen" />
                }
            </div>

            <div className="w-3/4 flex flex-col gap-5 md:w-full">
                <label htmlFor="file" className="hover:bg-sky-600 transition-all duration-150 hover:shadow-md  font-medium p-2 text-center bg-sky-500 text-white rounded-md cursor-pointer">Seleccione un Archivo</label>
                <input onChange={(e) => setFile(e.target.files[0])} type="file" name="file" id="file" className="hidden" />
                <button type="submit" className="hover:bg-gray-600  transition-all duration-150 hover:shadow-md font-medium p-2 text-center bg-gray-500 text-white rounded-md  cursor-pointer">Enviar</button>
            </div>
        </form>
    );
}


export default Formulario;