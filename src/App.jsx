import Form from './components/form';
import useUser from './store/useUsers';

function App() {
  const { userList, deleteUser, updateUser } = useUser();

  const handleEdit = (id, oldName) => {
    const newName = prompt('New Name', oldName);
    if (newName && newName.trim() !== '') {
      updateUser(newName, id);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <Form />

      <div className="mt-8 space-y-4">
        {userList.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-[350px] border border-amber-400 p-4 rounded-xl shadow-md bg-white"
          >
            <p className="text-lg font-semibold text-gray-800">{item.name}</p>

            <div className="flex gap-2">
              <button
                onClick={() => deleteUser(item.id)}
                className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white transition cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(item.id, item.name)}
                className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-white transition cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
