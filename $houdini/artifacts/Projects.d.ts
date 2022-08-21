export type Projects = {
    readonly "input": null,
    readonly "result": Projects$result | undefined
};

export type Projects$result = {
    readonly projects: ({
        readonly slug: string | null,
        readonly name: string,
        readonly short: string,
        readonly tags: (string)[],
        readonly year: number | null,
        readonly image: ({
            readonly url: string
        })[]
    })[]
};

export type Projects$afterLoad = {
    readonly "data": {
        readonly "Projects": Projects$result
    }
};