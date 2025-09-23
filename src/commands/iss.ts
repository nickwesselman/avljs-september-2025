import {Args, Command, Flags} from '@oclif/core'
import { renderIss } from '../components/iss.js'

export default class Iss extends Command {
  static override args = {
    
  }
  static override description = 'print the current location of the ISS'
  static override examples = [

  ]
  static override flags = {

  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Iss)
    renderIss()
  }
}
