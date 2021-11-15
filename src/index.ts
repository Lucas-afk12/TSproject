import { userMenu } from "./UserComponent";
import { clientModel, Cliente, tCliente, ClientFunc } from "./model/clientes";
import { sessionMenu, UserActive } from "./vistas/menu";
import { Plantas, plantFunc, Extracto, ExtractFunc } from "./model/productos";

export const main = async () => {
  let user_conected: tCliente | boolean = await ClientFunc.conected();
  if (user_conected != false) {
    await klk(user_conected);
  } else {
    await userMenu();
  }
  await main();
};

const klk = async (_user: any) => {
  const client: Cliente = ClientFunc.creator(
    _user.username,
    _user._apellido,
    _user._dni,
    _user._nombreUsuario,
    _user._Contraseña,
    _user._pedidos,
    _user._gramos,
    _user._recibo,
    _user._status,
    _user._id
  );

  console.clear();
  console.log(` tu usuario actual: ${client.username}`);
  let n: string = await sessionMenu();

  switch (n) {
    case "s": {
      await options();
    }

    default:
      await clientModel.updateOne(
        { _id: client._id },
        { $set: { _status: false } }
      );
      await main();
  }
};

const options = async () => {
  let n = await UserActive();
  let Productos = [];
  let plantas: Plantas[] = [];
  let extractos: Extracto[] = [];
  switch (n) {
    case 0: {
      const Product_list = async () => {
        console.clear();
        Productos = await plantFunc.get_products();
        for (let Product of Productos) {
          if (Product.type == "p") {
            let temp: Plantas = plantFunc.creator(
              Product.Nombre,
              Product.precio,
              Product.thc,
              Product.cbd,
              Product.stock,
              Product.cod_proveedor,
              Product.genetica,
              Product.humedad,
              Product.Apta_para_extracto,
              Product.cosecha,
              Product.id_p
            );
            plantas.push(temp);
          }

          if (Product.type == "e") {
            let temp: Extracto = ExtractFunc.creator(
              Product.Nombre,
              Product.precio,
              Product.thc,
              Product.cbd,
              Product.stock,
              Product.cod_proveedor,
              Product.N_apaleo,
              Product.mutable,
              Product.variedad,
              Product.id_p
            );
            extractos.push(temp);
          }
        }
        console.log("lista de plantas:");
        console.log("\n")
        plantas.sort((a,b) => (a._precio > b._precio) ? 1 : ((b._precio > a._precio) ? -1 : 0))
        for (let planta of plantas) {
          console.log(
            `${planta.id}.-${planta.NombreProducto} , precioG= ${planta._precio}€ , stock= ${planta._stock} , genetica= ${planta.tipo} , ${planta.Predominancia} `
          );
        }

        for (let extracto of extractos){

        }
      };
      await Product_list();
      break;
    }
  }
  await options();
};

main();
