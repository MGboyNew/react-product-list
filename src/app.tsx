import {Dialog} from './components/Dialog'
import GoodList from './components/GoodList'

const goodList:Array<string> = ["苹果","面包","洗护用品","厨房用具"];

const App = ()=>{
    return(
        <div>
            <Dialog title={"Dialog-title-test"} message={"Dialog-message-test"}>
                <GoodList goodList={goodList}/>
            </Dialog>
        </div>
    )
}

export default App
