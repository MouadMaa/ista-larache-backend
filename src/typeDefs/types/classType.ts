import gql from 'graphql-tag'

export const classType = gql`
  type Class {
    id: String!
    year: Year!
    group: Group!
    timetable: String
    students: [Student!]!
    modules: [Module!]!
    formation: Formation!
    teacher: User!
  }

  enum Year {
    First
    Second
  }

  enum Group {
    A B C D E
  }

  input ClassCreateInput {
    year: Year!
    group: Group!
    formation: FormationConnectClassInput!
    teacher: UserConnectClassInput!
  }

  input ClassUpdateInput {
    year: Year
    group: Group
    timetable: String
    formation: FormationConnectClassInput
    teacher: UserConnectClassInput
  }

  input FormationConnectClassInput {
    connect: FormationWhereUniqueInput!
  }

  input UserConnectClassInput {
    connect: UserWhereUniqueInput!
  }

  input ClassWhereUniqueInput {
    id: String!
  }
`
