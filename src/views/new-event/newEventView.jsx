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

import "./newEventView.scss";
import { Header } from "../../components/header/header";

class Place {
    cep = String;
    uf = String;
    city = String;
    street = String;
    number = 0;
    complement = String;
}

class Lot {
    startDate = Date;
    endDate = Date;
    ticketGender = String; /* (Unissex) ou (Fem e Masc) */
    loteType = String; /* (Individual) ou (Area) */
}

class Event {
    name = String;
    gender = String;
    description = String;
    bannerImage = Image;
    startDate = Date;
    startTime = Date;
    endTime = Date;
    place = new Place();
    descriptionPlace = String

    minimumAge = 0;
    imageCategorys = Image;
    qtdLots = 0;
    lots = [new Lot()];

    taxes = Boolean;
    paymentMethod = 0; /* D+15 ou D+30 */
}

let eventObject = new Event();

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

                {step === 0 && (
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
                )}
                {step === 1 && <StepTwo />}
                {step === 2 && <StepThree />}

                {/* FOOTER */}
            </main>
        );
    };

    const StepTwo = (_) => {
        return (

            /* {Header /} */
            <main className="stepTwo p-5">

                {step === 0 && (
                    <form>
                        <Row>
                            {/* LEFT SIDE */}
                            <Col>
                                <h4>Detalhes</h4>

                                <Row>
                                    <Col>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Classificação Indicativa"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Classificação Indicativa" />
                                        </FloatingLabel>
                                    </Col>

                                    <Col>
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
                                    </Col>
                                </Row>

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
                            </Col>

                            {/* RIGHT SIDE */}
                            
                        </Row>
                    </form>
                )}
                {step === 1 && <StepTwo />}
                {step === 2 && <StepThree />}

                {/* FOOTER */}
            </main>
        );
    };

    const StepThree = (_) => {
        return (
            <main>
                <h1>Step 3</h1>
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
