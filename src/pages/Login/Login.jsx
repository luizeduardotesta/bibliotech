import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/google-white.svg";
import loginImg from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthContext";
import { loginEmailSenha, loginGoogle } from "../../firebase/auth";

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    function onSubmit(data) {
        const { email, password } = data;
        loginEmailSenha(email, password).then((user) => {
            toast.success(`Logado como ${user.email}`);
            navigate("/");
        }).catch((erro) => {
            toast.error(`Um erro aconteceu`)
        });
    }

    function onLoginGoogle() {
        loginGoogle().then((user) => {
            toast.success(`Bem vindo ${user.email}`);
            navigate("/");
        }).catch((erro) => {
            toast.error(`Um erro aconteceu`)
        });
    }

    const usuarioLogado = useContext(AuthContext);

    if (usuarioLogado !== null) {
        return <Navigate to="/" />
    }

    return (
        <Container fluid className="my-5">
            <p className="text-center">
                <img src={loginImg} width="256" alt="Logo" />
            </p>
            <h4>Bem-vindo(a) de volta!</h4>
            <p className="text-muted">
                Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
            <hr />
            <Button
                className="mb-3"
                variant="danger"
                onClick={onLoginGoogle}
            >
                <img src={googleIcon} width="32" alt="Google icon" /> Entrar com o
                Google
            </Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        className={errors.email ? "is-invalid" : ""}
                        {...register("email", { required: "Email is required" })}
                    />
                    <Form.Text className="invalid-feedback">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className={errors.password ? "is-invalid" : ""}
                        {...register("password", { required: "Password is required" })}
                    />
                    <Form.Text className="invalid-feedback">
                        {errors.password?.message}
                    </Form.Text>
                </Form.Group>
                <Button type="submit" variant="success">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
}
