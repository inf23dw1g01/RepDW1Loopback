import {Entity, model, property, hasMany} from '@loopback/repository';
import {Atores} from './atores.model';

@model()
export class Filme extends Entity {
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
  description?: string;

  @property({
    type: 'string',
  })
  ano?: string;

  @property({
    type: 'number',
  })
  diretoresId?: number;

  @hasMany(() => Atores)
  atores: Atores[];

  constructor(data?: Partial<Filme>) {
    super(data);
  }
}

export interface FilmeRelations {
  // describe navigational properties here
}

export type FilmeWithRelations = Filme & FilmeRelations;
