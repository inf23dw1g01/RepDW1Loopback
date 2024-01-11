import {Entity, model, property} from '@loopback/repository';

@model()
export class Atores extends Entity {
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

  @property({
    type: 'number',
  })
  filmeId?: number;

  constructor(data?: Partial<Atores>) {
    super(data);
  }
}

export interface AtoresRelations {
  // describe navigational properties here
}

export type AtoresWithRelations = Atores & AtoresRelations;
