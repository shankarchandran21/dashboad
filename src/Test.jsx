import React, { Children, useState } from 'react'
const arr = ['shankar','Alex','Sanjay']
function Test() {
const [data,setData] = useState({name:'',age:"",date:''})

const ChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
        console.log(name)
    setData((prev)=>{
        return{...prev,[name]:value}
    })
}

console.log(data)

const Book = ({name,age,children})=>{
    return<div>
        <h1>{name}</h1>
        <h4>{age}</h4>    
        <p>{children}</p>
    </div>
}



  return (
   <div>
        <select name='name' value={data.name} onChange={ChangeHandler}>
                {arr.map((name,index)=>{
                    return <option key={index} value={name}>{name}</option>
                })}
        </select>
        <input type="number" name="age" value={data.age} onChange={ChangeHandler} />
        <input type='date' value={data.date} name='date' onChange={ChangeHandler}/>
        <Book {...data}/>
        <Book {...data}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in, dignissimos odit nulla amet pariatur. Recusandae distinctio maxime error possimus, reiciendis repellendus, ea odio quae minus amet rem, debitis quos.</p>
        </Book>
   </div>
  )
}

export default Test