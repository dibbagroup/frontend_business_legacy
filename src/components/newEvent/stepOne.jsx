import { useState } from "react"
import axios from "axios"
import { Col, FloatingLabel, Form, Row } from "react-bootstrap"
import ImageUpload from "../../data/ImageUpload"

export const StepOne = _ => {
    const [cep, setCep] = useState("")
    const [street, setStreet] = useState("")
    const [complement, setComplement] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [uf, setUF] = useState("")
    const [ddd, setDDD] = useState("")
    const [addressNumber, setAddressNumber] = useState("")
    const [placeName, setPlaceName] = useState("")

    const [eventName, setEventName] = useState("")
    const [musicalType, setMusicalType] = useState("")
    const [eventStartDate, setEventStartDate] = useState("")
    const [eventEndDate, setEventEndDate] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventBanner, setEventBanner] = useState("")

    function onEventBannerInputChange(e) {
        console.log("file uploaded: ", e.target.files[0]);
        let file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded.bind(e);
            /* reader.readAsBinaryString(file); */
            reader.readAsDataURL(file)
        }
    }

    function _handleReaderLoaded(e) {
        setEventBanner(e.target.result);
    };

    // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
    const getCEP = cepInputValue => {
        if (cepInputValue.length === 8) {
            cepInputValue = cepInputValue.replace("-", "")
            axios.get(`https://viacep.com.br/ws/${cepInputValue}/json/`)
                .then((res) => {
                    setStreet(res.data.logradouro)
                    setNeighborhood(res.data.bairro)
                    setCity(res.data.localidade)
                    setUF(res.data.uf)
                    setDDD(res.data.ddd)
                })
        }
    }

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
                                        onChange={(e) => { setEventName(e.target.value) }}
                                        type="text"
                                        placeholder="Nome do Evento"
                                    />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel controlId="floatingSelect" label="Gênero musical" className="mb-3">
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
                                <FloatingLabel controlId="floatingInput" label="Data de Inicio" className="mb-3">
                                    <Form.Control
                                        value={eventStartDate}
                                        onChange={(e) => { setEventStartDate(e.target.value) }}
                                        type="datetime-local"
                                        placeholder="Data de Inicio"
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
                                as="textarea"
                                style={{ height: "130px" }}
                            />
                        </FloatingLabel>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                onChange={e => onEventBannerInputChange(e)}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <h4>Local</h4>
                        <FloatingLabel label="CEP" className="mb-3">
                            <Form.Control
                                value={cep}
                                onChange={(e) => {
                                    setCep(e.target.value)
                                    getCEP(e.target.value)
                                }
                                }
                                type="text"
                                placeholder="CEP"
                                maxLength={9}
                            />
                        </FloatingLabel>

                        <Row>
                            <Col xs={4}>
                                <FloatingLabel label="UF" className="mb-3">
                                    <Form.Control
                                        value={uf}
                                        onChange={e =>
                                            setUF(e.target.value)
                                        }
                                        type="text"
                                        placeholder="Estado"
                                        disabled
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label="Cidade" className="mb-3">
                                    <Form.Control
                                        value={city}
                                        onChange={e =>
                                            setCity(e.target.value)
                                        }
                                        type="text"
                                        placeholder="Cidade"
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
                                        required
                                    />
                                </FloatingLabel>
                            </Col>

                            <Col>
                                <FloatingLabel label="Rua" className="mb-3">
                                    <Form.Control
                                        value={street}
                                        onChange={(e) => {
                                            setStreet(e.target.value)
                                        }}
                                        type="text"
                                        placeholder="Rua"
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
    )
}