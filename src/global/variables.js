export const variables = {
    token: "",
    config: {
        headers: {
            Authorization: '',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Accept": "application/json"

        }
    },
    eventBody : {
        name: "Alguma coisa",
        description: "outra",
        /* TAG */
        startDateTime: "2022-12-30",
        endDateTime: "2022-01-01",
        cep: "88058010",
        address: "1",
        number: "1",
        complement: "1",
        ageClassification: "1",
        state: "1",
        areaDistributionImage: "1",
        bannerImage: "imagem",
        musicalType: "sertanejo",
        city: "1",
        clientPaysFee: "1",
        anticipatedPayment: "1",
        qrcodeValidation: "2", /* INSERIR FRONT */
        /* SPACES */
        spaces: [
            {
                name: "Pista Plus",
                halfTicketAllowed: true,
                allotments: [
                    {
                        allotmentNumber: 1,
                        ticketQuantityUnisex: 30,
                        ticketPriceUnisex: 70
                    },
                    {
                        allotmentNumber: 2,
                        ticketQuantityUnisex: 20,
                        ticketPriceUnisex: 80
                    }
                ]
            },
            {
                name: "Backstage",
                halfTicketAllowed: false,
                allotments: [
                    {
                        allotmentNumber: 1,
                        ticketQuantityUnisex: 10,
                        ticketPriceUnisex: 100
                    },
                    {
                        allotmentNumber: 2,
                        ticketQuantityUnisex: 10,
                        ticketPriceUnisex: 120
                    }
                ]
            }
        ],
        addressDescription: "stage music park",
    }
}