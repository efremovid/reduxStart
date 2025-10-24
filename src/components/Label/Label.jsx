import React from 'react'
import styles from "./Label.module.scss"

const Label = ({color}) => {

  return (
    <li className={`${styles[color]}`}>Label</li>
  )
}

export default Label