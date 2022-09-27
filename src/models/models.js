class Place {
    cep = String;
    uf = String;
    city = String;
    street = String;
    number = 0;
    complement = String;
}

class Space{
    name = String;
    halfTicketAllowed = Boolean;
    allotments = [new Lot()];
}

class Lot {
    allotmentNumber = Number

    ticketGender = String; /* (Unissex) ou (Fem e Masc) */
    loteType = String; /* (Individual) ou (Area) */
    /* startDate = Date;
    endDate = Date; */
}

class _Event {
    name = String;
    description = String;
    startDateTime = Date;
    endDateTime = Date;
    place = new Place();    
    descriptionPlace = String /* NÃO PRESENTE NO POSTMAN */
    imageCategorys = Image;
    bannerImage = Image;
    musicalType = String;
    userId = String;
    clientPaysFee = Boolean;
    anticipatedPayment = Boolean;
    qrcodeValidation = Boolean;
    spaces = new Space();
    ticketCategories = [];

    minimumAge = 0;
    qtdLots = 0;
    taxes = Boolean;
    paymentMethod = 0; /* D+15 ou D+30 */
}
