import { userMenu } from "./UserComponent";
import { clientModel, Cliente, tCliente, ClientFunc } from "./model/clientes";
import { sessionMenu, UserActive } from "./vistas/menu";
import {
  Plantas,
  plantFunc,
  Extracto,
  ExtractFunc,
  plantModel,
} from "./model/productos";
import { leerTeclado } from "./vistas/lecturaTeclado";
import { version } from "mongoose";

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
    _user._nombre,
    _user._apellidos,
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
      await options(client);
    }

    default:
      await clientModel.updateOne(
        { _id: client._id },
        { $set: { _status: false } }
      );
      await main();
  }
};

const options = async (_user: Cliente) => {
  let n = await UserActive();
  let Productos: any[] = [];
  let plantas: Plantas[] = [];
  let extractos: Extracto[] = [];
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
          Product.cosecha,
          Product.N_apaleo,
          Product.mutable,
          Product.variedad,
          Product.id_p,
          Product.type
        );
        extractos.push(temp);
      }
    }
  };

  await Product_list();

  switch (n) {
    case 0: {
      mostrar(plantas, extractos);
      break;
    }
    case 1: {
     
      await Añadir(_user , plantas , extractos);
      break;
    }
	case 2: {
		break
	}
	case 3:{
		await ver(_user , plantas , extractos)
		break
	}
  }
  await options(_user);
};

const mostrar = (plantas: Plantas[], extractos: Extracto[]) => {
  console.clear();
  console.log("lista de plantas:");
  for (let planta of plantas) {
    planta.mostrar();
  }
  console.log("\n");
  console.log("lista de extractos:");
  for (let extracto of extractos) {
    extracto.mostrar();
  }
};


const Añadir = async (_user: Cliente , plantas: Plantas[] ,extractos: Extracto[]) => {
	mostrar(plantas, extractos);
	console.log("\n");
	let buy = parseInt(
	  await leerTeclado(
		"Introduzca el id del producto que desea añadir al carrito"
	  )
	);
	let grams = parseInt(
	  await leerTeclado("Cuantos gramos le gustaria comprar")
	);
	let temp: Plantas = plantas.find((producto) => producto.id == buy);
	if (temp !== undefined) {
	  let producto: Plantas = temp;
	  if (producto._stock == false) {
		console.log("Ese producto no esta disponible");
	  } else {
		_user.addpedido = producto.id;
		_user.addgrams = grams;
	  }
	} else {
	  let temp1: Extracto = extractos.find(
		(extracto) => extracto.id == buy
	  );
	  if (temp1 !== undefined) {
		let producto: Extracto = temp1;
		if (producto._stock == false) {
		  console.log("Ese producto no esta disponible");
		} else {
		  _user.addpedido = producto.id;
		  _user.addgrams = grams;
		}
	  }
	}
  };

const ver = async (_user: Cliente , plantas: Plantas[] , extractos: Extracto[]) => {

	_user.ver(plantas, extractos)
}

  main();
