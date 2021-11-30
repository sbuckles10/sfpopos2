import React from 'react'
import './POPOSFeature.css'
import './POPOSFeature.css'

function getFeature(str) {
	switch(str) {
		case 'outdoors':
			return '🌲'
		case 'coffee':
			return '☕️'
		case 'art':
			return '🖼'
		case 'toilet':
			return '🚽'
		case 'power':
			return '🔌'
		default:
			return '？'
	}
}

function POPOSFeature(props) {
	const emoji = getFeature(props.name)
  return <div className="POPOSFeature">{emoji}</div>
  <POPOSFeature name="outdoors" />
  <POPOSFeature name="coffee" />
  <POPOSFeature name="art" />
  <POPOSFeature name="toilet" />
  <POPOSFeature name="power" />

}

export default POPOSFeature
