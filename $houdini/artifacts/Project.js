export default {
    name: "Project",
    kind: "HoudiniQuery",
    hash: "c3d8c9aad0e0418accf6937e1f400d658ba1d2bb866af594308812fef448b255",

    raw: `query Project($slug: String!) {
  project(where: {slug: $slug}) {
    name
    short
    description {
      html
    }
    tags
    demo
    year
    sourceCode
    image {
      url
      id
    }
    id
  }
}
`,

    rootType: "Query",

    selection: {
        project: {
            type: "Project",
            keyRaw: "project(where: {slug: $slug})",
            nullable: true,

            fields: {
                name: {
                    type: "String",
                    keyRaw: "name"
                },

                short: {
                    type: "String",
                    keyRaw: "short"
                },

                description: {
                    type: "RichText",
                    keyRaw: "description",
                    nullable: true,

                    fields: {
                        html: {
                            type: "String",
                            keyRaw: "html"
                        }
                    }
                },

                tags: {
                    type: "String",
                    keyRaw: "tags"
                },

                demo: {
                    type: "String",
                    keyRaw: "demo",
                    nullable: true
                },

                year: {
                    type: "Int",
                    keyRaw: "year",
                    nullable: true
                },

                sourceCode: {
                    type: "String",
                    keyRaw: "sourceCode",
                    nullable: true
                },

                image: {
                    type: "Asset",
                    keyRaw: "image",

                    fields: {
                        url: {
                            type: "String",
                            keyRaw: "url"
                        },

                        id: {
                            type: "ID",
                            keyRaw: "id"
                        }
                    }
                },

                id: {
                    type: "ID",
                    keyRaw: "id"
                }
            }
        }
    },

    input: {
        fields: {
            slug: "String"
        },

        types: {}
    },

    policy: "CacheOrNetwork",
    partial: false
};

"HoudiniHash=41834b7dea249709d89d1ff69291f5a91db009db92dec587fb9ae82158b2197a";