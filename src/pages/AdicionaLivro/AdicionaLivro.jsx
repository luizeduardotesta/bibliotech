import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addLivro } from "../../firebase/livros";

export function AdicionaLivro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        addLivro(data);
    }

    return (
        <div className="adicionar-livro">
            <Container>
                <h1>Adicionar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors.titulo && "is-invalid"}
                            {...register("titulo", {
                                required: "Campo obrigatório",
                                maxLength: 255,
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors.autor && "is-invalid"}
                            {...register("autor", {
                                required: "Campo obrigatório",
                                maxLength: 255,
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.autor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors.categoria && "is-invalid"}
                            {...register("categoria", {
                                required: "Campo obrigatório",
                                maxLength: 255,
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.categoria?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors.isbn && "is-invalid"}
                            {...register("isbn", {
                                required: "Campo obrigatório",
                                maxLength: 255,
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control
                            type="text"
                            className={errors.urlCapa && "is-invalid"}
                            {...register("urlCapa", { required: "Campo obrigatório" })}
                        />
                        <Form.Text className="text-danger">
                            {errors.urlCapa?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success">
                        Adicionar
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
