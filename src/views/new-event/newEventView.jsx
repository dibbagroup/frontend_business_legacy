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
import { env } from "../../data/env";
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

class SpaceAllotment {
  allotmentNumber = ""; /* GERAÇÃO AUTOMÁTICA */
  startDateTime = document.getElementById("startDateTime").value;
  endDateTime = document.getElementById("endDateTime").value;
  ticketQuantityUnisex = document.getElementById("ticketQuantityUnisex").value;
  ticketPriceUnisex = document.getElementById("ticketPriceUnisex").value;
  ticketPriceMale = document.getElementById("ticketPriceMale").value;
  ticketQuantityMale = document.getElementById("ticketQuantityMale").value;
  ticketPriceFemale = document.getElementById("ticketPriceFemale").value;
  ticketQuantityFemale = document.getElementById("ticketQuantityFemale").value;
}

class CabinAllotment {
  allotmentNumber = ""; /* GERAÇÃO AUTOMÁTICA */
  startDateTime = document.getElementById("startDateTime").value;
  endDateTime = document.getElementById("endDateTime").value;
  ticketQuantity = document.getElementById("ticketQuantity").value;
  ticketPrice = document.getElementById("ticketPrice").value;
}

class EventSpace {
  id = ""; /* GERAÇÃO AUTOMÁTICA */
  eventId = ""; /* Pegar id do evento */
  eventSpaceName = document.getElementById("eventSpaceName");
  halfTicketAllowed = document.getElementById("halfTicketAllowed").value;
  allotments = new SpaceAllotment();
}

/* 
    Nomes no back vão ser afetados pelo front? seria melhor mudar da mesma forma por organização?
    allotment
*/

class EventCabin {
  id = ""; /* GERAÇÃO AUTOMÁTICA */
  eventId = ""; /* Pegar id do evento */
  eventCabinName = document.getElementById("eventCabinName").value;
  allotments = new CabinAllotment();
}

const newEventValues = (_) => {
  /* PAGE 1 */
  let name = document.getElementById("name").value;
  let musicalType = document.getElementById("musicalType").value;
  let description = document.getElementById("description").value;
  let bannerImage = document.getElementById("bannerImage").value;
  let cep = document.getElementById("cep").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;
  let number = document.getElementById("number").value;
  let complement = document.getElementById("complement").value;
  /* DATAS DEVEM SER INSERIDAS */
  /* DESCRIÇÃO DO ENDEREÇO DEVE SER INSERIDO */

  /* PAGE 2 */
  let ageClassification = document.getElementById("minimiumAge").value;
  let categoryTickets = document.getElementById("categoryTickets").value;
  let genderTickets = document.getElementById("genderTickets").value;
  let areaDistributionImage = document.getElementById(
    "areaDistributionImage"
  ).value;

  let eventArea =
    document.getElementById("eventArea").value; /* tem que receber um array */

  /* PAGE 3 */
  let clientPaysFee = document.getElementById("clientPaysFee").value;
  let anticipatedPayment = document.getElementById("anticipatedPayment").value;
};

