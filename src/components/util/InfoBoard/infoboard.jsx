import React, { useState } from 'react'
import './infoBoard.css'

function Infoboard(props) {

    const [dataSetIndex, setDataSetIndex] = useState(0)

    const left = "<"
    const right = ">"

    function shiftRight() {
        if (props.data.length === 0) return
        if (dataSetIndex === props.data.length - 1) {
            setDataSetIndex(0)
        } else {
            setDataSetIndex(dataSetIndex + 1)
        }
    }

    function shiftLeft() {
        if (props.data.length === 0 ) return
        if (dataSetIndex === 0) {
            setDataSetIndex(props.data.length - 1)
        } else {
            setDataSetIndex(dataSetIndex - 1)
        }
    }

    return (
    <div className='info-board'>
        <button className='info-board-button' onClick={shiftLeft}>{left}</button>
        <section className='info-board-content'>
                {
                    props.data[dataSetIndex].map((data, i) => {
                        if (i === 0) {
                            return <h3 className='info-board-title' key={i}>{data}</h3>
                        } else {
                            return <li key={i} className='info-board-data-member'>{data}</li>
                        }
                    })
                }
        </section>
        <button className='info-board-button' onClick={shiftRight}>{right}</button>
    </div>
    )
}

export default Infoboard