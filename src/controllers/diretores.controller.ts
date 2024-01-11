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
import {Diretores} from '../models';
import {DiretoresRepository} from '../repositories';

export class DiretoresController {
  constructor(
    @repository(DiretoresRepository)
    public diretoresRepository : DiretoresRepository,
  ) {}

  @post('/diretores')
  @response(200, {
    description: 'Diretores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Diretores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diretores, {
            title: 'NewDiretores',
            exclude: ['id'],
          }),
        },
      },
    })
    diretores: Omit<Diretores, 'id'>,
  ): Promise<Diretores> {
    return this.diretoresRepository.create(diretores);
  }

  @get('/diretores/count')
  @response(200, {
    description: 'Diretores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Diretores) where?: Where<Diretores>,
  ): Promise<Count> {
    return this.diretoresRepository.count(where);
  }

  @get('/diretores')
  @response(200, {
    description: 'Array of Diretores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Diretores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Diretores) filter?: Filter<Diretores>,
  ): Promise<Diretores[]> {
    return this.diretoresRepository.find(filter);
  }

  @patch('/diretores')
  @response(200, {
    description: 'Diretores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diretores, {partial: true}),
        },
      },
    })
    diretores: Diretores,
    @param.where(Diretores) where?: Where<Diretores>,
  ): Promise<Count> {
    return this.diretoresRepository.updateAll(diretores, where);
  }

  @get('/diretores/{id}')
  @response(200, {
    description: 'Diretores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Diretores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Diretores, {exclude: 'where'}) filter?: FilterExcludingWhere<Diretores>
  ): Promise<Diretores> {
    return this.diretoresRepository.findById(id, filter);
  }

  @patch('/diretores/{id}')
  @response(204, {
    description: 'Diretores PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diretores, {partial: true}),
        },
      },
    })
    diretores: Diretores,
  ): Promise<void> {
    await this.diretoresRepository.updateById(id, diretores);
  }

  @put('/diretores/{id}')
  @response(204, {
    description: 'Diretores PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() diretores: Diretores,
  ): Promise<void> {
    await this.diretoresRepository.replaceById(id, diretores);
  }

  @del('/diretores/{id}')
  @response(204, {
    description: 'Diretores DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.diretoresRepository.deleteById(id);
  }
}
