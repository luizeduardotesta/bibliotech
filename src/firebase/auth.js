import {signOut, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import {auth} from "./config"

export async function cadastrarEmailSenha(email, password){

    const resultado = await createUserWithEmailAndPassword(auth, email, password);

    return resultado.user;
}

export async function loginGoogle(){
    const provider = new GoogleAuthProvider();
    const resultado = await signInWithPopup(auth, provider);

    return resultado.user;
}

export async function loginEmailSenha(email, password){

    const resultado = await signInWithEmailAndPassword(auth, email, password);

    return resultado.user;
}

export async function logout(){
    // Deslogar o usuário atual do firebase
    await signOut(auth);
}
