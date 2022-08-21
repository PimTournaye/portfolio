import { houdiniConfig } from '$houdini';
import { queryStore } from '../runtime/stores'
import artifact from '../artifacts/Projects'
import { defaultConfigValues } from '../runtime/lib'

// create the query store
const factory = () => queryStore({
    artifact,
    config: defaultConfigValues(houdiniConfig),
    storeName: "GQL_Projects",
    paginated: false,
    paginationMethods: [],
})

export const GQL_Projects = factory()

export const ProjectsStore = factory

export default GQL_Projects
