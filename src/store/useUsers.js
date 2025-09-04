import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUser = create(
  persist(
    (set) => ({
      userList: [],
      addUser: (newUser) =>
        set((state) => {
          return { ...state, userList: [...state.userList, newUser] };
        }),
      deleteUser: (id) =>
        set((state) => {
          const newUsrList = state.userList.filter((item) => item.id !== id);
          return { ...state, userList: newUsrList };
        }),
      updateUser: (newName, id) =>
        set((state) => {
          const newUserList = state.userList.map((item) =>
            item.id === id ? { name: newName, id } : item
          );
          return { ...state, userList: newUserList };
        }),
    }),
    { name: 'users' }
  )
);

export default useUser;
