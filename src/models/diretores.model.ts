import {Entity, model, property, hasMany} from '@loopback/repository';
import {Filme} from './filme.model';

@model()
export class Diretores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  date_of_birth?: string;

  @hasMany(() => Filme)
  filmes: Filme[];

  constructor(data?: Partial<Diretores>) {
    super(data);
  }
}

export interface DiretoresRelations {
  // describe navigational properties here
}

export type DiretoresWithRelations = Diretores & DiretoresRelations;
