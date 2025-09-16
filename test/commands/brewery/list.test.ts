import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('brewery:list', () => {
  it('runs brewery:list cmd', async () => {
    const {stdout} = await runCommand('brewery:list')
    expect(stdout).to.contain('hello world')
  })

  it('runs brewery:list --name oclif', async () => {
    const {stdout} = await runCommand('brewery:list --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
