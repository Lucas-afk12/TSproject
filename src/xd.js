db.productos.insertMany([
  {
    Nombre: "Chem Berry D",
    precio: 25.5,
    thc: 32,
    cbd: "none",
    cosecha: new Date("2020,8,10"),
    stock: false,
    cod_proveedor: 1,
    genetica: { tipo: "sativa", Predominancia: "dominante" },
    humedad: 15,
    Apta_para_extracto: false,
    id_p: 1,
    type: "p",
  },

  {
    Nombre:"Bruce Banner BX 2.0",
    id_p: 2,
    precio: 23,
    thc: 30,
    genetica: { tipo: "sativa", Predominancia: "dominante" },
    cbd: "none",
    cosecha: new Date("2020,10,11"),
    humedad: 40,
    Apta_para_extracto: true,
    stock: true,
    cod_proveedor: 1,
    type: "p",
  },

  {
    Nombre: "HulkBerry",
    precio: 18.5,
    id_p: 3,
    thc: 27,
    genetica: { tipo: "sativa", Predominancia: "semi" },
    cbd: "bajo",
    cosecha: new Date("2020,8,10"),
    humedad: 20,
    Apta_para_extracto: false,
    stock: true,
    cod_proveedor: 1,
    type: "p",
  },

  {
    Nombre: "Original Glue",
    id_p: 4,
    precio: 17,
    thc: 30,
    genetica: { tipo: "indica", Predominancia: "dominante" },
    cbd: "none",
    cosecha: new Date("2020,4,13"),
    humedad: 5,
    Apta_para_extracto: true,
    stock: true,
    cod_proveedor: 1,
    type: "p",
  },

  {
    Nombre: "Girl Scout Cookies",
    id_p: 5,
    precio: 16.5,
    thc: 28,
    genetica: { tipo: "indica", Predominancia: "semi" },
    cbd: "none",
    cosecha: new Date("2020,1,1"),
    humedad: 17,
    Apta_para_extracto: false,
    stock: false,
    cod_proveedor: 2,
    type: "p",
  },

  {
    Nombre: "Green Gelato",
    precio: 15,
    id_p: 6,
    thc: 27,
    genetica: { tipo: "indica", Predominancia: "semi" },
    cbd: "bajo",
    cosecha: new Date("2020,5,27"),
    humedad: 33,
    Apta_para_extracto: true,
    stock: true,
    cod_proveedor: 2,
    type: "p",
  },

  {
    Nombre: "Romulan Haze",
    id_p: 7,
    precio: 13,
    thc: 20,
    genetica: { tipo: "sativa", Predominancia: "dominante" },
    cbd: "bajo",
    cosecha: new Date("2020,6,24"),
    stock: false,
    humedad: 10,
    Apta_para_extracto: false,
    cod_proveedor: 2,
    type: "p",
  },

  {
    Nombre: "Where's My Bike",
    id_p: 8,
    precio: 10,
    thc: 17,
    genetica: { tipo: "sativa", Predominancia: "semi" },
    cbd: "bajo",
    cosecha: new Date("2020,2,28"),
    stock: false,
    humedad: 12,
    Apta_para_extracto: true,
    cod_proveedor: 2,
    type: "p",
  },

  {
    Nombre: "Island Sweet Skunk",
    id_p: 9,
    precio: 13,
    thc: 23,
    genetica: { tipo: "sativa", Predominancia: "semi" },
    cbd: "alto",
    cosecha: new Date("2020,3,8"),
    stock: false,
    humedad: 22,
    Apta_para_extracto: false,
    cod_proveedor: 3,
    type: "p",
  },

  {
    Nombre: "Gorilla Zkittlez",
    id_p: 10,
    precio: 8,
    thc: 29,
    genetica: { tipo: "indica", Predominancia: "dominante" },
    cbd: "none",
    cosecha: new Date("2020,7,20"),
    stock: false,
    humedad: 27,
    Apta_para_extracto: true,
    cod_proveedor: 3,
    type: "p",
  },
  {
    Nombre: "kinder hash",
    precio: 12,
    thc: 32,
    cbd: "none",
    cosecha: new Date("2020,8,10"),
    stock: true,
    cod_proveedor: 1,
    N_apaleo: 1,
    mutable: true,
    variedad: "ice",
    id_p: 11,
    type: "e",
  }
]);
