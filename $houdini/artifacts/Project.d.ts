export type Project = {
    readonly "input": Project$input,
    readonly "result": Project$result | undefined
};

export type Project$result = {
    readonly project: {
        readonly name: string,
        readonly short: string,
        readonly description: {
            readonly html: string
        } | null,
        readonly tags: (string)[],
        readonly demo: string | null,
        readonly year: number | null,
        readonly sourceCode: string | null,
        readonly image: ({
            readonly url: string
        })[]
    } | null
};

export type Project$afterLoad = {
    readonly "input": {
        readonly "Project": Project$input
    },
    readonly "data": {
        readonly "Project": Project$result
    }
};

export type Project$input = {
    slug: string
};