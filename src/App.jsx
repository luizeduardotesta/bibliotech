import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./contexts/AuthContext";
import { auth } from "./firebase/config";

export function App() {
    const [usuarioLogado, setUsuarioLogado] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user => {
            setUsuarioLogado(user);
        }))
    }, []);


    return (
        <>
            <AuthContext.Provider value={usuarioLogado}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Root />}>
                            <Route path="/" element={<Home />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
            <Toaster />
        </>
    )
}
