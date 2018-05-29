import React from 'react'
import { render } from 'react-dom'
import { Tree, treeUtil } from 'react-d3-tree'
import data from './data.json'

const App = () => (
  <div id="treeWrapper" style={{ width: '100em', height: '100em' }}>
    <Tree data={data} initialDepth={0} collapsible={true} />
  </div>
)

render(<App />, document.getElementById('root'))
