import { userMenu } from './UserComponent';
import { clientModel, Cliente, tCliente, ClientFunc } from './model/clientes';
import { sessionMenu, UserActive } from './vistas/menu';
import { Plantas, plantFunc, plantModel } from './model/productos';
import { leerTeclado } from './vistas/lecturaTeclado';
import { Pedidos, pedidoModel } from './model/pedidos';
import { ExtractFunc, Extracto } from './model/extractos';
import { Mayoristas, MayoristFunc } from './model/mayoristas';

export const main = async () => {
	let user_conected: tCliente | boolean = await ClientFunc.conected();
	if (user_conected != false) {
		await isOn(user_conected);
	} else {
		await userMenu();
	}
	await main();
};

const isOn = async (_user: any) => {
	if (_user.type == 'C') {
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
			case 's': {
				await options(client);
			}

			default:
				await clientModel.updateOne(
					{ _id: client._id },
					{ $set: { _status: false } }
				);
				await main();
		}
	}
	if (_user.type == 'M') {
		const client: Cliente = MayoristFunc.create(
			_user._nombre,
			_user._apellidos,
			_user._dni,
			_user._nombreUsuario,
			_user._Contraseña,
			_user._pedidos,
			_user._gramos,
			_user._recibo,
			_user._status,
			_user.numEmpresa,
			_user._id
		);

		console.clear();
		console.log(` tu usuario actual: ${client.username}`);
		let n: string = await sessionMenu();

		switch (n) {
			case 's': {
				await options(client);
			}

			default:
				await clientModel.updateOne(
					{ _id: client._id },
					{ $set: { _status: false } }
				);
				await main();
		}
	}
};

const options = async (_user: Cliente | Mayoristas) => {
	let n = await UserActive();
	let Productos: any[] = [];
	let plantas: Plantas[] = [];
	let extractos: Extracto[] = [];
	const Product_list = async () => {
		console.clear();
		Productos = await plantFunc.get_products();
		for (let Product of Productos) {
			if (Product.type == 'p') {
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

			if (Product.type == 'e') {
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
			await Añadir(_user, plantas, extractos);
			break;
		}
		case 2: {
			await Eliminar(_user, plantas, extractos);
			break;
		}
		case 3: {
			await ver(_user, plantas, extractos);
			break;
		}

		case 4: {
			await Espera(_user);
			break;
		}

		case 5: {
			await verPedidos(_user, plantas, extractos);
			break;
		}

		case 6: {
			await finalizar(_user);
			break;
		}

		case 7: {
			await isOn(_user);
			break;
		}
	}
	await options(_user);
};

const mostrar = (plantas: Plantas[], extractos: Extracto[]) => {
	console.clear();
	console.log('lista de plantas:');
	for (let planta of plantas) {
		planta.mostrar();
	}
	console.log('\n');
	console.log('lista de extractos:');
	for (let extracto of extractos) {
		extracto.mostrar();
	}
};

const Añadir = async (
	_user: Cliente|Mayoristas,
	plantas: Plantas[],
	extractos: Extracto[]
) => {
	mostrar(plantas, extractos);
	console.log('\n');
	let buy = parseInt(
		await leerTeclado(
			'Introduzca el id del producto que desea añadir al carrito'
		)
	);
	let grams = parseInt(await leerTeclado('Cuantos gramos le gustaria comprar'));
	let temp: Plantas | undefined = plantas.find(
		(producto) => producto.id == buy
	);
	if (temp !== undefined) {
		let producto: Plantas = temp;
		if (producto._stock == false) {
			console.log('Ese producto no esta disponible');
		} else {
			if (producto.id != undefined) {
				_user.addpedido = producto.id;
				_user.addgrams = grams;
			}
		}
	} else {
		let temp1: Extracto | undefined = extractos.find(
			(extracto) => extracto.id == buy
		);
		if (temp1 !== undefined) {
			let producto: Extracto = temp1;
			if (temp1._stock == false) {
				console.log('Ese producto no esta disponible');
			} else {
				if (producto.id != undefined) {
					_user.addpedido = producto.id;
					_user.addgrams = grams;
				}
			}
		}
	}
};

const ver = async (
	_user: Cliente | Mayoristas,
	plantas: Plantas[],
	extractos: Extracto[]
) => {
	_user.verCarrito(plantas, extractos);
};

const Eliminar = async (
	_user: Cliente|Mayoristas,
	plantas: Plantas[],
	extractos: Extracto[]
) => {
	let isEmpty = _user.verCarrito(plantas, extractos);
	if (isEmpty !== false) {
		let remove = parseInt(
			await leerTeclado('introduzca el numero de producto que quiere eliminar')
		);
		let carrito = _user.pedidos;
		carrito.splice(remove, 1);
		_user.changepedido = carrito;
	}
};

const verPedidos = async (
	_user: Cliente|Mayoristas,
	plantas: Plantas[],
	extractos: Extracto[]
) => {
	console.clear();
	let i = 1;
	let pedidosQuery: any = await pedidoModel.find({ cliente: _user._id });
	let pedidos: Array<Pedidos> = [];
	for (let pedido of pedidosQuery) {
		pedidos.push(
			new Pedidos(pedido.pedidos, pedido.gramos, pedido.fecha, pedido.cliente)
		);
	}
	for (let pedido of pedidos) {
		pedido.mostrar(plantas, extractos, i, _user.type);
		i++;
	}
};

const Espera = async (_user: Cliente|Mayoristas) => {
	let pedidosQuery: any = await pedidoModel.find({ cliente: _user._id });
	let pedidos: Array<Pedidos> = [];
	let i = 1;
	for (let pedido of pedidosQuery) {
		pedidos.push(
			new Pedidos(pedido.pedidos, pedido.gramos, pedido.cliente, pedido.fecha)
		);
	}

	for (let pedido of pedidos) {
		pedido.tiempo(i);
		i++;
	}
};

const finalizar = async (_user: Cliente|Mayoristas) => {
	if (_user.type == 'M') {
		if (_user.pedidos.length <= 5) {
			console.log(
				'al ser una cuenta de empresa tienes que comprar un minimo de 5 productos'
			);
			if (_user.pedidos.length === 0) {
				console.log(
					'No puedes finalizar la compra ya que no tienes ningun producto en el carrito'
				);
			} else {
				let pedidos = _user.pedidos;
				let gramos = _user.gramos;
				let total = _user.verCarrito;
				let id = _user._id;
				if (id !== undefined) {
					let pedido = new Pedidos(pedidos, gramos, id);
					let pedidoSaver = new pedidoModel(pedido);
					pedidoSaver.save();
					_user.changepedido = [];
				}
			}
		}
	} else {
		if (_user.pedidos.length === 0) {
			console.log(
				'No puedes finalizar la compra ya que no tienes ningun producto en el carrito'
			);
		} else {
			let pedidos = _user.pedidos;
			let gramos = _user.gramos;
			let id = _user._id;
			if (id !== undefined) {
				let pedido = new Pedidos(pedidos, gramos, id);
				let pedidoSaver = new pedidoModel(pedido);
				pedidoSaver.save();
				_user.changepedido = [];
			}
		}
	}
};

main();
