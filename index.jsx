import React from 'react'
import './index.scss'
import startBubble from './canvas.js'

export default (props) => {
  let {width = '425', heigth = '300', imgSrc} = props
  //  如果没有传递src  则直接返回
  if (!imgSrc) return null
  window.onload = () => {
    startBubble(props)
  }
  return (
    <div className='bubble'>
      <canvas id='canvas' width={width} height={heigth} />
    </div>
  )
}
