import React from 'react'
import styles from "./Label.module.scss"

const Label = ({color , text}) => {

  return (
    <p className={`${styles[color]} tag`}>{text}</p>
  )
}

export default Label