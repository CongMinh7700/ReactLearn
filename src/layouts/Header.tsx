import React from 'react'
import ButtonField from '../components/ButtonField'

function Header() {
  return (
    <div className ="flex-basic-between" style ={{padding :'1.5rem 4rem'}}>
        <div style={{fontSize :'40px',fontWeight :600}}>
            9DevPizza
        </div>
        <ButtonField loading = {true}>Create Pizza</ButtonField>
    </div>
  )
}

export default Header