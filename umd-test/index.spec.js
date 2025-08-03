import fs from 'node:fs'
import path from 'node:path'
import './setupVue.js'

// eslint-disable-next-line n/no-exports-assign
exports = undefined

// eslint-disable-next-line no-eval
eval(
  fs.readFileSync(path.resolve(__dirname, '..', 'dist', 'index.js')).toString()
)

describe('umd', () => {
  it('works', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    window.Vue.createApp(window.naive.NDataTable).mount(div)
    expect(div.innerHTML).toContain('n-data-table')
  })
})
