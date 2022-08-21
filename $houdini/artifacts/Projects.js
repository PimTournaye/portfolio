export default {
    name: "Projects",
    kind: "HoudiniQuery",
    hash: "8a6c37d5e5c700786fd7100f6b7050db6dfcaec0ddab208b8072a1334ee5ee89",

    raw: `query Projects {
  projects {
    slug
    name
    short
    tags
    year
    image {
      url(transformation: {image: {resize: {fit: clip, width: 500, height: 400}}})
      id
    }
    id
  }
}
`,

    rootType: "Query",

    selection: {
        projects: {
            type: "Project",
            keyRaw: "projects",

            fields: {
                slug: {
                    type: "String",
                    keyRaw: "slug",
                    nullable: true
                },

                name: {
                    type: "String",
                    keyRaw: "name"
                },

                short: {
                    type: "String",
                    keyRaw: "short"
                },

                tags: {
                    type: "String",
                    keyRaw: "tags"
                },

                year: {
                    type: "Int",
                    keyRaw: "year",
                    nullable: true
                },

                image: {
                    type: "Asset",
                    keyRaw: "image",

                    fields: {
                        url: {
                            type: "String",
                            keyRaw: "url(transformation: {image: {resize: {fit: clip, width: 500, height: 400}}})"
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

    policy: "CacheOrNetwork",
    partial: false
};

"HoudiniHash=4b08162d6f529870fd75e0ccb20677364434783da4b1bef0f7794e25f07aea28";