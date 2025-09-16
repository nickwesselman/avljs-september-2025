import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('brewery', () => {
  it('runs brewery cmd', async () => {
    const {stdout} = await runCommand('brewery')
    expect(stdout).to.contain('hello world')
  })

  it('runs brewery --name oclif', async () => {
    const {stdout} = await runCommand('brewery --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
