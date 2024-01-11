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
  Diretores,
  Filme,
} from '../models';
import {DiretoresRepository} from '../repositories';

export class DiretoresFilmeController {
  constructor(
    @repository(DiretoresRepository) protected diretoresRepository: DiretoresRepository,
  ) { }

  @get('/diretores/{id}/filmes', {
    responses: {
      '200': {
        description: 'Array of Diretores has many Filme',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Filme)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Filme>,
  ): Promise<Filme[]> {
    return this.diretoresRepository.filmes(id).find(filter);
  }

  @post('/diretores/{id}/filmes', {
    responses: {
      '200': {
        description: 'Diretores model instance',
        content: {'application/json': {schema: getModelSchemaRef(Filme)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Diretores.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filme, {
            title: 'NewFilmeInDiretores',
            exclude: ['id'],
            optional: ['diretoresId']
          }),
        },
      },
    }) filme: Omit<Filme, 'id'>,
  ): Promise<Filme> {
    return this.diretoresRepository.filmes(id).create(filme);
  }

  @patch('/diretores/{id}/filmes', {
    responses: {
      '200': {
        description: 'Diretores.Filme PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filme, {partial: true}),
        },
      },
    })
    filme: Partial<Filme>,
    @param.query.object('where', getWhereSchemaFor(Filme)) where?: Where<Filme>,
  ): Promise<Count> {
    return this.diretoresRepository.filmes(id).patch(filme, where);
  }

  @del('/diretores/{id}/filmes', {
    responses: {
      '200': {
        description: 'Diretores.Filme DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Filme)) where?: Where<Filme>,
  ): Promise<Count> {
    return this.diretoresRepository.filmes(id).delete(where);
  }
}
