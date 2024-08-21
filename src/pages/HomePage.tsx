import { useState, useEffect, useMemo, useRef } from 'react'
import CardPizza from '../sections/CardPizza';
import { Pizza } from '../models/pizza.model';
import ItemPizza from '../sections/ItemPizza';
import CountPiza from '../sections/CountPizza';
import ButtonField from '../components/ButtonField';
import TextField from '../components/TextField';

function HomePage() {

    const [pizzas, SetPizzas] = useState<Pizza[]>([
        { id: 1, title: 'Minh', descriptions: 'Minhn ne nenenenen1' },
        { id: 2, title: 'Minhz', descriptions: 'Minhn ne neneneneqn' },
        { id: 3, title: 'Minhvb', descriptions: 'Minhn ne nenenenena' },
    ]);
    const [isView, setIsView] = useState(false);
    const [count, setCount] = useState(0);
    const [isCount, setIsCount] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //21
    const [page,setPage] = useState<number>(1);
    const pageRef = useRef<number>(1);
    console.log("Rerender Page : ",page);
    // useEffect (() => {
    //     console.log('UseEffect');

    // }, [count])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => { SetPizzas(data); })//console.log(data); 

    // }, [count])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(({data}) => {
                setTimeout(()=>{
                    setIsLoading(false);
                    SetPizzas([...pizzas, ...data]);
                },2000);
                // Lấy 5 mục đầu tiên 
                 const limitedData = data.slice(0, 5);
                
            });

    }, [page]);
    
    const TinhTong = useMemo(() => {
        return count + 1; //giong nhu khai bao 1 bien hon la ham
    }, [count])
    // const TinhTong = () => { //khai bao 1 ham
    //     return count + 1;

    // }


    const [people, setPeople] = useState<Pizza>({
        title: 'Minh',
        descriptions: 'Minhn ne '
    })
    // const handlerChangePerson = (data: Pizza) => {
    //     setPeople(data)
    // }
    const handlerRemovePerson = (id: number) => {  //khai báo lại cái hàm
        const pizaIndex = pizzas.findIndex(item => item.id === id);
        let newPizzas = [...pizzas];
        newPizzas.splice(pizaIndex, 1);
        SetPizzas(newPizzas);
    }
    return (
        <>
            {console.log('ContentLoad')}
            <div style={{ height: 'calc(100vh-309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
                <TextField placeholder='Enter something' width='70%' height='20%' />
                <div className="wrapper-card-items">
                    {
                        //hứng data từ componet cha truyền vào
                        //lấy cái hàm truyền lên th cha
                         pizzas.map(item => (<CardPizza key={item.id} id={item.id} title={item.title} descriptions={item.title} handlerRemovePerson={handlerRemovePerson} />))
                    }

                </div>
                {/* <div style={{display : isView ?'block':'none'}}>Welcome nao</div> */}
                {
                    isView && <div> Welcome nao </div>
                }

            </div>
            <button onClick={() => setIsCount(false)}>Close</button>
            <button onClick={() => setIsCount(true)}>Open</button>
            <div>{count}</div>
            {
                  isCount && <CountPiza count={count} setCount={setCount} />
                //  isCount && <CountPiza count={count} setCount={(count) => setCount(count)}/>
            }
              <div>Tinh tong  : {TinhTong}</div>  
              
                <button onClick ={()=> setCount(count+1)}>Increase</button> 
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonField loading={isLoading} onClick={()=> pageRef.current = pageRef.current+1}> ShowMore</ButtonField>
            </div>
        </>
    )
}

export default HomePage