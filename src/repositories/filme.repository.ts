import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Filme, FilmeRelations, Atores} from '../models';
import {AtoresRepository} from './atores.repository';

export class FilmeRepository extends DefaultCrudRepository<
  Filme,
  typeof Filme.prototype.id,
  FilmeRelations
> {

  public readonly atores: HasManyRepositoryFactory<Atores, typeof Filme.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AtoresRepository') protected atoresRepositoryGetter: Getter<AtoresRepository>,
  ) {
    super(Filme, dataSource);
    this.atores = this.createHasManyRepositoryFactoryFor('atores', atoresRepositoryGetter,);
    this.registerInclusionResolver('atores', this.atores.inclusionResolver);
  }
}
