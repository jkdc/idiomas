export class PalabraModel {
  id: number;
  castellano: string;
  ingles: string;
  pronunciacion: string;
  categoria: string;
}

export class FraseModel {
  id: number;
  casetellano: string;
  ingles: string;
  categoria: string;
}

export class Categoria {
  pk: number;
  categoria: string;
  traduccion: string;
  tipo: string;
}

export class PhrasalVerbsModel {
  id: number;
  casetellano: string;
  ingles: string;
  pronunciacion: string;
  fallos: string;
}

export class EjemplosPhrasalVerbsModel {
  id: number;
  casetellano: string;
  ingles: string;
  phrasal_verb: PhrasalVerbsModel;
}

export class CategoriaTeoriaModel {
  pk: number;
  categoria: string;
  traduccion: string;
  tipo: string;
}

export class TeoriaModel {
  id: number;
  tipo: string;
  texto: string;
  categoria: CategoriaTeoriaModel;
}

export class ExplicacionesModel {
  id: number;
  texto_casetellano: string;
  texto_ingles: string;
  teoria: TeoriaModel;
}

export class EjemplosExplicacionesModel {
  id: number;
  casetellano: string;
  ingles: string;
  explicacion: ExplicacionesModel;
}
