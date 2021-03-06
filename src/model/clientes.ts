import { Schema, model, createConnection } from 'mongoose';
import { Extracto } from './extractos';
import { Plantas } from './productos';
const autoIncrement = require('mongoose-auto-increment');

const connection = createConnection(
	'mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

//Clase cliente con sus funcionalidades

export class Cliente {
	_id?: number;
	protected _nombre: string;
	protected _apellidos: String;
	protected _dni: String;
	protected _nombreUsuario: string;
	protected _Contraseña: string;
	private _pedidos: Array<number> = [];
	private _gramos: Array<number> = [];
	private _recibo: Boolean;
	private _status: Boolean;
	type: string;

	constructor(
		_nombre: string,
		_apellido: string,
		_dni: string,
		_nombreUsuario: string,
		_Contraseña: string,
		_pedidos: Array<number>,
		_gramos: number[],
		_recibo: boolean,
		_status: boolean,
		id?: number
	) {
		this._id = id;
		this._nombre = _nombre;
		this._apellidos = _apellido;
		this._dni = _dni;
		this._nombreUsuario = _nombreUsuario;
		this._Contraseña = _Contraseña;
		this._pedidos = _pedidos;
		this._gramos = _gramos;
		this._recibo = _recibo;
		this._status = _status;
		this.type = 'C';
	}

	get Contraseña() {
		return this._Contraseña;
	}

	get username() {
		return this._nombreUsuario;
	}

	get pedidos() {
		return this._pedidos;
	}

	get gramos() {
		return this._gramos;
	}

	set addpedido(data: number) {
		this._pedidos.push(data);
	}

	set changepedido(data: Array<number>) {
		this._pedidos = data;
	}

	set addgrams(data: number) {
		this._gramos.push(data);
	}

	//funciones de datos.

	verCarrito(plantas: Plantas[], extractos: Extracto[]) {
		let pedidos: Array<number> = this.pedidos;
		let gramos: Array<number> = this.gramos;
		let x = 0;
		let total = 0;
		let totalIva = 0;

		if (pedidos.length !== 0) {
			let gram = gramos.reduce((a, b) => a + b);

			for (let pedido of pedidos) {
				let temp: Plantas | undefined = plantas.find(
					(planta) => planta.id == pedido
				);
				if (temp !== undefined) {
					console.log(
						`${x}.- ${gramos[x]} gramos de ${
							temp.NombreProducto
						} por un precio total de ${temp.totalprice(gramos[x], this.type)}€`
					);
					total = temp.totalprice(gramos[x],this.type) + total;
					totalIva = temp.totalIva(gramos[x], this.type)
				} else {
					let temp: Extracto | undefined = extractos.find(
						(extracto) => extracto.id == pedido
					);
					if (temp !== undefined) {
						console.log(
							`${x}.- ${gramos[x]} gramos de ${
								temp.NombreProducto
							} por un precio total de ${temp.totalprice(gramos[x],this.type)}€`
						);
						total = temp.totalprice(gramos[x],this.type) + total;
						totalIva = temp.totalIva(gramos[x],this.type) + totalIva
					}
				}
				x++;
			}
			console.log(`un total de ${gram} gramos por ${total}€`);
			console.log(`iva_incluido:${totalIva}`)
		} else {
			console.log('el carrito esta vacio');
			return false;
		}
	}

	//funciones tecnicas.
	creator(
		_nombre: string,
		_apellido: string,
		_dni: string,
		_nombreUsuario: string,
		_Contraseña: string,
		_pedidos: number[],
		_gramos: number[],
		_recibo: boolean,
		_status: boolean,
		id?: number
	) {
		if (id === undefined) {
			return new Cliente(
				_nombre,
				_apellido,
				_dni,
				_nombreUsuario,
				_Contraseña,
				_pedidos,
				_gramos,
				_recibo,
				_status
			);
		}
		return new Cliente(
			_nombre,
			_apellido,
			_dni,
			_nombreUsuario,
			_Contraseña,
			_pedidos,
			_gramos,
			_recibo,
			_status,
			id
		);
	}

	Exist(user?: string) {
		const promise = new Promise<boolean>(async (resolve, reject) => {
			let exist = 'a';
			if (user != undefined) {
				exist = await clientModel.findOne({ _nombreUsuario: user });
			} else {
				exist = await clientModel.findOne({
					_nombreUsuario: this._nombreUsuario,
				});
			}
			if (exist != null) {
				resolve(true);
			} else {
				resolve(false);
			}
		});
		return promise;
	}

	async conected() {
		const promise = new Promise<tCliente | boolean>(async (resolve, reject) => {
			let conected = await clientModel.findOne({ _status: true });
			if (conected != null) {
				resolve(conected);
			} else {
				resolve(false);
			}
		});
		return promise;
	}

	errorchecker() {
		let solution: Array<string> = [];
		let x = this._nombre;
		const promise = new Promise<Array<string>>(async (resolve, reject) => {
			if (
				this._nombreUsuario == '' ||
				this._nombre == '' ||
				this._apellidos == '' ||
				this._dni == '' ||
				this._Contraseña == ''
			) {
				solution.push('No puedes dejar ningun elemento vacio');
			}
			if (await this.Exist()) {
				solution.push('Ese nombre de usuario ya existe');
			}
			resolve(solution);
		});
		return promise;
	}

}

//inizializamos una variable para ejecutar las funciones de administracion de los clientes.
export const ClientFunc = new Cliente('', '', '', '', '', [], [], false, false);

//interefaz de los Clientes
export interface tCliente {
	_id?: number;
	_nombre: string;
	_apellidos: string;
	_dni: string;
	_nombreUsuario: string;
	_Contraseña: string;
	_pedidos: number[];
	_gramos: number[];
	_recibo: boolean;
	_status: boolean;
}

//Al crear la conexion inizializamos el plugin para tener id autoincrementables
autoIncrement.initialize(connection);

export const ClienteSchema = new Schema({
	_id: { type: String },
	_nombre: { type: String, unique: true },
	_apellidos: { type: String },
	_dni: { type: String },
	_nombreUsuario: { type: String },
	_Contraseña: { type: String },
	_pedidos: { type: Array },
	_gramos: { type: Array },
	numEmpresa: { type: String },
	_recibo: { type: Boolean },
	_status: { type: Boolean },
	type: { type: String },
});

ClienteSchema.plugin(autoIncrement.plugin, 'Cliente');
export const clientModel: Cliente | any = connection.model<Cliente>(
	'cliente',
	ClienteSchema
);
