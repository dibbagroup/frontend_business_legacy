let p = new Place()
p.cep = "00000000"
p.city = "Cidade"
p.complement = "Complemento"
p.number = 123
p.street = "Rua"
p.uf = "XX"

let l = new Lot()
l.allotmentNumber = 10
l.ticketGender = "Unissex"
l.loteType = "Individual"

let e = new _Event()
e.name = "Event name"
e.description = "event description"
e.startDateTime = new Date.now()
e.endDateTime = new Date.now()