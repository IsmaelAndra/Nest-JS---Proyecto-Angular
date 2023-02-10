import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from './product.entity';

@Entity('products', {schema:'ventas'})

export class CategoryEntity{
    [x: string]: any;
    @PrimaryGeneratedColumn('uuid')
    id:number
    @CreateDateColumn({
        name:'create_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })

    createAt:Date;
    @UpdateDateColumn({
        name:'update_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })

    updateAp:Date;
    @DeleteDateColumn({
        name:'delete_date',
        type:'timestamp',
        nullable:true,
    })
    deleteAp:Date;

    //relaciones

    @ManyToOne(() => ProductEntity, (product) => product.category)
    product: ProductEntity;

    //columnas

    @Column('varchar', {
        name:'title',
        comment:'nombre del categoria',
    })
    title:string;
    @Column('number', {
        name:'price',
        comment:'precio con 2 decimales del categoria'
    })
    price:number;
    @Column('text', {
        name:'Description',
        comment: 'Descripcion del categoria'
    })
    description:string;

    }

