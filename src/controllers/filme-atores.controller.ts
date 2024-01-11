import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Filme,
  Atores,
} from '../models';
import {FilmeRepository} from '../repositories';

export class FilmeAtoresController {
  constructor(
    @repository(FilmeRepository) protected filmeRepository: FilmeRepository,
  ) { }

  @get('/filmes/{id}/atores', {
    responses: {
      '200': {
        description: 'Array of Filme has many Atores',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Atores)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Atores>,
  ): Promise<Atores[]> {
    return this.filmeRepository.atores(id).find(filter);
  }

  @post('/filmes/{id}/atores', {
    responses: {
      '200': {
        description: 'Filme model instance',
        content: {'application/json': {schema: getModelSchemaRef(Atores)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Filme.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atores, {
            title: 'NewAtoresInFilme',
            exclude: ['id'],
            optional: ['filmeId']
          }),
        },
      },
    }) atores: Omit<Atores, 'id'>,
  ): Promise<Atores> {
    return this.filmeRepository.atores(id).create(atores);
  }

  @patch('/filmes/{id}/atores', {
    responses: {
      '200': {
        description: 'Filme.Atores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atores, {partial: true}),
        },
      },
    })
    atores: Partial<Atores>,
    @param.query.object('where', getWhereSchemaFor(Atores)) where?: Where<Atores>,
  ): Promise<Count> {
    return this.filmeRepository.atores(id).patch(atores, where);
  }

  @del('/filmes/{id}/atores', {
    responses: {
      '200': {
        description: 'Filme.Atores DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Atores)) where?: Where<Atores>,
  ): Promise<Count> {
    return this.filmeRepository.atores(id).delete(where);
  }
}
