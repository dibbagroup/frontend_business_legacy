import { useState } from "react";
import { env } from "../../data/env";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { CreateEvent } from "../../service/newEvent"
import "./newEventView.scss";
import { variables } from "../../global/variables";
import { Authentication } from "../../service/auth";
import { useEffect } from "react";
import { StepOne } from "../../components/newEvent/stepOne";
import { StepTwo } from "../../components/newEvent/stepTwo";
import { StepThree } from "../../components/newEvent/stepThree";

export const NewEventView = (_) => {
  
  const [step, setStep] = useState(0);

  const _createEvent = _ => {
    /* // address
    variables.eventBody.cep = cep
    variables.eventBody.address = street
    variables.eventBody.complement = complement
    variables.eventBody.city = city
    variables.eventBody.state = uf
    variables.eventBody.number = addressNumber
    variables.eventBody.addressDescription = placeName
    
    // step 01
    variables.eventBody.name = eventName
    variables.eventBody.musicalType = musicalType
    variables.eventBody.startDateTime = eventStartDate
    variables.eventBody.endDateTime = eventEndDate
    variables.eventBody.description = eventDescription
    variables.eventBody.bannerImage = eventBanner
    
    // step 02   
    variables.eventBody.ageClassification = ageClassification
    variables.eventBody.areaDistributionImage = areaDistributionImage

    // Space Values
    variables.eventBody.spaces.eventId = 
    variables.eventBody.spaces.name = 
    variables.eventBody.spaces.halfTicketAllowed = 

    // Space Allotment Values
    variables.eventBody.spaces.allotments.allotmentNumber =
    variables.eventBody.spaces.allotments.startDateTime =
    variables.eventBody.spaces.allotments.endDateTime =
    variables.eventBody.spaces.allotments.ticketQuantityUnisex = 
    variables.eventBody.spaces.allotments.ticketPriceUnisex = 
    variables.eventBody.spaces.allotments.ticketQuantityFemale = 
    variables.eventBody.spaces.allotments.ticketQuantityMale = 
    variables.eventBody.spaces.allotments.ticketPriceFemale = 
    variables.eventBody.spaces.allotments.ticketPriceMale =  
    
    // Cabin Values
    variables.eventBody.cabins.eventId = 
    variables.eventBody.cabins.name = 

    // Cabin Allotment Values
    variables.eventBody.cabins.allotments.allotmentNumber = 
    variables.eventBody.cabins.allotments.startDateTime =
    variables.eventBody.cabins.allotments.endDateTime =
    variables.eventBody.cabins.allotments.ticketPrice = 
    variables.eventBody.cabins.allotments.ticketQuantity = 

    // step 03
    variables.eventBody.clientPaysFee = taxes
    variables.eventBody.anticipatedPayment = paymentMethod

    // wanted
    variables.eventBody.ticketCategories = ["FULL", "HALF", "PARTNER_DISCOUNT"]
    variables.eventBody.userId =
    variables.eventBody.qrcodeValidation = qrCodeValidation */
    CreateEvent()
  }

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

        <Button
          onClick={() => {
            Authentication()
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