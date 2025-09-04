import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../store/useUsers';

const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { addUser } = useUser();

  const submit = (data) => {
    const newUser = {
      id: Date.now(),
      name: data.name,
    };
    addUser(newUser);
    reset();
  };

  return (
    <div className="container max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md"
      >
        <input
          className="flex-1 border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          type="text"
          placeholder="Add user"
          {...register('name')}
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
