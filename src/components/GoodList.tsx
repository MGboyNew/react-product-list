import { useState} from 'react'
import Input from './Input'
import AddList from './AddList'


const GoodList = (props:any) :React.ReactElement => {
    // 商品列表
   const [goodList_,setGoodList_]:[Array<string>,Function]  = useState([...props.goodList]);

    // 被删除的商品列表
   const [deleteGoods,setDeleteGoods]:[Array<string>,Function] = useState([]);

    // 要添加的商品
   const [addGood,setAddGood] = useState("");

   // 搜索的商品
   const [searchValue,setSearchValue] = useState("");


   // 监听搜索框中的值
   const handleSearchValueChange = (e:React.SyntheticEvent)=>{
       const inputValue = (e.target as HTMLInputElement)?.value as string;
       setSearchValue(inputValue);
   } 
   // 向删除列表中添加被删除的
   const handleDeleteGoodClick = (e:React.SyntheticEvent)=>{
       const deleteValue= (e.target as HTMLInputElement).getAttribute('data-item') as string;
       const _deleteGoods  = [...deleteGoods];

       const index = _deleteGoods.indexOf(deleteValue); 

       if(index === -1){
           setDeleteGoods([..._deleteGoods,deleteValue]);
       }
   }

   // 增建元素的按钮
   const handleGoodAddClick = ()=>{
       const _goodList = [...goodList_];
       if(addGood && _goodList.indexOf(addGood) === -1){
           setGoodList_([..._goodList,addGood]);
       }
   }
   // 获取添加的商品结果
   const handleGoodAddChange = (e:React.SyntheticEvent)=>{
       const inputValue = (e.target as HTMLInputElement)?.value;
       inputValue && setAddGood(inputValue);
   }

   return (
        <div>
            <div>
                <Input 
                    handleSearchValueChange={handleSearchValueChange}
                    placeholder="search good"
                    />
                <AddList handleGoodAddChange ={handleGoodAddChange }  handleGoodAddClick={handleGoodAddClick}/>
            </div>

            <ul style={{listStyleType:"none",width:200 + "px"}}>
                {
                    goodList_.filter(/*确保是搜索框中的内容且不可以在被删除的列表中*/(item:string)=>(item.includes(searchValue) && !deleteGoods.includes(item)))
                        .map((item:string)=>(
                            <li key={item.toString()}>
                                <p style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                    {item}
                                    <span data-item={item} onClick={handleDeleteGoodClick} style={{fontWeight:800,fontFamily:"monospace",cursor:"pointer"}}>X</span>
                                </p>
                            </li>
                        ))
                }
            </ul>

        </div>
   )
}

export default GoodList;
