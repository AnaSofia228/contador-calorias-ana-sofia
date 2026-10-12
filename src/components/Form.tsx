import { categories } from '../data/categories'

export default function Form() {
    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            {/* <h1 className="text-3xl font-bold text-center text-[#BC4749]">Formulario</h1> */}
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria: </label>
                <select
                    className="border border-[#386641] p-2 rounded-lg w-full bg-white"
                >
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad: </label>
                <input 
                    id="activity"
                    type="text"
                    className="border border-[#386641] p-2 rounded-lg w-full focus:outline-none"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias: </label>
                <input 
                    id="calories"
                    type="number"
                    className="border border-[#386641] p-2 rounded-lg w-full focus:outline-none"
                    placeholder="Ej. 100, 200, 300"
                />
            </div>

            <input 
                type="submit"
                className="bg-[#386641] w-full p-2 font-bold text-white rounded-lg hover:bg-[#6A994E] cursor-pointer"
                value="Guardar Comida o Guardar Ejercicio"
            />
        </form>
    )
}