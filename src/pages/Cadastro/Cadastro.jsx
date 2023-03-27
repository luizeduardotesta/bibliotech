import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png"
import googleIcon from "../../assets/icons/google-white.svg"
import { useForm } from "react-hook-form"
import { cadastrarEmailSenha, loginGoogle } from "../../firebase/auth";

export function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        const { email, password } = data
        cadastrarEmailSenha(email, password).then((user) => {
            console.log(user);
        });
    }

    function onLoginGoogle() {
        loginGoogle().then((user) => {
            console.log(user);
        });
    }

    return (
        <Container fluid className="my-5">
            <p className="text-center">
                <img src={logoIcon} width="256" alt="Logo do app" />
            </p>
            <h4>Faça parte da nossa plataforma</h4>
            <p className="text-muted">
                Já tem conta? <Link to="/login">Entre</Link>
            </p>
            <hr />
            <Button className="mb-3" variant="danger" onClick={onLoginGoogle}>
                <img src={googleIcon} width="32" alt="Logo do goole" />
                Entrar com o Google
            </Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        className={errors.email ? "is-invalid" : ""}
                        placeholder="Enter email"
                        {...register("email", { required: "Email is required" })}
                    />
                    <Form.Text className="invalid-feedback">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        className={errors.password ? "is-invalid" : ""}
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                    />
                    <Form.Text className="invalid-feedback">
                        {errors.password?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    );
}
