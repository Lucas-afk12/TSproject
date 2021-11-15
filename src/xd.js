
db.Productos.insertMany([
    {planta:"Chem Berry D", 
    precio: 25.5 ,
    thc: 32 , 
    cbd:"none",
    cosecha: new Date("2020,8,10"),
    stock:false,
    cod_proveedor:1,
    genetica:{ tipo:"sativa",Predominancia:"dominante"},
    humedad:15,
    Apta_para_extracto:false,
    id_p:1,
    type:"p"
    }
])