export const NewEventView = (_) => {
  const [step, setStep] = useState(0);
  const [street, setStreet] = useState("Rua");
  const [complement, setComplement] = useState("Complemento");
  const [neighborhood, setNeighborhood] = useState("Bairro");
  const [city, setCity] = useState("Cidade");
  const [uf, setUF] = useState("UF");
  const [ddd, setDDD] = useState("ddd");
  const [number, setNumber] = useState("Number");

  let genderTickets = document.getElementById("genderTickets");

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
      <main className="stepOne">
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
                    label="Nome do Evento"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Nome do Evento"
                      id="name"
                    />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Gênero musical"
                    className="mb-3"
                  >
                    <Form.Select aria-label="Gênero musical" id="musicalType">
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
                  id="description"
                  as="textarea"
                  style={{ height: "130px" }}
                />
              </FloatingLabel>

              <Form.Control
                type="file"
                id="bannerImage"
                size="md"
                className="mb-3"
              />
            </Col>

            {/* RIGHT SIDE */}
            <Col>
              <h4>Local</h4>
              <FloatingLabel label="CEP" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="CEP"
                  id="new-event-cep"
                  /* CONFERIR ID */
                  maxLength={9}
                  onChange={() => {
                    getCEP(document.getElementById("new-event-cep").value);
                  }}
                />
              </FloatingLabel>

              <Row>
                <Col xs={3}>
                  <FloatingLabel label={uf} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Rua"
                      id="state"
                      disabled
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label={city} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Rua"
                      id="city"
                      disabled
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col xs={3}>
                  <FloatingLabel label={neighborhood} className="mb-3">
                    <Form.Control type="text" placeholder="Bairro" disabled />
                  </FloatingLabel>
                </Col>
                {/* CONFERIR ID's */}
                <Col>
                  <FloatingLabel label={street} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Rua"
                      id="address"
                      disabled
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col xs={3}>
                  <FloatingLabel label="Número" className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Número"
                      id="new-event-number"
                      /* CONFERIR ID NUMERO */
                      required
                    />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel label="Complemento" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Complemento"
                      id="new-event-complement"
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
      <main className="stepTwo">
        <hr className="my-4" />

        <form>
          <Row>
            <h4>Ingresso</h4>
            <Col>
              <FloatingLabel
                controlId="floatingSelect"
                label="Gênero de Ingressos"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Gênero de Ingressos"
                  id="genderTickets"
                >
                  <option>Escolha...</option>
                  <option value="1">Unissex</option>
                  <option value="2">Feminino e Masculino</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Categoria de Ingressos"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Categoria de Ingressos"
                  id="categoryTickets"
                >
                  <option>Escolha...</option>
                  <option value="1">Individuais</option>
                  <option value="2">Áreas</option>
                  <option value="3">Ambos</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Classificação Indicativa"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Classificação Indicativa"
                  id="ageClassification"
                />
              </FloatingLabel>

              <Form.Control
                type="file"
                size="md"
                className="mb-3"
                id="areaDistribuitionImage"
              />
            </Col>
          </Row>

          <Row>
            <h4 className="mt-4 text-center">Montando Lotes</h4>

            <Row className="mt-4">
              <h5 className="text-center">Ingressos Individuais</h5>

              <Col className="mt-3">
                <label htmlFor="nameArea" className="mb-1">
                  Area do Evento
                </label>

                <Form.Control
                  id="nameArea"
                  type="text"
                  placeholder="Ex: Pista Premium"
                />
              </Col>

              {genderTickets == 1 && (
                <Col>
                  <Col className="mt-3">
                    <label htmlFor="ticketPriceUnissex" className="mb-1">
                      Valor do Ingresso Unissex
                    </label>
                    <Form.Control
                      id="ticketPriceUnissex"
                      type="number"
                      placeholder="Ex: R$ 65,00"
                    />
                  </Col>

                  <Col className="mt-3">
                    <label htmlFor="ticketQuantityUnisex" className="mb-1">
                      Quantidade de Ingressos
                    </label>

                    <Form.Control
                      id="ticketQuantityUnisex"
                      type="number"
                      placeholder="Ex: 100 ingressos"
                    />
                  </Col>
                </Col>
              )}

              {genderTickets == 2 && (
                <Col>
                  <Col className="mt-3">
                    <label htmlFor="ticketPriceMale" className="mb-1">
                      Valor do Ingresso Masculino
                    </label>
                    <Form.Control
                      id="ticketPriceMale"
                      type="number"
                      placeholder="Ex: R$ 87,00"
                    />
                  </Col>
                  <Col className="mt-3">
                    <label htmlFor="ticketPriceFemale" className="mb-1">
                      Valor do Ingresso Feminino
                    </label>
                    <Form.Control
                      id="ticketPriceFemale"
                      type="number"
                      placeholder="Ex: R$ 65,00"
                    />
                  </Col>

                  <Col className="mt-3">
                    <label htmlFor="ticketQuantityMale" className="mb-1">
                      Quantidade de Ingressos Masculinos
                    </label>

                    <Form.Control
                      id="ticketQuantityMale"
                      type="number"
                      placeholder="Ex: 100 ingressos"
                    />
                  </Col>

                  <Col className="mt-3">
                    <label htmlFor="ticketQuantityFemale" className="mb-1">
                      Quantidade de Ingressos Femininos
                    </label>

                    <Form.Control
                      id="ticketQuantityFemale"
                      type="number"
                      placeholder="Ex: 100 ingressos"
                    />
                  </Col>
                </Col>
              )}
            </Row>

            <Row className="mt-4">
              <h5 className="text-center">Ingressos por Área</h5>

              <Col className="mt-3">
                <label htmlFor="nameArea" className="mb-1">
                  Area do Evento
                </label>

                <Form.Control
                  id="nameArea"
                  type="text"
                  placeholder="Ex: Camarote VIP"
                />
              </Col>

              <Col className="mt-3">
                <label htmlFor="areaValue" className="mb-1">
                  Valor da Área
                </label>

                <Form.Control
                  id="areaValue"
                  type="number"
                  placeholder="Ex: R$ 500,00"
                />
              </Col>

              <Col className="mt-3">
                <label htmlFor="ticketsQuantityByArea" className="mb-1">
                  Quantidade de Ingressos por Área
                </label>

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
                  id="genderTickets"
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
                  id="genderTickets"
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

  return (
    <main className="p-5 mx-auto">
      <div>
        <Row>
          <Col>
            <h2 className="text-dark">Etapa {step + 1}/3</h2>
          </Col>

          <Col xs={2}>
            {step >= 1 && (
              <Button
                variant="outline-dark"
                className="mx-2"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Voltar
              </Button>
            )}

            {step <= 1 && (
              <Button
                variant="outline-success"
                className="mx-2"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Avançar
              </Button>
            )}
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

            {step === 1 && <p>Continuando,</p>}

            {step === 2 && (
              <p>Para encerrar, precisamos definir a seleção das taxas...</p>
            )}
          </Col>
          <Col />
        </Row>
      </div>

      {step === 0 && <StepOne />}

      {step === 1 && <StepTwo />}

      {step === 2 && <StepThree />}
    </main>
  );
};
