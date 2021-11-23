import { Cliente } from "./clientes";
import { Extracto } from "./extractos";
import { Plantas, plantFunc } from "./productos";

export class Mayoristas extends Cliente {
	private numEmpresa: string;
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
		numEmpresa: string,
		id?: number
	) {
		super(
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

		this.numEmpresa = numEmpresa;
		this.type = 'M';
	}

	create(
		_nombre: string,
		_apellido: string,
		_dni: string,
		_nombreUsuario: string,
		_Contraseña: string,
		_pedidos: number[],
		_gramos: number[],
		_recibo: boolean,
		_status: boolean,
		numEmpresa: string,
		id?: number
	) {
		if (id == undefined) {
			return new Mayoristas(
				_nombre,
				_apellido,
				_dni,
				_nombreUsuario,
				_Contraseña,
				_pedidos,
				_gramos,
				_recibo,
				_status,
				numEmpresa
			);
		}
		return new Mayoristas(
			_nombre,
			_apellido,
			_dni,
			_nombreUsuario,
			_Contraseña,
			_pedidos,
			_gramos,
			_recibo,
			_status,
			numEmpresa,
			id
		);
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
				this._Contraseña == '' ||
				this.numEmpresa == ''
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

    verCarrito(plantas: Plantas[], extractos: Extracto[]) {
		let pedidos: Array<number> = this.pedidos;
		let gramos: Array<number> = this.gramos;
		let x = 0;
		let total = 0;
		let totalIva = 0;
        console.log("descuento del 25% en cada compra Modo Mayorista.")
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
					totalIva = temp.totalIva(gramos[x], this.type) + totalIva;
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

}

export const MayoristFunc = new Mayoristas(
	'',
	'',
	'',
	'',
	'',
	[],
	[],
	false,
	false,
	''
);