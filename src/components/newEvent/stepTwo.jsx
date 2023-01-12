import { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

export const StepTwo = (_) => {

    // EVENT - Step 02
    /* const [genderTickets, setGenderTickets] = useState("")
    const [categoryTickets, setCategoryTickets] = useState("") */
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
    /* const [startDateTimeCabin, setStartDateTimeCabin] = useState([])
    const [endDateTimeCabin, setEndDateTimeCabin] = useState([]) */
    const [ticketPrice, setTicketPrice] = useState([])
    const [ticketQuantity, setTicketQuantity] = useState([])

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
                                onChange={(e) => {
                                    setAgeClassification(e.target.value)
                                }}
                                type="text"
                                placeholder="Classificação Indicativa"
                            />
                        </FloatingLabel>

                        <Form.Control
                            value={areaDistributionImage}
                            onChange={(e) => {
                                setAreaDistributionImage(e.target.value)
                            }}
                            type="file"
                            size="md"
                            className="mb-3"
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
                                value={spaceName[0]}
                                onChange={(e) => {
                                    setSpaceName(e.target.value)
                                }}
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
                                        setStartDateTimeSpace(e.target.value)
                                    }}
                                    type="datetime-local"
                                    placeholder="Inicio do Lote"
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
                                        setEndDateTimeSpace(e.target.value)
                                    }}
                                    type="datetime-local"
                                    placeholder="Fim do Lote"
                                />
                            </FloatingLabel>
                        </Col>

                        {/* {genderTickets === 1 && ( */}
                            <Col>
                                <Col className="mt-3">
                                    <label htmlFor="ticketPriceUnissex" className="mb-1">
                                        Valor do Ingresso Unissex
                                    </label>
                                    <Form.Control
                                        value={ticketPriceUnissex[0]}
                                        onChange={(e) => {
                                            setTicketPriceUnissex(e.target.value)
                                        }}
                                        type="number"
                                        placeholder="Ex: R$ 65,00"
                                    />
                                </Col>

                                <Col className="mt-3">
                                    <label htmlFor="ticketQuantityUnisex" className="mb-1">
                                        Quantidade de Ingressos
                                    </label>

                                    <Form.Control
                                        value={ticketQuantityUnissex[0]}
                                        onChange={(e) => {
                                            setTicketQuantityUnissex(e.target.value)
                                        }}
                                        type="number"
                                        placeholder="Ex: 100 ingressos"
                                    />
                                </Col>
                            </Col>
                        {/* )} */}

                        {/* {genderTickets === 2 && ( */}
                            <Col>
                                <Col className="mt-3">
                                    <label htmlFor="ticketPriceMale" className="mb-1">
                                        Valor do Ingresso Masculino
                                    </label>
                                    <Form.Control
                                        value={ticketPriceMale[0]}
                                        onChange={(e) => {
                                            setTicketPriceMale(e.target.value)
                                        }}
                                        type="number"
                                        placeholder="Ex: R$ 87,00"
                                    />
                                </Col>
                                <Col className="mt-3">
                                    <label htmlFor="ticketPriceFemale" className="mb-1">
                                        Valor do Ingresso Feminino
                                    </label>
                                    <Form.Control
                                        value={ticketPriceFemale[0]}
                                        onChange={(e) => {
                                            setTicketPriceFemale(e.target.value)
                                        }}
                                        type="number"
                                        placeholder="Ex: R$ 65,00"
                                    />
                                </Col>

                                <Col className="mt-3">
                                    <label htmlFor="ticketQuantityMale" className="mb-1">
                                        Quantidade de Ingressos Masculinos
                                    </label>

                                    <Form.Control
                                        value={ticketQuantityMale[0]}
                                        onChange={(e) => {
                                            setTicketQuantityMale(e.target.value)
                                        }}
                                        type="number"
                                        placeholder="Ex: 100 ingressos"
                                    />
                                </Col>

                                <Col className="mt-3">
                                    <label htmlFor="ticketQuantityFemale" className="mb-1">
                                        Quantidade de Ingressos Femininos
                                    </label>

                                    <Form.Control
                                        value={ticketQuantityFemale[0]}
                                        onChange={(e) => {
                                            setTicketQuantityFemale(e.target.value)

                                        }}
                                        type="number"
                                        placeholder="Ex: 100 ingressos"
                                    />
                                </Col>
                            </Col>
                        {/* )} */}
                    </Row>

                    <Row className="mt-4">
                        <h5>Ingressos por Área</h5>

                        <Col className="mt-3">
                            <label htmlFor="eventCabinName" className="mb-1">
                                Area do Evento
                            </label>

                            <Form.Control
                                value={cabinName[0]}
                                onChange={(e) => {
                                    setCabinName(e.target.value)
                                }}
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
                                />
                            </FloatingLabel>
                        </Col>

                        <Col className="mt-3">
                            <label htmlFor="ticketPrice" className="mb-1">
                                Valor da Área
                            </label>

                            <Form.Control
                                value={ticketPrice}
                                onChange={(e) => {
                                    setTicketPrice(e.target.value)
                                }}
                                type="number"
                                placeholder="Ex: R$ 500,00"
                            />
                        </Col>

                        <Col className="mt-3">
                            <label htmlFor="ticketQuantity" className="mb-1">
                                Quantidade de Ingressos por Área
                            </label>

                            <Form.Control
                                value={ticketQuantity}
                                onChange={(e) => {
                                    setTicketQuantity(e.target.value)
                                }}
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