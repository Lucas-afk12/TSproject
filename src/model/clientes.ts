import { Schema, model, createConnection } from 'mongoose';
import { Plantas , Extracto} from './productos';
const autoIncrement = require('mongoose-auto-increment');

const connection = createConnection(
	'mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

//Clase cliente con sus funcionalidades

export class Cliente {
	_id?: number;
	private _nombre: string;
	private _apellidos: String;
	private _dni: String;
	private _nombreUsuario: string;
	private _Contraseña: string;
	private _pedidos: Array<number> = [];
	private _gramos: Array<number> = [];
	private _recibo: Boolean;
	private _status: Boolean;

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
	}

	get Contraseña() {
		return this._Contraseña;
	}

	get username() {
		return this._nombreUsuario;
	}

	get pedidos() {
		return this._pedidos
	}

	get gramos(){
		return this._gramos
	}

	set addpedido(data){
		this._pedidos.push(data)
	}

	set addgrams(data){
		this._gramos.push(data)
	}
	
	//funciones de datos. 

	ver( plantas: Plantas[] , extractos: Extracto[]) {

		let pedidos : Array<number> = this.pedidos
		let gramos : Array<number> = this.gramos
		let x = 0
		let total = 0
		let gram = gramos.reduce((a,b)=>a+b)
	
		for (let pedido of pedidos){
	
			let temp : Plantas = plantas.find(planta => planta.id == pedido)
			if (temp !== undefined){
				console.log(`${gramos[x]} gramos de ${temp.NombreProducto} por un precio total de ${temp.totalprice(gramos[x])}€`)
			}else{
				let temp : Extracto = extractos.find(extracto => extracto.id == pedido)
			if (temp !== undefined){
				console.log(`${gramos[x]} gramos de ${temp.NombreProducto} por un precio total de ${temp.totalprice(gramos[x])}€`)
			}
		}	
		total = temp.totalprice(gramos[x]) + total
	
		x++
	}
		console.log(`un total de ${gram} gramos por ${total}€`)	
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
            let exist = "a" 
            if (user!=undefined){
			exist = await clientModel.findOne({ _nombreUsuario: user });
            }else{
            exist = await clientModel.findOne({ _nombreUsuario: this._nombreUsuario }); 
            }
			if (exist != null) {
				resolve(true);
			} else {
				resolve(false);
			}
		});
		return promise;
	}

	conected() {
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

	errorchecker(){
		let solution :Array<string> = [] 
		let x = this._nombre
		const promise = new Promise<Array<string>>(async (resolve, reject) => {
		if (
			this._nombreUsuario == ''  || this._nombre == '' || this._apellidos == '' || this._dni == '' || this._Contraseña == ''
			){
			solution.push('No puedes dejar ningun elemento vacio');
		}
		if (await this.Exist()){
			solution.push('Ese nombre de usuario ya existe')
		}
		resolve(solution)
	})
	return promise
	}

	comprar (_producto : number) {
		
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
	_nombre: { type: String, unique: true },
	_apellidos: { type: String },
	_dni: { type: String },
	_nombreUsuario: { type: String },
	_Contraseña: { type: String },
	_pedidos: { type: Array },
	_gramos: { type: Array },
	_recibo: { type: Boolean },
	_status: { type: Boolean },
});

//Exportamos el esquema aplicando el plugin
ClienteSchema.plugin(autoIncrement.plugin, 'Cliente');
export const clientModel: Cliente | any = connection.model<Cliente>(
	'cliente',
	ClienteSchema
);
