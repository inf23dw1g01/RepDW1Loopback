import {Entity, model, property} from '@loopback/repository';

@model()
export class Personagens extends Entity {
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
    required: true,
  })
  role: string;


  constructor(data?: Partial<Personagens>) {
    super(data);
  }
}

export interface PersonagensRelations {
  // describe navigational properties here
}

export type PersonagensWithRelations = Personagens & PersonagensRelations;
