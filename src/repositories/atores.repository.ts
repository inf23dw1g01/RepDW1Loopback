import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Atores, AtoresRelations} from '../models';

export class AtoresRepository extends DefaultCrudRepository<
  Atores,
  typeof Atores.prototype.id,
  AtoresRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Atores, dataSource);
  }
}
