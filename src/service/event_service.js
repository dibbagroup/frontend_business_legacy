export default class EventService {
  // constructor(event) {
  //   this.event = event;
  // }

  create() {
    console.log("[*] Create event");
  }

  getSessionStorage() {
    return JSON.parse(sessionStorage.getItem(`event`));
  }

  initSessionStorage() {
    sessionStorage.setItem(`event`, JSON.stringify(new_event_empty));
  }

  clearSessionStorage() {
    sessionStorage.removeItem(`event`);
    sessionStorage.setItem(`event`, JSON.stringify(new_event_empty));
  }

  updateSessionStorage(changes) {
    let current_object = this.getSessionStorage();

    /*
    TODO:
    cep : desconsiderando 0 a direita
    */
    sessionStorage.setItem(
      `event`,
      JSON.stringify({ ...current_object, ...changes })
    );

    console.log(this.getSessionStorage());
  }
}

const new_event_empty = {
  description: "",
  startDateTime: "",
  endDateTime: "",
  cep: "",
  address: "",
  number: "",
  complement: "",
  ageClassification: "",
  state: "",
  areaDistributionImage: "",
  bannerImage: "",
  musicalType: "",
  city: "",
  clientPaysFee: "",
  anticipatedPayment: "",
  qrcodeValidation: "" /* INSERIR FRONT */,
  spaces: [],
  addressDescription: "",
}
