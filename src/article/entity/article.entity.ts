import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', {
        name: 'article_type',
        default: 1,
        comment: '文章类型',
    })
    articleType: number;

    @Column('int', {
        default: 1,
        comment: '文章状态 1 待审核 2 审核完成',
    })
    state: number;

    @Column({
        default: '',
        comment: '文章标题',
    })
    title: string;

    @Column({
        default: '',
        comment: '文章描述',
    })
    desc: string;

    @Column({
        default: '',
        comment: '文章摘要',
    })
    summary: string;

    @Column('longtext', {
        default: '',
        comment: '文章内容',
    })
    content: string;

    @Column('datetime', {
        name: 'publish_time',
        default: null,
        comment: '发布时间',
    })
    publishTime: Date;

    @CreateDateColumn({
        name: 'create_time',
    })
    createTime: Date;

    @UpdateDateColumn({
        name: 'update_time',
    })
    updateTime: Date;
}
