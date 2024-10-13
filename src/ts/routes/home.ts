import { ServerRoute, Request, ResponseToolkit, ResponseObject } from '@hapi/hapi'
import { IActivity } from 'garmin-connect/dist/garmin/types.js'
import { getActivities } from '../activities.js'

const route: ServerRoute = {
  method: 'GET',
  path: '/',
  handler: async (_request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    const activities: IActivity[] = await getActivities()
    return h.view('home', { activities })
  },
}

export default route
