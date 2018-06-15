import React from 'react'
import { NameCardPage } from './NameCardPage'

export function renderAllNameTags({ match }) {
  return <NameCardPage />
}

export function renderIndexedNameTag({ match }) {
  return <NameCardPage index={+match.params.index} />
}
