
export default function AboutPage() {
  return (
    <div className="bg-white py-10">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-blue-950">Conoce a Nuestro Equipo</h2>
    <p className="text-lg text-gray-600 mt-2">Un equipo altamente calificado y comprometido con el éxito de cada proyecto.</p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
    {/* Persona 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ELMlVsc7orWaS-uLAb00tIKwsDsyfSQvjw&s" alt="Staff 1" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800">Daws-4</h3>
        <p className="text-sm text-gray-500">toplaner</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sapiente soluta dicta. Voluptate sapiente amet molestiae accusantium, quod incidunt, animi illum rerum vitae placeat, rem laudantium quaerat doloremque dicta.</p>
      </div>
    </div>

    {/* Persona 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://cdn.britannica.com/38/200938-050-E22981D1/Freddie-Mercury-Live-Aid-Queen-Wembley-Stadium-July-13-1985.jpg" alt="Staff 2" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800">gabbs05</h3>
        <p className="text-sm text-gray-500">midlaner</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit mollitia sint rerum voluptates illum praesentium corporis vel fugiat, voluptatem recusandae dicta! Expedita corrupti veritatis tenetur perspiciatis dolores pariatur vitae.</p>
      </div>
    </div>

    {/* Persona 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://lh6.googleusercontent.com/oaEZGni6T4SkfuUrwJmWOeH6u8TM2I0eIoXY6gqrVYPQy0dzivLiVtRAk-VGy6I5xq9FlSVwbj7sUGyn_V0LgXzL-RmuXFpf5rKxC2Erpmonoavy524cShMRLurdqh3RjYkQAUiwQVd-WJAsRim8lF0" alt="Staff 3" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800">toniborja40</h3>
        <p className="text-sm text-gray-500">support</p>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quisquam consequatur nulla, minima non doloribus quia repellat est voluptate hic iusto commodi exercitationem. Soluta quia magni nesciunt vero reprehenderit repudiandae.</p>
      </div>
    </div>
  </div>
</div>
  );
}
