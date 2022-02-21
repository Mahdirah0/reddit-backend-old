import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Users: crudResolvers.UsersCrudResolver,
  Posts: crudResolvers.PostsCrudResolver
};
const actionResolversMap = {
  Users: {
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    createUsers: actionResolvers.CreateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    deleteUsers: actionResolvers.DeleteUsersResolver,
    updateUsers: actionResolvers.UpdateUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    upsertUsers: actionResolvers.UpsertUsersResolver,
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver
  },
  Posts: {
    findUniquePosts: actionResolvers.FindUniquePostsResolver,
    findFirstPosts: actionResolvers.FindFirstPostsResolver,
    findManyPosts: actionResolvers.FindManyPostsResolver,
    createPosts: actionResolvers.CreatePostsResolver,
    createManyPosts: actionResolvers.CreateManyPostsResolver,
    deletePosts: actionResolvers.DeletePostsResolver,
    updatePosts: actionResolvers.UpdatePostsResolver,
    deleteManyPosts: actionResolvers.DeleteManyPostsResolver,
    updateManyPosts: actionResolvers.UpdateManyPostsResolver,
    upsertPosts: actionResolvers.UpsertPostsResolver,
    aggregatePosts: actionResolvers.AggregatePostsResolver,
    groupByPosts: actionResolvers.GroupByPostsResolver
  }
};
const crudResolversInfo = {
  Users: ["findUniqueUsers", "findFirstUsers", "findManyUsers", "createUsers", "createManyUsers", "deleteUsers", "updateUsers", "deleteManyUsers", "updateManyUsers", "upsertUsers", "aggregateUsers", "groupByUsers"],
  Posts: ["findUniquePosts", "findFirstPosts", "findManyPosts", "createPosts", "createManyPosts", "deletePosts", "updatePosts", "deleteManyPosts", "updateManyPosts", "upsertPosts", "aggregatePosts", "groupByPosts"]
};
const argsInfo = {
  FindUniqueUsersArgs: ["where"],
  FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsersArgs: ["data"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  DeleteUsersArgs: ["where"],
  UpdateUsersArgs: ["data", "where"],
  DeleteManyUsersArgs: ["where"],
  UpdateManyUsersArgs: ["data", "where"],
  UpsertUsersArgs: ["where", "create", "update"],
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostsArgs: ["where"],
  FindFirstPostsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostsArgs: ["data"],
  CreateManyPostsArgs: ["data", "skipDuplicates"],
  DeletePostsArgs: ["where"],
  UpdatePostsArgs: ["data", "where"],
  DeleteManyPostsArgs: ["where"],
  UpdateManyPostsArgs: ["data", "where"],
  UpsertPostsArgs: ["where", "create", "update"],
  AggregatePostsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Users: relationResolvers.UsersRelationsResolver,
  Posts: relationResolvers.PostsRelationsResolver
};
const relationResolversInfo = {
  Users: ["posts"],
  Posts: ["user"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Users: ["id", "email", "name"],
  Posts: ["id", "title", "body", "createdAt", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUsers: ["_count", "_min", "_max"],
  UsersGroupBy: ["id", "email", "name", "password", "_count", "_min", "_max"],
  AggregatePosts: ["_count", "_min", "_max"],
  PostsGroupBy: ["id", "title", "body", "createdAt", "userId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UsersCount: ["posts"],
  UsersCountAggregate: ["id", "email", "name", "password", "_all"],
  UsersMinAggregate: ["id", "email", "name", "password"],
  UsersMaxAggregate: ["id", "email", "name", "password"],
  PostsCountAggregate: ["id", "title", "body", "createdAt", "userId", "_all"],
  PostsMinAggregate: ["id", "title", "body", "createdAt", "userId"],
  PostsMaxAggregate: ["id", "title", "body", "createdAt", "userId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UsersWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "password", "posts"],
  UsersOrderByWithRelationInput: ["id", "email", "name", "password", "posts"],
  UsersWhereUniqueInput: ["id", "email"],
  UsersOrderByWithAggregationInput: ["id", "email", "name", "password", "_count", "_max", "_min"],
  UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "password"],
  PostsWhereInput: ["AND", "OR", "NOT", "id", "title", "body", "createdAt", "user", "userId"],
  PostsOrderByWithRelationInput: ["id", "title", "body", "createdAt", "user", "userId"],
  PostsWhereUniqueInput: ["id"],
  PostsOrderByWithAggregationInput: ["id", "title", "body", "createdAt", "userId", "_count", "_max", "_min"],
  PostsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "body", "createdAt", "userId"],
  UsersCreateInput: ["id", "email", "name", "password", "posts"],
  UsersUpdateInput: ["id", "email", "name", "password", "posts"],
  UsersCreateManyInput: ["id", "email", "name", "password"],
  UsersUpdateManyMutationInput: ["id", "email", "name", "password"],
  PostsCreateInput: ["id", "title", "body", "createdAt", "user"],
  PostsUpdateInput: ["id", "title", "body", "createdAt", "user"],
  PostsCreateManyInput: ["id", "title", "body", "createdAt", "userId"],
  PostsUpdateManyMutationInput: ["id", "title", "body", "createdAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PostsListRelationFilter: ["every", "some", "none"],
  PostsOrderByRelationAggregateInput: ["_count"],
  UsersCountOrderByAggregateInput: ["id", "email", "name", "password"],
  UsersMaxOrderByAggregateInput: ["id", "email", "name", "password"],
  UsersMinOrderByAggregateInput: ["id", "email", "name", "password"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UsersRelationFilter: ["is", "isNot"],
  PostsCountOrderByAggregateInput: ["id", "title", "body", "createdAt", "userId"],
  PostsMaxOrderByAggregateInput: ["id", "title", "body", "createdAt", "userId"],
  PostsMinOrderByAggregateInput: ["id", "title", "body", "createdAt", "userId"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PostsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  PostsUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UsersCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UsersUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PostsCreateWithoutUserInput: ["id", "title", "body", "createdAt"],
  PostsCreateOrConnectWithoutUserInput: ["where", "create"],
  PostsCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PostsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PostsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PostsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PostsScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "body", "createdAt", "userId"],
  UsersCreateWithoutPostsInput: ["id", "email", "name", "password"],
  UsersCreateOrConnectWithoutPostsInput: ["where", "create"],
  UsersUpsertWithoutPostsInput: ["update", "create"],
  UsersUpdateWithoutPostsInput: ["id", "email", "name", "password"],
  PostsCreateManyUserInput: ["id", "title", "body", "createdAt"],
  PostsUpdateWithoutUserInput: ["id", "title", "body", "createdAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

