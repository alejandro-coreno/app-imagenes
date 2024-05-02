import { useState } from "react";
import Formulario from "./components/Fomulario";
const App = () => {
  return (
    <div className=" bg-slate-50 container border-2 h-screen border-green-600 flex flex-col justify-center items-center px-10">
      <Formulario />
    </div>
  );
}


export default App;
