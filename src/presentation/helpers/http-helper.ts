import { HttpResponse, HttpRequest} from '../protocols/http'
import {} from '../errors/missing-param-error'
import {} from '../helpers/http-helper'

export const badRequest = (error: Error) => ({
    
    statusCode: 400,
    body: error
    
})