import {
	Cliente,
	clientModel,
	tCliente,
	ClientFunc,
} from './model/clientes';
import { menuLogin } from './vistas/menu';
import { leerTeclado } from './vistas/lecturaTeclado';
import { Mayoristas , MayoristFunc} from './model/mayoristas';
import { main } from './index';
export const userMenu = async () => {
	console.clear();

	let n = await menuLogin();

	switch (n) {
		case 1: {
			await UserCreator();
			break;
		}

		case 2: {
			await userLogin();
			break;
		}
		case 3: {
			break;
		}

		default:
			userMenu();
			break;
	}
};

const UserCreator = async (Errores?: string[]) => {
	console.clear();
	let errorsend: Array<string> = [];
	if (Errores != undefined) {
		console.log(Errores);
	}
	const type = await leerTeclado(
		'si quiere crear una cuenta de usuario introduzca U  o una cuenta de mayorista introduzca M'
	);
	switch (type) {
		case 'U': {
			const user = await leerTeclado('Introduzca su nombre de usuario');
			const contraseña = await leerTeclado('Introduzca su contraseña');
			const nombre = await leerTeclado('introduzca su nombre');
			const apellidos = await leerTeclado('Apellidos');
			const dni = await leerTeclado('dni');
			const pedidos: number[] = [];
			const gramos: number[] = [];
			let recibo = await leerTeclado(
				'¿quiere recicibir ticket de sus compras?(s/n)'
			);
			let status = false;
			let reciboChek = false;
			{
				if (recibo == 's') {
					reciboChek = true;
				}

				try {
					let cliente: Cliente | void = ClientFunc.creator(
						nombre,
						apellidos,
						dni,
						user,
						contraseña,
						pedidos,
						gramos,
						reciboChek,
						status
					);

					let errors: string[] = await cliente.errorchecker();
					if (errors.length === 0) {
						let saver = new clientModel(cliente);
						await saver.save(),
							(err: any) => {
								errorsend.push('Ha ocurrido un error guardando el cliente');
							};
					} else {
						errorsend = errors;
						await UserCreator(errorsend);
					}
				} catch (err) {
					errorsend.push('Ha ocurrido un error inesperado');
				}
			}
			break;
		}
		case 'M': {
			const user = await leerTeclado('Introduzca su nombre de usuario');
			const contraseña = await leerTeclado('Introduzca su contraseña');
			const nombre = await leerTeclado(
				'introduzca el nombre del titular de la empresa'
			);
			const apellidos = await leerTeclado(
				'introduzca los Apellidos del titular de la empresa'
			);
			const dni = await leerTeclado(
				'introudzca el dni del titular de la empresa'
			);
			const empresa = await leerTeclado('Introduzca su codigo de empresa');
			const pedidos: number[] = [];
			const gramos: number[] = [];
			let recibo = await leerTeclado(
				'¿quiere recicibir ticket de sus compras?(s/n)'
			);
			let status = false;
			let reciboChek = false;
			{
				if (recibo == 's') {
					reciboChek = true;
				}

				try {
					let Mayoristas: Cliente | void = MayoristFunc.create(
						nombre,
						apellidos,
						dni,
						user,
						contraseña,
						pedidos,
						gramos,
						reciboChek,
						status,
						empresa
					);

					let errors: string[] = await Mayoristas.errorchecker();
					if (errors.length === 0) {
						let saver = new clientModel(Mayoristas);
						await saver.save(),
							(err: any) => {
								errorsend.push('Ha ocurrido un error guardando el cliente');
							};
					} else {
						errorsend = errors;
						await UserCreator(errorsend);
					}
				} catch (err) {
					errorsend.push('Ha ocurrido un error inesperado');
				}
			}
			break;
		}

		default:
			break;
	}
};

const userLogin = async (errors?: Array<string>) => {
	console.clear();
	let error: Array<string> = [];
	if (errors != undefined) {
		console.log(errors);
	}
	let user = await leerTeclado('Introduzca su nombre de usuario');
	let contraseña = await leerTeclado('Introduzca su contraseña');

	const userQuery: any = await clientModel.findOne({
		_nombreUsuario: user,
	});

	if (userQuery != null) {
		let usuario: Cliente | Mayoristas;
		if (userQuery.type == 'C') {
			let user: Cliente = ClientFunc.creator(
				userQuery._nombre,
				userQuery._apellidos,
				userQuery._dni,
				userQuery._nombreUsuario,
				userQuery._Contraseña,
				userQuery._pedidos,
				userQuery._gramos,
				userQuery._recibo,
				userQuery._status,
				userQuery._id
			);
			usuario = user;
		} else {
			let user: Mayoristas = MayoristFunc.create(
				userQuery._nombre,
				userQuery._apellidos,
				userQuery._dni,
				userQuery._nombreUsuario,
				userQuery._Contraseña,
				userQuery._pedidos,
				userQuery._gramos,
				userQuery._recibo,
				userQuery._status,
				userQuery.numEmpresa,
				userQuery._id
			);
			usuario = user;
		}
		if (usuario.Contraseña == contraseña) {
			await clientModel.updateOne(
				{ _id: usuario._id },
				{ $set: { _status: true } }
			);
			await main();
		} else {
			error.push('Contraseña incorrecta');
			await userLogin(error);
		}
	} else {
		error.push('Ese usuario no existe');
		await userLogin(error);
	}
};
