import { addDoc, getDocs, updateDoc } from "firebase/firestore"
import { emprestimosCollection } from "./collections";
import { addDoc, doc, getDoc, getDocs } from "firebase/firestore";

export async function adicionarEmprestimo(data){
    await addDoc(emprestimosCollection, data);
}

export async function getEmprestimos(data){
    const snapshot = await getDocs(emprestimosCollection);
    let emprestimos = [];
    snapshot.forEach((doc) => {
        emprestimos.push({...doc.data(), id: doc.id})
    })
    return emprestimos;
}

export async function getEmprestimo(id) {
    const document = await getDoc(doc(emprestimosCollection, id));
    return {...document.data(), id: document.id};
}

export async function updateEmprestimo(id, data) {
    await updateDoc(doc(emprestimosCollection, id), data);
}