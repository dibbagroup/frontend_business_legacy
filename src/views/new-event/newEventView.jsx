import { useState, useEffect } from "react";
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    InputGroup,
    Row,
} from "react-bootstrap";
import axios from "axios";
import {env} from "../../data/env"
import "./newEventView.scss";
import { Header } from "../../components/header/header";
import { Event } from "../../models/models";

// let eventObject = new Event();
// const CreateEvent = _ => {
//     axios.post(env.local.newEvent, eventObject)
//     .then((res) => {
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

export const NewEventView = (_) => {
    const [step, setStep] = useState(0);
    const [street, setStreet] = useState("Rua");
    const [complement, setComplement] = useState("Complemento");
    const [neighborhood, setNeighborhood] = useState("Bairro");
    const [city, setCity] = useState("Cidade");
    const [uf, setUF] = useState("UF");
    const [ddd, setDDD] = useState("ddd");
    const [number, setNumber] = useState("Number");

    const getCEP = (cep) => {
        // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
        if (cep.length === 8) {
            cep = cep.replace("-", "");
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
                setStreet(res.data.logradouro);
                setNeighborhood(res.data.bairro);
                setCity(res.data.localidade);
                setUF(res.data.uf);
                setDDD(res.data.ddd);
            });
        } else {
            setStreet("Rua");
            setNeighborhood("Bairro");
            setCity("Cidade");
            setUF("UF");
            setDDD("ddd");
        }
    };

    const StepOne = (_) => {
        return (
            <main className="stepOne p-5">
                {/* HEADER */}

                <hr className="my-4" />

                <form>
                    <Row>
                        {/* LEFT SIDE */}
                        <Col>
                            <h4>Detalhes</h4>

                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Título"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="Título" />
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <FloatingLabel
                                        controlId="floatingSelect"
                                        label="Gênero musical"
                                        className="mb-3"
                                    >
                                        <Form.Select aria-label="Gênero musical">
                                            <option>Escolha...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Descrição"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Descrição"
                                    as="textarea"
                                    style={{ height: "130px" }}
                                />
                            </FloatingLabel>

                            <Form.Control type="file" size="md" className="mb-3" />
                        </Col>

                        {/* RIGHT SIDE */}
                        <Col>
                            <h4>Local</h4>
                            <FloatingLabel label="CEP" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="CEP"
                                    id="new-event-cep"
                                    maxLength={9}
                                    onChange={() => {
                                        getCEP(document.getElementById("new-event-cep").value);
                                    }}
                                />
                            </FloatingLabel>

                            <Row>
                                <Col xs={3}>
                                    <FloatingLabel label={uf} className="mb-3">
                                        <Form.Control type="text" placeholder="Rua" disabled />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel label={city} className="mb-3">
                                        <Form.Control type="text" placeholder="Rua" disabled />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={3}>
                                    <FloatingLabel label={neighborhood} className="mb-3">
                                        <Form.Control type="text" placeholder="Bairro" disabled />
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <FloatingLabel label={street} className="mb-3">
                                        <Form.Control type="text" placeholder="Rua" disabled />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={3}>
                                    <FloatingLabel label="Número" className="mb-3">
                                        <Form.Control
                                            type="number"
                                            id="new-event-number"
                                            placeholder="Número"
                                            required
                                            onChange={() => {
                                                setNumber(
                                                    document.getElementById("new-event-number").value
                                                );
                                            }}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <FloatingLabel label="Complemento" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            id="new-event-complement"
                                            placeholder="Complemento"
                                            onChange={() => {
                                                setComplement(
                                                    document.getElementById("new-event-complement").value
                                                );
                                            }}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
                {/* FOOTER */}
            </main>
        );
    };

    const StepTwo = (_) => {
        return (

            /* {Header /} */
            <main className="stepTwo p-5">

                <hr className="my-4" />

                <form>
                    <Row>
                        {/* LEFT SIDE */}
                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Classificação Indicativa"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Classificação Indicativa" />
                            </FloatingLabel>
                        
                            <FloatingLabel
                                controlId="floatingSelect"
                                label="Gênero de Ingressos"
                                className="mb-3"
                            >
                                <Form.Select aria-label="Gênero de Ingressos">
                                    <option>Escolha...</option>
                                    <option value="1">Unissex</option>
                                    <option value="2">Feminino e Masculino</option>
                                </Form.Select>
                            </FloatingLabel>
                            
                            <FloatingLabel
                                    controlId="floatingInput"
                                    label="Quantidade de Lotes"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantidade de Lotes"
                                    />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria de Ingressos"
                                className="mb-3"
                            >
                                <Form.Select aria-label="Categoria de Ingressos">
                                    <option>Escolha...</option>
                                    <option value="1">Individuais</option>
                                    <option value="2">Áreas</option>
                                    <option value="3">Ambos</option>
                                </Form.Select>
                            </FloatingLabel>

                            <Form.Control type="file" size="md" className="mb-3" />
                        </Col>
                    </Row>

                    <Row>
                        <h4 className="mt-4 text-center">Montando Lotes</h4>

                        <Row className="mt-4">
                            <h5 className="text-center">Ingressos Individuais</h5>

                            <Col className="mt-3">
                                <label htmlFor="nameArea" className="mb-1">Area do Evento</label>

                                <Form.Control
                                    id="nameArea"
                                    type="text"
                                    placeholder="Ex: Pista Premium"
                                />
                            </Col>

                            <Col className="mt-3">
                                <label htmlFor="ticketValueMasc" className="mb-1">Valor do Ingresso Masculino</label>

                                <Form.Control
                                    id="ticketValueMasc"
                                    type="number"
                                    placeholder="Ex: R$ 87,00"
                                />
                            </Col>

                            <Col className="mt-3">
                                <label htmlFor="ticketValueFem" className="mb-1">Valor do Ingresso Feminino</label>

                                <Form.Control
                                    id="ticketValueFem"
                                    type="number"
                                    placeholder="Ex: R$ 65,00"
                                />
                            </Col>

                            <Col className="mt-3">
                                <label htmlFor="ticketsQuantity" className="mb-1">Quantidade de Ingressos</label>

                                <Form.Control
                                    id="ticketsQuantity"
                                    type="number"
                                    placeholder="Ex: 100 ingressos"
                                />
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <h5 className="text-center">Ingressos por Área</h5>

                            <Col className="mt-3">
                                <label htmlFor="nameArea" className="mb-1">Area do Evento</label>

                                <Form.Control
                                    id="nameArea"
                                    type="text"
                                    placeholder="Ex: Camarote VIP"
                                />
                            </Col>

                            <Col className="mt-3">
                                <label htmlFor="areaValue" className="mb-1">Valor da Área</label>

                                <Form.Control
                                    id="areaValue"
                                    type="number"
                                    placeholder="Ex: R$ 500,00"
                                />
                            </Col>

                            <Col className="mt-3">
                                <label htmlFor="ticketsQuantityByArea" className="mb-1">Quantidade de Ingressos por Área</label>

                                <Form.Control
                                    id="ticketsQuantityByArea"
                                    type="number"
                                    placeholder="Ex: 10 ingressos"
                                />
                            </Col>
                        </Row>
                    </Row>
                </form>
            </main>
            /* FOOTER */
        );
    };

    const StepThree = (_) => {
        return (
            <main className="stepThree p-5">
                <hr className="my-4" />

                <form>
                    <Row>
                        <FloatingLabel
                            controlId="floatingSelect"
                            label="Como deseja prosseguir em relação as taxas?"
                            className="mb-3"
                        >
                            <Form.Select aria-label="Taxas">
                                <option>Escolha...</option>
                                <option value="1">Assumir taxas</option>
                                <option value="2">Passe a taxa para os participantes</option>
                            </Form.Select>
                        </FloatingLabel>

                        <h4 className="text-center mt-3">Pagamento do Evento</h4>

                        <div className="flex mt-3">
                            <div className="d">
                                <h3>D+15</h3>
                                <p>Selecionando os pagamentos pelo evento em até 15 dias resultará em um aumento de taxas de 2%.</p>
                                <input type="checkbox" />
                            </div>
                            <div className="d">
                                <h3>D+30</h3>
                                <p>Selecionando os pagamentos pelo evento em até 15 dias resultará em um aumento de taxas de 2%.</p>
                                <input type="checkbox" />
                            </div>
                        </div>

                        <h4 className="text-center mt-3">Resumo das taxas incorridas:</h4>

                        <p className="text-center mt-2">Resumo do valor do ingresso (Se assumir) + Valor da taxa (Caso D+15) caso contrário (Repasse + D+30) 0%.</p>

                        <h3 className="text-center mt-1">XXX</h3>

                        <h4 className="text-center mt-3">Estimativa do evento:</h4>

                        <p className="text-center mt-2">Com base no número de ingressos e nos valores dos mesmos, a sua estimativa para o evento é:</p>

                        <p className="text-center">R$ valor do ingresso X ingressos vendidos</p>

                        <h3 className="text-center mt-1">R$ XXXX,XX</h3>

                        <p className="text-center mt-1">Aqui consideramos os valores de todos os lotes assim como a quantidade de ingressos totais.</p>
                    </Row>
                </form>
            </main>
        );
    };

    return (
        <main className="p-5">
            <div>
                <Row>
                    <Col>
                        <h2 className="text-dark">Etapa {step + 1}/3</h2>
                    </Col>

                    {step >= 1 && (
                        <Col xs={1}>
                            <Button
                                variant="outline-dark"
                                onClick={() => {
                                    setStep(step - 1);
                                }}
                            >
                                Voltar
                            </Button>
                        </Col>
                    )}

                    {step <= 1 && (
                        <Col xs={1}>
                            <Button
                                variant="outline-success"
                                onClick={() => {
                                    setStep(step + 1);
                                }}
                            >
                                Avançar
                            </Button>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col>
                        {step === 0 && (
                            <p>
                                Para começar, nos conte um pouco sobre as informações do seu
                                evento. lembre-se que essa parte é como ficará visível para o
                                público da nossa plataforma
                            </p>
                        )}

                        {step === 1 && (
                            <p>
                                Continuando,
                            </p>
                        )}

                        {step === 2 && (
                            <p>
                                Para encerrar, precisamos definir a seleção das taxas...
                            </p>
                        )}
                    </Col>
                    <Col />
                </Row>
            </div>

            {step === 0 && (
                <StepOne />
            )}

            {step === 1 && (
                <StepTwo />
            )}

            {step === 2 && (
                <StepThree />
            )}
        </main >
    );
};
