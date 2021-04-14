import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('assessment2')
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  Location: string

  @Column()
  ProductIdentifier_ISBN13_IDValue: string

  @Column()
  Title_DistinctivetitlebookCovertitle_TitleText: string

  @Column()
  Title_DistinctivetitlebookCovertitle_Subtitle: string

  @Column()
  Publisher_PublisherName: string

  @Column()
  Product_PublicationDate: string

  @Column()
  Language_Languageoftext_LanguageCode: string

  @Column()
  Contributor1_PersonName: string

  @Column()
  Contributor2_PersonName: string

  @Column()
  Contributor3_PersonName: string

  @Column()
  OtherText_Maindescription_Text: string

  @Column()
  Cover_File: string

  @Column()
  Unique_URL: string
}
