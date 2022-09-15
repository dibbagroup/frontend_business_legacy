import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import axios from "axios"

import "./newEventView.scss"

/*
MARK: ETAPA 1-3
str  : Nome,
str  : Genero,
str  : Descricao,
img  : Banner,
date : Data,
hour : Horario inicio,
hour : Horario fim,
str  : CEP,
str  : UF,
str  : Cidade,
str  : Logradouro,
int  : Número,
str  : Complemento,

MARK: ETAPA 2-3
int  : Classificacao de idade indicativa
str  : Gênero de ingressos
int  : Qtd de lotes
str  : Categoria dos ingressos
img  : Foto das categorias da festa
date : Inicio do lote
date : Fim do lote

MARK: ETAPA 3-3
bool : Taxas
int  :  D+30 - D+15
*/

class Place {
    cep = String
    uf = String
    city = String
    street = String
    number = 0
    complement = String
}

class Lot {
    startDate = Date
    endDate = Date
    ticketGender = String /* (Unissex) ou (Fem e Masc) */
    loteType = String /* (Individual) ou (Area) */
}

class Event {
    name = String
    gender = String
    description = String
    bannerImage = Image
    startDate = Date
    startTime = Date
    endTime = Date
    place = new Place()

    minimumAge = 0
    imageCategorys = Image
    qtdLots = 0
    lots = [new Lot()]

    taxes = Boolean
    payment = 0 /* D+15 ou D+30 */
}

let eventObject = new Event()

const getCEP = () => {
    // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/60130240
    const cep = document.getElementById(`cep`).value
    if (cep.length === 8) {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            console.log(res.data)
        })
    }
}

let currentStep = 0
export const NewEventView = _ => {
    const [step, setStep] = useState(0)

    return (
        <main>
            {/* HEADER */}
            
            {step === 0 && <StepOne />}
            {step === 1 && <StepTwo />}
            {step === 2 && <StepThree />}

            {/* FOOTER */}
        </main>
    )
}

const StepOne = _ => {
    return (
        <main className="form-1">
            <h1>Step 1</h1>
            <Button onClick={() => { currentStep++ }}>Next</Button>
        
            <h1 className="text-title">Cadastre seu evento</h1>

            <form className="form-1">
      
                <h2 className="text-etapa">Etapa 1/4</h2>

                <p className="text-subtitle">
                Para começar, nos conte um pouco sobre as informações do seu evento. 
                lembre-se que essa parte é como ficará visível para o público da nossa plataforma
                </p>

                <div class="flex">
                    <div className="form-group pt-3 inputFlex">
                        <small>Nome do evento</small>
                        <input
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.eventName || ""} */
                            type="text"
                            className="form-control"
                            id="name"
                            name="eventName"
                            placeholder="No máximo 100 caracteres"
                            maxLength={100}
                            required={true}
                        />
                        <br />
                    </div>

                    <div className="form-group pt-3 inputFlex">
                        <small>Gênero Musical</small> 
                        <input type="text"
                        className="form-control"
                        placeholder="Funk, Rap, Pagode..."></input>
                    </div>
                </div>

                <div class="flex">
                    <div className="form-group mb-3 inputFlex">
                        <label>Descrição</label>
                        <input
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.description || ""} */
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Conte sobre seu evento"
                            rows={5}
                            required={true}
                        />
                    </div>

                    <div className="custom-file form-group inputFlex">
                        <input
                            type="file"
                            /* className="custom-file-input"
                            multiple={false}
                            onDone={({ base64 }) =>
                            setFormEvent({ ...formEvent, selectedFile: base64 })
                            } */
                        />
                        <label className="custom-file-label">
                            Anexe aqui uma foto de banner da sua festa...
                        </label>
                    </div>
                </div>

                <div className="form-group">
            
                    <h3 className="text-center pt-5">Datas e Horários</h3>

                    <small className="control-label">Data</small>
                    <input
                    /* onChange={(ev) => handle(ev)}
                    value={formEvent.date || ""} */
                    className="form-control"
                    id="date"
                    name="date"
                    type="date"
                    required={true}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <small>Horário de início</small>
                        <input
                        /* onChange={(ev) => handle(ev)}
                        value={formEvent.startTime || ""} */
                        type="time"
                        id="start"
                        name="startTime"
                        className="form-control"
                        placeholder="Horário"
                        required={true}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <small>Horário de encerramento</small>
                        <input
                        /* onChange={(ev) => handle(ev)}
                        value={formEvent.endTime || ""} */
                        type="time"
                        id="finish"
                        name="endTime"
                        className="form-control"
                        placeholder="Horário"
                        required={true}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <h3 className="text-center pt-5">Local</h3>
                </div>

                <div class="flex">
                    <div className="form-group col-md-6 inputFlex">
                        <small>CEP</small>
                        <input
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.CEP || ""} */
                            type="text"
                            id="cep"
                            name="CEP"
                            className="form-control"
                            required={true}
                        />
                    </div>

                    <div className="form-row inputFlex">
                        <small>UF</small>
                        
                        <select
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.state || ""} */
                            id="state"
                            name="state"
                            className="form-control"
                        >
                            <option defaultValue>SC</option>
                            <option>SP</option>
                            <option>PR</option>
                            <option>RS</option>
                            <option>RJ</option>
                        </select>
                    </div>
                </div>

                <div class="flex">
                    <div className="form-group col-md-6 inputFlex">
                        <small>Cidade</small>
                        <select
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.city || ""} */
                            name="city"
                            id="city"
                            className="form-control"
                        >
                            <option defaultValue>Escolher...</option>
                            <option>...</option>
                            <option>Florianópolis</option>
                            <option>São Paulo</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <small>Logradouro</small>
                        <input
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.address || ""} */
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            placeholder="Rua ..."
                            required={true}
                        />
                    </div>
                </div>

                <div class="flex">
                    <div className="form-group col-md-6 inputFlex">
                        <small>Número</small>
                        <input
                            /* onChange={(ev) => handle(ev)}
                            value={formEvent.complement || ""} */
                            type="text"
                            id="complement"
                            name="complement"
                            className="form-control"
                            placeholder="03"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-md-6 inputFlex">
                        <small>Complemento</small>
                        <input 
                        placeholder="Casa"
                        className="form-control"></input>
                    </div>
                </div>

                <button className="next">Passar</button>

            </form>
        </main>
    )
}

const StepTwo = _ => {
    return (
        <main>
            <h1>Step 2</h1>
            <Button onClick={() => { currentStep++ }}>Next</Button>
        </main>
    )
}

const StepThree = _ => {
    return (
        <main>
            <h1>Step 3</h1>
            <Button onClick={() => { currentStep++ }}>Next</Button>
        </main>
    )
}