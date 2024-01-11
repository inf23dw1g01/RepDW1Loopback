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
import {Personagens} from '../models';
import {PersonagensRepository} from '../repositories';

export class PersonagensController {
  constructor(
    @repository(PersonagensRepository)
    public personagensRepository : PersonagensRepository,
  ) {}

  @post('/personagens')
  @response(200, {
    description: 'Personagens model instance',
    content: {'application/json': {schema: getModelSchemaRef(Personagens)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personagens, {
            title: 'NewPersonagens',
            exclude: ['id'],
          }),
        },
      },
    })
    personagens: Omit<Personagens, 'id'>,
  ): Promise<Personagens> {
    return this.personagensRepository.create(personagens);
  }

  @get('/personagens/count')
  @response(200, {
    description: 'Personagens model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Personagens) where?: Where<Personagens>,
  ): Promise<Count> {
    return this.personagensRepository.count(where);
  }

  @get('/personagens')
  @response(200, {
    description: 'Array of Personagens model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Personagens, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Personagens) filter?: Filter<Personagens>,
  ): Promise<Personagens[]> {
    return this.personagensRepository.find(filter);
  }

  @patch('/personagens')
  @response(200, {
    description: 'Personagens PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personagens, {partial: true}),
        },
      },
    })
    personagens: Personagens,
    @param.where(Personagens) where?: Where<Personagens>,
  ): Promise<Count> {
    return this.personagensRepository.updateAll(personagens, where);
  }

  @get('/personagens/{id}')
  @response(200, {
    description: 'Personagens model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Personagens, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personagens, {exclude: 'where'}) filter?: FilterExcludingWhere<Personagens>
  ): Promise<Personagens> {
    return this.personagensRepository.findById(id, filter);
  }

  @patch('/personagens/{id}')
  @response(204, {
    description: 'Personagens PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personagens, {partial: true}),
        },
      },
    })
    personagens: Personagens,
  ): Promise<void> {
    await this.personagensRepository.updateById(id, personagens);
  }

  @put('/personagens/{id}')
  @response(204, {
    description: 'Personagens PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personagens: Personagens,
  ): Promise<void> {
    await this.personagensRepository.replaceById(id, personagens);
  }

  @del('/personagens/{id}')
  @response(204, {
    description: 'Personagens DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personagensRepository.deleteById(id);
  }
}
