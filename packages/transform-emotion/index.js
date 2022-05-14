'use strict'

import { exec, isObject, isObjectLike, isString } from '@domql/utils'
import { css } from '@emotion/css'

// export const transformStyle = (element, key) => {
//   const { ref, style } = element
//   const execPareams = exec(style, element)
//   if (style) {
//     if (isObjectLike(ref.class)) ref.class.style = execPareams
//     else ref.class = { style: execPareams }
//   }
//   return element
// }

// stringifies class object
export const namify = (obj, element) => {
  let className = ''
  for (const item in obj) {
    const param = obj[item]
    if (typeof param === 'boolean' && param) className += ` ${item}`
    else if (typeof param === 'string') className += ` ${param}`
    else if (typeof param === 'function') {
      className += ` ${exec(param, element)}`
    }
  }
  return className
}

const trimEmptySpaces = str => str.replace(/\s+/g, ' ').trim()

export const classify = (params, element, key) => {
  if (!params) return
  if (params === true) params = { key }
  if (isString(params)) params = { default: params }
  if (isObject(params)) params = namify(params, element)
  // TODO: fails on string
  return trimEmptySpaces(params)
}

export const transformEmotion = (element, key) => {
  const { ref } = element
  const classObj = ref.class
  const classObjHelper = {}
  if (isObjectLike(classObj)) {
    for (const key in classObj) {
      const prop = exec(classObj[key], element)
      const CSSed = css(prop)
      classObjHelper[key] = CSSed
    }
  }
  return classify(classObjHelper, element, key)
}

export const transformClass = ({ ref }, key) => (ref.class = ref.transform.emotion)
