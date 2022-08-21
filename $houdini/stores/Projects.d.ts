import type { Projects$input, Projects$result, CachePolicy } from '$houdini'
import { type QueryStore } from '../runtime/lib/types'


export declare const GQL_Projects: QueryStore<Projects$result | undefined, null, {}> 

export declare const ProjectsStore: () => typeof GQL_Projects

export default GQL_Projects
