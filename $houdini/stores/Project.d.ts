import type { Project$input, Project$result, CachePolicy } from '$houdini'
import { type QueryStore } from '../runtime/lib/types'


export declare const GQL_Project: QueryStore<Project$result | undefined, Project$input, {}> 

export declare const ProjectStore: () => typeof GQL_Project

export default GQL_Project
