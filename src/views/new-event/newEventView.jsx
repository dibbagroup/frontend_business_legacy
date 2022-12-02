import "./newEventView.scss";

import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { StepOne } from "../../components/newEvent/stepOne";
import { StepTwo } from "../../components/newEvent/stepTwo";
import { StepThree } from "../../components/newEvent/stepThree";

import EventService from "../../service/event_service";
import AuthenticationService from "../../service/authentication_service";
import { useEffect } from "react";

export const NewEventView = (_) => {
  const [step, setStep] = useState(0);
  const eventService = new EventService();
  const authService = new AuthenticationService(
    "name@gmail.com",
    "password",
    null
  );

  useEffect(() => {
    // eventService.initSessionStorage();
  }, []);

  return (
    <main className="p-5 mx-auto">
      <div className="d-flex justify-content-end my-5">
        <Button
          onClick={() => {
            eventService.create();
          }}
        >
          Criar evento
        </Button>

        <Button
          onClick={() => {
            authService.genToken();
          }}
        >
          Autenticação
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
