// api/mockData.js

export const routes = {
  ida: {
    id: "ida",
    stops: ["Rodoviária", "Anexo", "Constructec", "Combate", "UFC"],
    times: ["07:00", "07:15", "07:30", "07:45", "08:00"],
  },
  volta: {
    id: "volta",
    stops: ["UFC", "Combate", "Constructec", "Anexo", "Rodoviária"],
    times: ["17:30", "17:45", "18:00", "18:15", "18:30"],
  }
}

export let currentTrip = {
  bus: null,            // "A" ou "B"
  routeType: null,      // "ida" ou "volta"
  currentStopIndex: 0,  // controla as bolinhas
  started: false,
}

export let notices = []
