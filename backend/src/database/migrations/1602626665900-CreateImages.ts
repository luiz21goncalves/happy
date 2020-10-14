import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateImages1602626665900 implements MigrationInterface {
  private table = new Table({
    name: 'images',
    columns: [
      {
        name: 'id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'path',
        type: 'varchar',
      },
      {
        name: 'orphanage_id',
        type: 'integer',
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
    ],
    foreignKeys: [
      {
        name: 'ImagesOrphanages',
        columnNames: ['orphanage_id'],
        referencedTableName: 'orphanages',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
