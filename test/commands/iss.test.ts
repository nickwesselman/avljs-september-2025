import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('iss', () => {
  it('runs iss cmd', async () => {
    const {stdout} = await runCommand('iss')
    expect(stdout).to.contain('hello world')
  })

  it('runs iss --name oclif', async () => {
    const {stdout} = await runCommand('iss --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
