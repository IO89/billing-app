import {error} from "@sveltejs/kit";

type Params = {
    params: {
        id: string
    }
}
export function load({params}:Params){
    if(params.id){
        return {id: params.id}
    }
    throw error(404, 'Not found')
}
