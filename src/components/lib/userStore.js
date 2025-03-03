import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) {
      console.log("UID é nulo, não buscando usuário.");
      return set({ currentUser: null, isLoading: false });
    }
  
    try {
      console.log("Buscando usuário no Firestore com UID:", uid);
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Usuário encontrado no Firestore:", docSnap.data());
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        console.log("Usuário não encontrado no Firestore.");
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.error("Erro ao buscar usuário:", err);
      set({ currentUser: null, isLoading: false });
    }
  }  
}));