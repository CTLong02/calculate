import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Fade} from 'react-reveal'

function App() {
  const [state, setState] = useState(0)
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [result, setResult] = useState()
  const [bar,setBar] = useState()
  const [key, setKey] = useState()
  const [longbar,setLongbar] = useState()
  const [shortbar, setShortbar] = useState()
  const reset = () => {
    setWidth()
    setHeight()
    setResult()
    setState(0)
    setBar()
    setLongbar()
    setShortbar()
    setKey()
  }
  const hanle = (lKey,lLong, lShort) => {
    const a = 2;
    const b = 3 * (lLong - lShort)
    const c = 2 * lKey * lKey - 2 * lShort * lLong
    const d = (lLong - lShort) * (lKey * lKey - lLong * lLong)
    const delta = b * b - 3 * a * c
    const k = (9 *a*b*c - 2*b*b*b -27*a*a*d ) / (2 * Math.sqrt( Math.pow(Math.abs(delta), 3) ))
    if(delta > 0) {
      if(k <= 1) {
        const x1 = (2 * Math.sqrt(delta) * Math.cos(Math.acos(k) / 3) -b)/ (3 * a)
        const x2 = (2 * Math.sqrt(delta) * Math.cos(Math.acos(k) / 3 - 2*Math.PI/3) -b)/ (3 * a)
        const x3 = (2 * Math.sqrt(delta) * Math.cos(Math.acos(k) / 3 + 2*Math.PI/3) -b)/ (3 * a)
        if(x1 > 20) {
          return x1
        }
        if(x2 > 20) {
          return x1
        }
        if(x3 > 20) {
          return x1
        }
      }else if(k > 1 ) {
        const x = Math.sqrt(delta) * Math.abs(k) * ( (Math.cbrt(Math.abs(k) + Math.sqrt(k * k -1))) +   (Math.cbrt(Math.abs(k) - Math.sqrt(k * k -1))) ) / (3 * a * k) - b / (3 * a)
        return x
      }
    }else if(delta === 0) {
      const x= (-b + Math.cbrt(b*b*b - 27 * a * a * d)) / (3 * a)
      return x
    }else {
      const x = Math.sqrt(Math.abs(delta)) * ( (Math.cbrt(k + Math.sqrt(k * k +1))) +   (Math.cbrt(Math.abs(k) - Math.sqrt(k * k + 1))) ) / (3 * a) - b / (3 * a)
      return x
    }

  }
  return (
    <div className="App">
      {state === 0 ? (
          <div className='options'>
            <Fade right><button className='btn1 btn' onClick={() => setState(1)}>Tính lan ô chéo (Tính từ vải ra lan)</button></Fade >
            <Fade left><button className='btn2 btn' onClick={() => setState(2)}>Tính lan ô vuông (Tính từ vải ra lan)</button></Fade >
            <Fade right><button className='btn3 btn' onClick={() => setState(3)}>Tính vải ô chéo (Tính từ lan ra vải)</button></Fade >
            <Fade left><button className='btn4 btn' onClick={() => setState(4)}>Tính vải ô vuông (Tính từ lan ra vải)</button></Fade >
            <Fade right><button className='btn5 btn' onClick={() => setState(5)}>Tính lẹp ô vuông </button></Fade >
            <Fade left><button className='btn6 btn' onClick={() => setState(6)}>Tính lẹp ô chéo </button></Fade >
          </div >
        ) : (
          <></>
        )
      }

      {state === 1 ? (
        <div>
          <Fade right><div className='back' onClick={() => reset()}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>Quay lại</span></div></Fade >
          <Fade left><div className='title'><h1>Tính lan ô chéo (Tính từ vải ra lan)</h1></div></Fade >
          <Fade top>
            <div className='form'>
              <div className='form-group'>
                <label>Chiều rộng :</label>
                <input placeholder='Nhập chiều rộng' value={width} onChange = {(e) => {
                  setWidth(e.target.value)
                  setResult(Math.round(Math.sqrt(e.target.value *  e.target.value + height * height)/2 -2))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Chiều dài :</label>
                <input placeholder='Nhập chiều dài' value={height} onChange = {(e) => {
                  setHeight (e.target.value)
                  setResult(Math.round(Math.sqrt(e.target.value *  e.target.value + width * width)/2 -2))
                }}/>
              </div>
              <div className='result mt-10'>
                Kết quả : {result ? result : 0}
              </div>
            </div >
          </Fade >
        </div>
      ) : (<></>)} 

      {state === 2 ? (
        <div>
          <Fade right><div className='back' onClick={() => reset()}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>Quay lại</span></div></Fade>
          <Fade left><div className='title'><h1>Tính lan ô vuông (Tính từ vải ra lan)</h1></div></Fade >
          <Fade top>
            <div className='form'>
              <div className='form-group'>
                <label>Chiều rộng :</label>
                <input placeholder='Nhập chiều rộng' value={width} onChange = {(e) => {
                  setWidth(e.target.value)
                  setResult(Math.round(Math.sqrt(e.target.value *  e.target.value + height * height)/2))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Chiều dài :</label>
                <input placeholder='Nhập chiều dài' value={height} onChange = {(e) => {
                  setHeight (e.target.value)
                  setResult(Math.round(Math.sqrt(e.target.value *  e.target.value + width * width)/2))
                }}/>
              </div>
              <div className='result mt-10'>
                Kết quả : {result ? result : 0}
              </div>
            </div >
          </Fade >
        </div>
      ) : (<></>)} 

      {state === 3 ? (
        <div>
          <Fade right><div className='back' onClick={() => reset()}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>Quay lại</span></div></Fade >
          <Fade left><div className='title'><h1>Tính vải ô chéo (Tính từ lan ra vải)</h1></div></Fade >
          <Fade top>
            <div className='form'>
              <div className='form-group'>
                <label>Lan dài:</label>
                <input placeholder='Nhập chiều dài lan' value={bar} onChange = {(e) => {
                  setBar(e.target.value)
                  setResult(Math.round(Math.sqrt(e.target.value *  e.target.value * 4 - height * height) + 4))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Một chiều vải :</label>
                <input placeholder='Nhập một chiều vải' value={height} onChange = {(e) => {
                  setHeight (e.target.value)
                  setResult(Math.round(Math.sqrt(bar * bar * 4 - e.target.value * e.target.value) + 4))
                }}/>
              </div>
              <div className='result mt-10'>
                Kết quả : {result ? result : 0}
              </div>
            </div >
          </Fade >
        </div>
      ) : (<></>)} 

      {state === 4 ? (
        <div>
          <Fade right ><div className='back' onClick={() => reset()}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>Quay lại</span></div></Fade >
          <Fade left><div className='title'><h1>Tính vải ô vuông (Tính từ lan ra vải)</h1></div></Fade >
          <Fade top>
            <div className='form'>
              <div className='form-group'>
                <label>Lan dài:</label>
                <input placeholder='Nhập chiều dài lan' value={bar} onChange = {(e) => {
                  setBar(e.target.value)
                  setResult(Math.round(Math.sqrt(e.target.value *  e.target.value * 4 - height * height)))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Một chiều vải :</label>
                <input placeholder='Nhập một chiều vải' value={height} onChange = {(e) => {
                  setHeight (e.target.value)
                  setResult(Math.round(Math.sqrt(bar * bar * 4 - e.target.value * e.target.value)))
                }}/>
              </div>
              <div className='result mt-10'>
                Kết quả : {result ? result : 0}
              </div>
            </div >
          </Fade >
        </div>
      ) : (<></>)} 

      {state === 5 ? (
        <div>
          <Fade right><div className='back' onClick={() => reset()}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>Quay lại</span></div></Fade >
          <Fade left><div className='title'><h1>Tính Lẹp ô vuông</h1></div></Fade >
          <div className='form'>
            <Fade top>
              <div className='form-group'>
                <label>Khóa:</label>
                <input placeholder='Nhập khóa' value={bar} onChange = {(e) => {
                  const b = 5/14 * e.target.value
                  const c = e.target.value * e.target.value - longbar * longbar
                  setKey(e.target.value)
                  setResult(Math.ceil( (b + Math.sqrt(b* b - 4*c))/2 ))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Chống :</label>
                <input placeholder='Nhập độ dài chống' value={longbar} onChange = {(e) => {
                  const b = 5/14 * key
                  const c = key * key - e.target.value * e.target.value
                  setLongbar(e.target.value)
                  setResult(Math.ceil( (b + Math.sqrt(b* b - 4*c))/2 ))
                }}/>
              </div>
              <div className='result mt-10'>
                Kết quả : {result ? result : 0}
              </div>
            </Fade >
          </div >
        </div>
      ) : (<></>)} 

      {state === 6 ? (
        <div>
          <Fade right><div className='back' onClick={() => reset()}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>Quay lại</span></div></Fade >
          <Fade left><div className='title'><h1>Tính Lẹp ô chéo</h1></div></Fade >
          <Fade top>
            <div className='form'>
              <div className='form-group'>
                <label>Khóa:</label>
                <input placeholder='Nhập khóa' value={bar} onChange = {(e) => {
                  setKey(e.target.value)
                  setResult((hanle(e.target.value, longbar, shortbar) + 1.5).toFixed(2))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Chống dài :</label>
                <input placeholder='Nhập chống dài' value={longbar} onChange = {(e) => {
                  setLongbar(e.target.value)
                  setResult((hanle(key, e.target.value, shortbar) + 1.5).toFixed(2))
                }}/>
              </div>
              <div className='form-group mt-10'>
                <label>Chống ngắn :</label>
                <input placeholder='Nhập chống ngắn' value={shortbar} onChange = {(e) => {
                  setResult((hanle(key, longbar, e.target.value) +1.5).toFixed(2))
                  setShortbar(e.target.value)
                }}/>
              </div>
              <div className='result mt-10'>
                Kết quả : {result ? result : 0}
              </div>
            </div >
          </Fade >
        </div>
      ) : (<></>)} 
      
    </div>
  );
}

export default App;
