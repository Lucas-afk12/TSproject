import { userMenu } from "./UserComponent";
import { clientModel, Cliente, tCliente, ClientFunc } from "./model/clientes";
import { sessionMenu, UserActive } from "./vistas/menu";
import { db } from "./database/database";
import { Plantas } from "./model/productos";

export const main = async () => {
  const user_conected: tCliente | boolean = await ClientFunc.conected();
  if (user_conected != false) {
    await klk(user_conected);
  } else {
    await userMenu();
  }
  await main();
};

const klk = async (_user: any) => {
  let client: Cliente = ClientFunc.creator(
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
  switch (n) {
    case 0: {
      const listar = "a";
      break;
    }
  }
};

main();
