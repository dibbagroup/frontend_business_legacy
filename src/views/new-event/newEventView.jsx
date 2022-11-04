import { useState } from "react";
import { env } from "../../data/env";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import axios from "axios";
import { CreateEvent } from "../../service/newEvent"
import "./newEventView.scss";
import { variables } from "../../global/variables";


export const NewEventView = (_) => {
  // VIEW CONTROLLER
  const [step, setStep] = useState(0);

  // CEP
  const [cepInputFocused, setCepInputFocused] = useState(false)
  const [cep, setCep] = useState("")
  const [street, setStreet] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");
  const [ddd, setDDD] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [placeName, setPlaceName] = useState("")

  // EVENT - Step 01
  const [eventName, setEventName] = useState("")
  const [musicalType, setMusicalType] = useState("")
  const [eventStartDate, setEventStartDate] = useState("")
  const [eventEndDate, setEventEndDate] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventBanner, setEventBanner] = useState("")

  // EVENT - Step 02
  const [genderTickets, setGenderTickets] = useState("")
  const [categoryTickets, setCategoryTickets] = useState("")
  const [ageClassification, setAgeClassification] = useState("")
  const [areaDistributionImage, setAreaDistributionImage] = useState("")

  //VALUES SPACE
  const [spaceName, setSpaceName] = useState([])
  const [startDateTimeSpace, setStartDateTimeSpace] = useState([])
  const [endDateTimeSpace, setEndDateTimeSpace] = useState([])
  const [ticketPriceUnissex, setTicketPriceUnissex] = useState([])
  const [ticketQuantityUnissex, setTicketQuantityUnissex] = useState([])
  const [ticketQuantityMale, setTicketQuantityMale] = useState([])
  const [ticketQuantityFemale, setTicketQuantityFemale] = useState([])
  const [ticketPriceMale, setTicketPriceMale] = useState([])
  const [ticketPriceFemale, setTicketPriceFemale] = useState([])

  //VALUES CABIN
  const [cabinName, setCabinName] = useState([])
  const [startDateTimeCabin, setStartDateTimeCabin] = useState([])
  const [endDateTimeCabin, setEndDateTimeCabin] = useState([])
  const [ticketPrice, setTicketPrice] = useState([])
  const [ticketQuantity, setTicketQuantity] = useState([])
  
  // EVENT - Step 03
  const [paymentMethod, setPaymentMethod] = useState("")
  const [taxes, setTaxes] = useState("")
  const [qrCodeValidation, setQrCodeValidation] = useState(false)
  

  const _createEvent = _ => {
    variables.eventBody.name = eventName
    variables.eventBody.musicalType = musicalType
    variables.eventBody.startDateTime = eventStartDate
    variables.eventBody.endDateTime = eventEndDate
    variables.eventBody.description = eventDescription
    variables.eventBody.cep = cep
    variables.eventBody.address = street
    variables.eventBody.number = addressNumber
    variables.eventBody.complement = complement
    variables.eventBody.ageClassification = ageClassification
    variables.eventBody.state = uf
    variables.eventBody.areaDistributionImage = areaDistributionImage
    variables.eventBody.bannerImage = eventBanner
    variables.eventBody.musicalType = musicalType
    variables.eventBody.city = city
    variables.eventBody.clientPaysFee = taxes
    variables.eventBody.anticipatedPayment = paymentMethod
    variables.eventBody.qrcodeValidation = qrCodeValidation
    variables.eventBody.addressDescription = placeName
    CreateEvent()
    return
  }


  const getCEP = _ => {
    // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
    setCepInputFocused(true)
    if (cep.length === 8) {
      cep = cep.replace("-", "");
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
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
        <hr className="my-4" />
        <form>
          <Row>
            <Col>
              <h4>Detalhes</h4>
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingInput" label="Nome do Evento" className="mb-3">
                    <Form.Control
                      value={eventName}
                      onChange={(e) => {
                        setEventName(e.target.value)
                      }}
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
                      <option value="1">Sertanejo Universitário</option>
                      <option value="2">Rock</option>
                      <option value="3">Pop</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Data de Inicio"
                    className="mb-3"
                  >
                    <Form.Control
                      value={eventStartDate}
                      onChange={(e) => {
                        setEventStartDate(e.target.value)
                      }}
                      type="datetime-local"
                      placeholder="Data de Inicio"
                      id="startDateTime"
                    />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Data de Encerramento"
                    className="mb-3"
                  >
                    <Form.Control
                      value={eventEndDate}
                      onChange={(e) => {
                        setEventEndDate(e.target.value)
                      }}
                      type="datetime-local"
                      placeholder="Data de Encerramento"
                      id="endDateTime"
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel
                controlId="floatingInput"
                label="Descrição"
                className="mb-3"
              >
                <Form.Control
                  value={eventDescription}
                  onChange={(e) => {
                    setEventDescription(e.target.value)
                  }}
                  type="text"
                  placeholder="Descrição"
                  id="description"
                  as="textarea"
                  style={{ height: "130px" }}
                />
              </FloatingLabel>

              <label htmlFor="bannerImage" className="label-file">
                Selecione o banner de seu evento
              </label>
              <Form.Control
                value={eventBanner}
                onChange={(e) => {
                  setEventBanner(e.target.value)
                }}
                type="file"
                id="bannerImage"
                size="md"
                className="mb-3 input-file"
              />
            </Col>

            <Col>
              <h4>Local</h4>
              <FloatingLabel label="CEP" className="mb-3">
                <Form.Control
                  value={cep}
                  onChange={e => 
                    getCEP(e.target.value)
                  }
                  type="text"
                  placeholder="CEP"
                  maxLength={9}
                />
              </FloatingLabel>

              <Row>
                <Col xs={4}>
                  <FloatingLabel label={uf} className="mb-3">
                    <Form.Control
                      value={uf}
                      type="text"
                      placeholder="Estado"
                      id="state"
                      disabled
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label={city} className="mb-3">
                    <Form.Control
                      value={city}
                      type="text"
                      placeholder="Rua"
                      id="city"
                      disabled
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col xs={4}>
                  <FloatingLabel label="Nome do Local" className="mb-3">
                    <Form.Control
                      value={placeName}
                      onChange={(e) => {
                        setPlaceName(e.target.value)
                      }}
                      type="text"
                      placeholder="Nome do Local"
                      id="addressDescription"
                    />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel label={street} className="mb-3">
                    <Form.Control
                      value={street}
                      onChange={(e) => {
                        setStreet(e.target.value)
                      }}
                      type="text"
                      placeholder="Rua"
                      id="address"
                      disabled
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col xs={4}>
                  <FloatingLabel label="Número" className="mb-3">
                    <Form.Control
                      value={addressNumber}
                      onChange={(e) => {
                        setAddressNumber(e.target.value)
                      }}
                      type="number"
                      placeholder="Número"
                      id="new-event-number"
                      required
                    />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel label="Complemento" className="mb-3">
                    <Form.Control
                      value={complement}
                      onChange={(e) => { 
                        setComplement(e.target.value) 
                      }}
                      type="text"
                      placeholder="Complemento"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
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
                  value={ageClassification}
                  onChange={(e) => { setAgeClassification(e.target.value)}}
                  type="text"
                  placeholder="Classificação Indicativa"
                  id="ageClassification"
                />
              </FloatingLabel>

              <Form.Control
                value={areaDistributionImage}
                onChange={(e) => { setAreaDistributionImage(e.target.value)}}
                type="file"
                size="md"
                className="mb-3"
                id="areaDistributionImage"
              />
            </Col>
          </Row>

          <Row>
            <h4 className="mt-4">Montando Lotes</h4>

            <Row className="mt-4">
              <h5>Ingressos Individuais</h5>

              <Col className="mt-3">
                <label htmlFor="eventSpaceName" className="mb-1">
                  Area do Evento
                </label>

                <Form.Control
                  value={spaceName}
                  onChange={(e) => { setSpaceName(e.target.value) }}
                  id="eventSpaceName"
                  type="text"
                  placeholder="Ex: Pista Premium"
                />
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Inicio do Lote"
                  className="mb-3"
                >
                  <Form.Control
                    value={startDateTimeSpace[0]}
                    onChange={(e) => {
                      // setSome(e.target.value)
                    }}
                    type="datetime-local"
                    placeholder="Inicio do Lote"
                    id="startDateTimeSpace"
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Fim do Lote"
                  className="mb-3"
                >
                  <Form.Control
                    value={endDateTimeSpace[0]}
                    onChange={(e) => {
                      // setSome(e.target.value)
                    }}
                    type="datetime-local"
                    placeholder="Fim do Lote"
                    id="endDateTimeSpace"
                  />
                </FloatingLabel>
              </Col>

              {genderTickets === 1 && (
                <Col>
                  <Col className="mt-3">
                    <label htmlFor="ticketPriceUnissex" className="mb-1">
                      Valor do Ingresso Unissex
                    </label>
                    <Form.Control
                      value={startDateTimeSpace[0]}
                      onChange={(e) => {
                        // setSome(e.target.value)
                      }}
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
                      value={ticketQuantityUnissex}
                      onChange={(e) => {
                        setTicketQuantityUnissex(e.target.value)
                      }}
                      id="ticketQuantityUnisex"
                      type="number"
                      placeholder="Ex: 100 ingressos"
                    />
                  </Col>
                </Col>
              )}

              {genderTickets === 2 && (
                <Col>
                  <Col className="mt-3">
                    <label htmlFor="ticketPriceMale" className="mb-1">
                      Valor do Ingresso Masculino
                    </label>
                    <Form.Control
                      value={ticketPriceMale}
                      onChange={(e) => {
                        setTicketPriceMale(e.target.value)
                      }}
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
                      value={ticketPriceFemale}
                      onChange={(e) => {
                        setTicketPriceFemale(e.target.value)
                      }}
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
                      value={ticketQuantityMale}
                      onChange={(e) => { setTicketQuantityMale(e.target.value) }}
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
                      value={ticketQuantityFemale}
                      onChange={(e) => {
                        setTicketQuantityFemale(e.target.value)

                      }}
                      id="ticketQuantityFemale"
                      type="number"
                      placeholder="Ex: 100 ingressos"
                    />
                  </Col>
                </Col>
              )}
            </Row>

            <Row className="mt-4">
              <h5>Ingressos por Área</h5>

              <Col className="mt-3">
                <label htmlFor="eventCabinName" className="mb-1">
                  Area do Evento
                </label>

                <Form.Control
                  // value={""}
                  // onChange={(e) => {
                  //   setSome(e.target.value)
                  // }}
                  id="eventCabinName"
                  type="text"
                  placeholder="Ex: Camarote VIP"
                />
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Inicio do Lote"
                  className="mb-3"
                >
                  <Form.Control
                    // value={ }
                    // onChange={(e) => {
                    //   setSome(e.target.value)
                    // }}
                    type="datetime-local"
                    placeholder="Inicio do Lote"
                    id="startDateTimeCabin"
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Fim do Lote"
                  className="mb-3"
                >
                  <Form.Control
                    // value={ }
                    // onChange={(e) => {
                    //   setSome(e.target.value)
                    // }}
                    type="datetime-local"
                    placeholder="Fim do Lote"
                    id="endDateTimeCabin"
                  />
                </FloatingLabel>
              </Col>

              <Col className="mt-3">
                <label htmlFor="ticketPrice" className="mb-1">
                  Valor da Área
                </label>

                <Form.Control
                  // value={ }
                  // onChange={(e) => {
                  //   setSome(e.target.value)
                  // }}
                  id="ticketPrice"
                  type="number"
                  placeholder="Ex: R$ 500,00"
                />
              </Col>

              <Col className="mt-3">
                <label htmlFor="ticketQuantity" className="mb-1">
                  Quantidade de Ingressos por Área
                </label>

                <Form.Control
                  // value={ }
                  // onChange={(e) => {
                  //   setSome(e.target.value)

                  // }}
                  id="ticketQuantity"
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
                  id="anticipatedPayment"
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
                  id="clientPaysFee"
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
      <div className="d-flex justify-content-end my-5">
        <Button
          onClick={() => {
            _createEvent();
          }}
        >
          Criar evento
        </Button>
      </div>
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
