import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Personagens, PersonagensRelations} from '../models';

export class PersonagensRepository extends DefaultCrudRepository<
  Personagens,
  typeof Personagens.prototype.id,
  PersonagensRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Personagens, dataSource);
  }
}
