import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Atores} from '../models';
import {AtoresRepository} from '../repositories';

export class AtoresController {
  constructor(
    @repository(AtoresRepository)
    public atoresRepository : AtoresRepository,
  ) {}

  @post('/atores')
  @response(200, {
    description: 'Atores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Atores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atores, {
            title: 'NewAtores',
            exclude: ['id'],
          }),
        },
      },
    })
    atores: Omit<Atores, 'id'>,
  ): Promise<Atores> {
    return this.atoresRepository.create(atores);
  }

  @get('/atores/count')
  @response(200, {
    description: 'Atores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Atores) where?: Where<Atores>,
  ): Promise<Count> {
    return this.atoresRepository.count(where);
  }

  @get('/atores')
  @response(200, {
    description: 'Array of Atores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Atores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Atores) filter?: Filter<Atores>,
  ): Promise<Atores[]> {
    return this.atoresRepository.find(filter);
  }

  @patch('/atores')
  @response(200, {
    description: 'Atores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atores, {partial: true}),
        },
      },
    })
    atores: Atores,
    @param.where(Atores) where?: Where<Atores>,
  ): Promise<Count> {
    return this.atoresRepository.updateAll(atores, where);
  }

  @get('/atores/{id}')
  @response(200, {
    description: 'Atores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Atores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Atores, {exclude: 'where'}) filter?: FilterExcludingWhere<Atores>
  ): Promise<Atores> {
    return this.atoresRepository.findById(id, filter);
  }

  @patch('/atores/{id}')
  @response(204, {
    description: 'Atores PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atores, {partial: true}),
        },
      },
    })
    atores: Atores,
  ): Promise<void> {
    await this.atoresRepository.updateById(id, atores);
  }

  @put('/atores/{id}')
  @response(204, {
    description: 'Atores PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() atores: Atores,
  ): Promise<void> {
    await this.atoresRepository.replaceById(id, atores);
  }

  @del('/atores/{id}')
  @response(204, {
    description: 'Atores DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.atoresRepository.deleteById(id);
  }
}
