'use strict'

export const DEFAULT_METHODS = {
  key: {},
  tag: {},

  if: {},
  define: {},

  attr: {},
  style: (element, state) => {
    DEFAULT_METHODS.class(element, state)
  },

  content: {},
  class: (element, state) => {
    const { ref, style } = element
    ref.class = { style, ...element.class }
  },

  props: {},
  state: {},

  method: {},
  transform: {},

  on: {},

  ref: {},

  extends: {},
  childExtends: {},
  text: (element, state) => {
    const { ref, text } = element
    ref.text = { tag: 'text', text }
  },

  html: {},

  set: {},
  update: {},
  remove: {}
}

// log: {}
// value: {},
// text: {},
// html: {},
// path: {},
// data: {},
// if: {},
// __hash: {},
// __cached: {},
// __defined: {},
// __exec: {},
// __changes: {},
// __trash: {},
// __root: {},
// __props: {},
// __proto: {},
// __ifFragment: {},
// __ifFalsy: {},
// parent: {},
// node: {},
// lookup: {},
// keys: {},
// parse: {},
// parseDeep: {},
