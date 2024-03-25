import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './App.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(Link_url){
    QRCodeLink.toDataURL(Link_url,{
      width: 600, 
      margin: 3,

    }, function (err, url){
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (

    <div className='container'>

      <QRCode 
        value= {link}
        className='qrcode'
        bgColor='#29292e'
        fgColor='#3982E4'
      />


      <input 
        className='input'
        placeholder='Digite ou cole url, texto, número...'
        value={link}
        onChange={ (e) => handleQrcode(e)}
      />

      <a className='link' href={qrcodeLink} download={'qrcode.png'} >Baixar no formato png</a>
      <a className='link' href={qrcodeLink} download={'qrcode.webp'} >Baixar no formato webp</a>

    </div>

  );
}

export default App;
