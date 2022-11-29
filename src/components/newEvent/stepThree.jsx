import { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

export const StepThree = (_) => {

    // EVENT - Step 03
    const [paymentMethod, setPaymentMethod] = useState("")
    const [taxes, setTaxes] = useState("")
    const [qrCodeValidation, setQrCodeValidation] = useState(false)

    return (
        <main className="stepThree">
            <hr className="my-4" />

            <form>
                <Row>
                    <Col>
                        <h4>Pagamento</h4>
                        <FloatingLabel
                            label="Como deseja prosseguir em relação ao pagamento?"
                            className="mb-3"
                        >
                            <Form.Select
                                aria-label="Como deseja prosseguir em relação as taxas?"
                            >
                                <option value="0">Escolha...</option>
                                <option value="1">D+15</option>
                                <option value="2">D+30</option>
                            </Form.Select>
                        </FloatingLabel>

                        <Row className="my-4">
                            <h5>D+15</h5>
                            <p className="text-muted fw-light">
                                Selecionando os pagamentos pelo evento em até 15 dias
                                resultará em um aumento de taxas de 2%.
                            </p>
                        </Row>

                        <Row className="my-4">
                            <h5>D+30</h5>
                            <p className="text-muted fw-light">
                                Selecionando os pagamentos pelo evento em até 15 dias
                                resultará em um aumento de taxas de 2%.
                            </p>
                        </Row>
                    </Col>

                    <Col>
                        <h4>Taxas</h4>
                        <FloatingLabel
                            controlId="floatingSelect"
                            label="Como deseja prosseguir em relação as taxas?"
                            className="mb-3"
                        >
                            <Form.Select
                                aria-label="Como deseja prosseguir em relação as taxas?"
                            >
                                <option>Escolha...</option>
                                <option value="1">Assumir taxas</option>
                                <option value="2">Passe a taxa para os participantes</option>
                            </Form.Select>
                        </FloatingLabel>

                        <Row className="my-4">
                            <h5>Resumo das taxas incorridas</h5>
                            <p className="text-muted fw-light">
                                Resumo do valor do ingresso (Se assumir) + Valor da taxa (Caso
                                D+15) caso contrário (Repasse + D+30) 0%.
                            </p>
                        </Row>

                        <Row className="my-4">
                            <h5>Estimativa do evento</h5>
                            <p className="text-muted fw-light">
                                Com base no número de ingressos e nos valores dos mesmos, a
                                sua estimativa para o evento é:
                                <br />
                                R$ valor do ingresso X ingressos vendidos
                                <br />
                                <br />
                                Aqui consideramos os valores de todos os lotes assim como a
                                quantidade de ingressos totais
                            </p>
                        </Row>
                    </Col>
                </Row>
            </form>
        </main>
    );
};