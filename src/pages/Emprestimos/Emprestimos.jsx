import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Emprestimos() {
    return (
        <div className="emprestimos">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Emprestimos</h1>
                    <Button as={Link} to="/emprestimos/adicionar" variant="success">Adicionar emprestimo</Button>
                </div>
                <hr />
            </Container>
        </div>
    )
}