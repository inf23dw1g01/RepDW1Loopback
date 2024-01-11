import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Diretores, DiretoresRelations, Filme} from '../models';
import {FilmeRepository} from './filme.repository';

export class DiretoresRepository extends DefaultCrudRepository<
  Diretores,
  typeof Diretores.prototype.id,
  DiretoresRelations
> {

  public readonly filmes: HasManyRepositoryFactory<Filme, typeof Diretores.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FilmeRepository') protected filmeRepositoryGetter: Getter<FilmeRepository>,
  ) {
    super(Diretores, dataSource);
    this.filmes = this.createHasManyRepositoryFactoryFor('filmes', filmeRepositoryGetter,);
    this.registerInclusionResolver('filmes', this.filmes.inclusionResolver);
  }
}
