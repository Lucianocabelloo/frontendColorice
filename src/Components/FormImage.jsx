import { useState } from 'react'


const FormImage = () => {

    const [selectedImage, setSelectedImage] = useState("https://img.freepik.com/fotos-premium/colegial-triste-imagen-3d-fondo-colorido-ai-generativo_58409-28910.jpg");


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
      
  return (
    <div className='flex justify-evenly items-center bg-slate-100 p-3 rounded-md gap-5 w-[50%] borde'>
           <label className=' bg-orange-600 p-3 rounded-md btn btn-primary flex justify-center items-center w-[15vw] gap-3' htmlFor="file"> <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>Elige un Archivo</label>
            <input className=' hidden' type="file" id='file' name="imagensubida" accept="image/png, .jpeg, .jpg, image/gif"  onChange={handleImageUpload}></input>
            <div>
                
  {selectedImage && (
  <div>
    <h3 className='text-center mb-3 font-semibold text-lg'>Imagen seleccionada:</h3>
    <img src={selectedImage} alt="Imagen seleccionada" style={{ maxWidth: '100%', maxHeight: '300px' }} />
  </div>
)}
  </div>
    </div>
  )
}

export default FormImage