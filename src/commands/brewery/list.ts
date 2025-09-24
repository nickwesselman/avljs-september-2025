import {Args, Command, Flags} from '@oclif/core'
import type { Brewery } from '../../components/brewery-table.js'
import { renderBreweries } from '../../components/brewery-table.js'

export default class BreweryList extends Command {
  static override args = {
    
  }
  static override description = 'List out breweries'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    name: Flags.string({char: 'n', description: 'search by name'}),
    city: Flags.string({description: 'search by city'})
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(BreweryList)

    const getBreweries = async (city?: string, name?: string) => {
      const url = new URL('https://api.openbrewerydb.org/v1/breweries')
      url.searchParams.append('per_page', '25')
      if (city && city.length > 2) {
        url.searchParams.append('by_city', city)
      }
      if (name && name.length > 2) {
        url.searchParams.append('by_name', name)
      }
      
      const breweryResult = await fetch(url.toString())
      const breweries : Array<Brewery> = await breweryResult.json()
      return breweries
    }
    renderBreweries({ 
      defaultCity: flags.city,
      defaultName: flags.name,
      getBreweries
    })
  }
}
