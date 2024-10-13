import garminConnect from 'garmin-connect'
import { IActivity } from 'garmin-connect/dist/garmin/types.js'
import config from './config.js'

const { GarminConnect } = garminConnect

async function getActivities () {
  const GCClient = new GarminConnect({
    username: config.get('garminUsername'),
    password: config.get('garminPassword'),
  })

  await GCClient.login()

  const activities: IActivity[] = await GCClient.getActivities()

  return activities
}

export { getActivities }
