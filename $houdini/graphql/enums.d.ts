
export declare enum _FilterKind {
    AND = "AND",
    NOT = "NOT",
    OR = "OR",
    contains = "contains",
    contains_all = "contains_all",
    contains_none = "contains_none",
    contains_some = "contains_some",
    ends_with = "ends_with",
    eq = "eq",
    eq_not = "eq_not",
    gt = "gt",
    gte = "gte",
    in = "in",
    lt = "lt",
    lte = "lte",
    not_contains = "not_contains",
    not_ends_with = "not_ends_with",
    not_in = "not_in",
    not_starts_with = "not_starts_with",
    relational_every = "relational_every",
    relational_none = "relational_none",
    relational_single = "relational_single",
    relational_some = "relational_some",
    search = "search",
    starts_with = "starts_with"
}
 
export declare enum _MutationInputFieldKind {
    enum = "enum",
    relation = "relation",
    richText = "richText",
    richTextWithEmbeds = "richTextWithEmbeds",
    scalar = "scalar",
    union = "union",
    virtual = "virtual"
}
 
export declare enum _MutationKind {
    create = "create",
    delete = "delete",
    deleteMany = "deleteMany",
    publish = "publish",
    publishMany = "publishMany",
    schedulePublish = "schedulePublish",
    scheduleUnpublish = "scheduleUnpublish",
    unpublish = "unpublish",
    unpublishMany = "unpublishMany",
    update = "update",
    updateMany = "updateMany",
    upsert = "upsert"
}
 
export declare enum _OrderDirection {
    asc = "asc",
    desc = "desc"
}
 
export declare enum _RelationInputCardinality {
    many = "many",
    one = "one"
}
 
export declare enum _RelationInputKind {
    create = "create",
    update = "update"
}
 
export declare enum _RelationKind {
    regular = "regular",
    union = "union"
}
 
export declare enum _SystemDateTimeFieldVariation {
    base = "base",
    combined = "combined",
    localization = "localization"
}
 
export declare enum AssetOrderByInput {
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    fileName_ASC = "fileName_ASC",
    fileName_DESC = "fileName_DESC",
    handle_ASC = "handle_ASC",
    handle_DESC = "handle_DESC",
    height_ASC = "height_ASC",
    height_DESC = "height_DESC",
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    mimeType_ASC = "mimeType_ASC",
    mimeType_DESC = "mimeType_DESC",
    publishedAt_ASC = "publishedAt_ASC",
    publishedAt_DESC = "publishedAt_DESC",
    size_ASC = "size_ASC",
    size_DESC = "size_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    width_ASC = "width_ASC",
    width_DESC = "width_DESC"
}
 
export declare enum BlogOrderByInput {
    body_ASC = "body_ASC",
    body_DESC = "body_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    publishedAt_ASC = "publishedAt_ASC",
    publishedAt_DESC = "publishedAt_DESC",
    slug_ASC = "slug_ASC",
    slug_DESC = "slug_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}
 
export declare enum DocumentFileTypes {
    doc = "doc",
    docx = "docx",
    html = "html",
    jpg = "jpg",
    odp = "odp",
    ods = "ods",
    odt = "odt",
    pdf = "pdf",
    png = "png",
    ppt = "ppt",
    pptx = "pptx",
    svg = "svg",
    txt = "txt",
    webp = "webp",
    xls = "xls",
    xlsx = "xlsx"
}
 
export declare enum ImageFit {
    clip = "clip",
    crop = "crop",
    max = "max",
    scale = "scale"
}
 
export declare enum Locale {
    en = "en"
}
 
export declare enum ProjectOrderByInput {
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    demo_ASC = "demo_ASC",
    demo_DESC = "demo_DESC",
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    publishedAt_ASC = "publishedAt_ASC",
    publishedAt_DESC = "publishedAt_DESC",
    short_ASC = "short_ASC",
    short_DESC = "short_DESC",
    slug_ASC = "slug_ASC",
    slug_DESC = "slug_DESC",
    sourceCode_ASC = "sourceCode_ASC",
    sourceCode_DESC = "sourceCode_DESC",
    tags_ASC = "tags_ASC",
    tags_DESC = "tags_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    year_ASC = "year_ASC",
    year_DESC = "year_DESC"
}
 
export declare enum ScheduledOperationOrderByInput {
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    errorMessage_ASC = "errorMessage_ASC",
    errorMessage_DESC = "errorMessage_DESC",
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    publishedAt_ASC = "publishedAt_ASC",
    publishedAt_DESC = "publishedAt_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}
 
export declare enum ScheduledOperationStatus {
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    PENDING = "PENDING"
}
 
export declare enum ScheduledReleaseOrderByInput {
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC",
    errorMessage_ASC = "errorMessage_ASC",
    errorMessage_DESC = "errorMessage_DESC",
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    isActive_ASC = "isActive_ASC",
    isActive_DESC = "isActive_DESC",
    isImplicit_ASC = "isImplicit_ASC",
    isImplicit_DESC = "isImplicit_DESC",
    publishedAt_ASC = "publishedAt_ASC",
    publishedAt_DESC = "publishedAt_DESC",
    releaseAt_ASC = "releaseAt_ASC",
    releaseAt_DESC = "releaseAt_DESC",
    status_ASC = "status_ASC",
    status_DESC = "status_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}
 
export declare enum ScheduledReleaseStatus {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    PENDING = "PENDING"
}
 
export declare enum Stage {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED"
}
 
export declare enum SystemDateTimeFieldVariation {
    BASE = "BASE",
    COMBINED = "COMBINED",
    LOCALIZATION = "LOCALIZATION"
}
 
export declare enum UserKind {
    MEMBER = "MEMBER",
    PAT = "PAT",
    PUBLIC = "PUBLIC",
    WEBHOOK = "WEBHOOK"
}
 
export declare enum UserOrderByInput {
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    isActive_ASC = "isActive_ASC",
    isActive_DESC = "isActive_DESC",
    kind_ASC = "kind_ASC",
    kind_DESC = "kind_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    picture_ASC = "picture_ASC",
    picture_DESC = "picture_DESC",
    publishedAt_ASC = "publishedAt_ASC",
    publishedAt_DESC = "publishedAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}
 