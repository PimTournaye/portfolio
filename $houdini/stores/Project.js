import { houdiniConfig } from '$houdini';
import { queryStore } from '../runtime/stores'
import artifact from '../artifacts/Project'
import { defaultConfigValues } from '../runtime/lib'

// create the query store
const factory = () => queryStore({
    artifact,
    config: defaultConfigValues(houdiniConfig),
    storeName: "GQL_Project",
    paginated: false,
    paginationMethods: [],
})

export const GQL_Project = factory()

export const ProjectStore = factory

export default GQL_Project
