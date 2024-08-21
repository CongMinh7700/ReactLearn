import { IcSpinner } from "../icon/ICSpiner";
import React, { ReactNode } from 'react'

type Props = {
    loading? : boolean;
    children? : ReactNode;
    onClick? : () => void;  
}
//phair ke thua moi su dung no duoc (loading children)
const  ButtonField =({loading,children,onClick} :Props) => {
  return (
    <>
    <button className="btn-main"  disabled={loading}> {!loading ? children:<div style ={{display  :'flex',alignItems : 'center', columnGap : '.5rem', color :'#fff'}}>
        <IcSpinner width=" 32px" height="32px"/>
        {children}
        </div>
        }
        </button>
    </>
  )
}

export default ButtonField