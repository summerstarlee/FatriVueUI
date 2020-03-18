/* eslint-disable prettier/prettier */
/* Automatically generated by './build/bin/build-entry.js' */

import Input from '../packages/input/index.js'
import Select from '../packages/select/index.js'
import Switch from '../packages/switch/index.js'
import DvBorder1 from '../packages/dv-border-1/index.js'
import Ellipsis from '../packages/ellipsis/index.js'
import DvScrollTable from '../packages/dv-scroll-table/index.js'

const components = [
  Input,
  Select,
  Switch,
  DvBorder1,
  Ellipsis,
  DvScrollTable
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.1.5',
  install,
  Input,
  Select,
  Switch,
  DvBorder1,
  Ellipsis,
  DvScrollTable
}
