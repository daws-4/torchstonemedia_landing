export default function AboutPage() {
  return (

  <div>
  <div>
    {/*Titulo*/}
    <h1 className="text-5xl text-blue-950">Conoce a Nuestro Equipo</h1>
  <br />
    <h1 className="text-3xl">Un equipo  calificado y comprometido con el éxito de cada proyecto.</h1>
    <br />
  </div>
  <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
    {/* Persona 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ELMlVsc7orWaS-uLAb00tIKwsDsyfSQvjw&s" alt="Staff 1" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 text-center">Daws-4</h3>
        <p className="text-sm text-gray-500 text-center">toplaner</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sapiente soluta dicta. Voluptate sapiente amet molestiae accusantium, quod incidunt, animi illum rerum vitae placeat, rem laudantium quaerat doloremque dicta.</p>
      </div>
    </div>

    {/* Persona 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://i.pinimg.com/474x/ea/da/64/eada6462dbb21eb0654f2e34726154ee.jpg" alt="Staff 2" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 text-center">gabbs05</h3>
        <p className="text-sm text-gray-500 text-center">midlaner</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit mollitia sint rerum voluptates illum praesentium corporis vel fugiat, voluptatem recusandae dicta! Expedita corrupti veritatis tenetur perspiciatis dolores pariatur vitae.</p>
      </div>
    </div>

    {/* Persona 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://lh6.googleusercontent.com/oaEZGni6T4SkfuUrwJmWOeH6u8TM2I0eIoXY6gqrVYPQy0dzivLiVtRAk-VGy6I5xq9FlSVwbj7sUGyn_V0LgXzL-RmuXFpf5rKxC2Erpmonoavy524cShMRLurdqh3RjYkQAUiwQVd-WJAsRim8lF0" alt="Staff 3" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 text-center">toniborja40</h3>
        <p className="text-sm text-gray-500 text-center">support</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quisquam consequatur nulla, minima non doloribus quia repellat est voluptate hic iusto commodi exercitationem. Soluta quia magni nesciunt vero reprehenderit repudiandae.</p>
      </div>
    </div>
  </div>
</div>
  </div>

  
  );
}
