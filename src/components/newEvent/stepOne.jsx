import { useEffect, useState } from "react";
import axios from "axios";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import EventService from "../../service/event_service";

export const StepOne = (_) => {
  const eventService = new EventService();

  const [obj, setObj] = useState(eventService.getSessionStorage());
  const musicalTypes = ["Sertanejo Universitário", "Rock", "Pop", "Funk"];

  useEffect(() => {
    eventService.updateSessionStorage(obj);
  }, [obj]);

  function onEventBannerInputChange(e) {
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(e);
      /* reader.readAsBinaryString(file); */
      reader.readAsDataURL(file);
    }
  }

  function _handleReaderLoaded(e) {
    setObj({
      ...obj,
      bannerImage: e.target.result,
    });
  }

  // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
  const getCEP = (cepInputValue) => {
    if (cepInputValue.length === 8) {
      cepInputValue = cepInputValue.replace("-", "");
      axios
        .get(`https://viacep.com.br/ws/${cepInputValue}/json/`)
        .then((res) => {
          setObj({
            ...obj,
            street: res.data.logradouro,
            neighborhood: res.data.bairro,
            city: res.data.localidade,
            uf: res.data.uf,
            ddd: res.data.ddd,
          });
        });
    }
  };

  return (
    <main className="stepOne">
      <hr className="my-4" />
      <form>
        <Row>
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
                    value={obj.eventName}
                    onChange={(e) => {
                      setObj({ ...obj, eventName: e.target.value });
                    }}
                    type="text"
                    placeholder="Nome do Evento"
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Gênero musical"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Gênero musical"
                    id="musicalType"
                    onChange={(e) => {
                      setObj({ ...obj, musicalType: e.target.value });
                    }}
                  >
                    <option>Escolha...</option>
                    {musicalTypes.map((e, _) => (
                      <option value={e}>{e}</option>
                    ))}
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
                    value={obj.eventStartDate}
                    onChange={(e) => {
                      setObj({ ...obj, eventStartDate: e.target.value });
                    }}
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
                    value={obj.eventEndDate}
                    onChange={(e) => {
                      setObj({ ...obj, eventEndDate: e.target.value });
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
                value={obj.eventDescription}
                onChange={(e) => {
                  setObj({ ...obj, eventDescription: e.target.value });
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
                file={obj.bannerImage}
                onChange={(e) => onEventBannerInputChange(e)}
              />
            </Form.Group>
          </Col>

          <Col>
            <h4>Local</h4>
            <FloatingLabel label="CEP" className="mb-3">
              <Form.Control
                value={obj.cep}
                onChange={(e) => {
                  setObj({ ...obj, cep: e.target.value });
                  getCEP(e.target.value);
                }}
                type="text"
                placeholder="CEP"
                maxLength={9}
              />
            </FloatingLabel>

            <Row>
              <Col xs={4}>
                <FloatingLabel label="UF" className="mb-3">
                  <Form.Control
                    value={obj.uf}
                    onChange={(e) => setObj({ ...obj, uf: e.target.value })}
                    type="text"
                    placeholder="Estado"
                    disabled
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label="Cidade" className="mb-3">
                  <Form.Control
                    value={obj.city}
                    onChange={(e) => setObj({ ...obj, city: e.target.value })}
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
                    value={obj.placeName}
                    onChange={(e) => {
                      setObj({ ...obj, placeName: e.target.value });
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
                    value={obj.street}
                    onChange={(e) => {
                      setObj({ ...obj, street: e.target.value });
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
                    value={obj.addressNumber}
                    onChange={(e) => {
                      setObj({ ...obj, addressNumber: e.target.value });
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
                    value={obj.complement}
                    onChange={(e) => {
                      setObj({ ...obj, complement: e.target.value });
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
