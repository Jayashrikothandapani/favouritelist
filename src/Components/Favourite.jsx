
import { useContext } from "react"
import { Arrcontext } from "./ArrContextProvider"

function FavouriteStudent() {

    const { listone, favone } = useContext(Arrcontext)

    const [list, setlist] = listone;
    const [fav, setfav] = favone;

function handledelete(deleteid){
    var temparr = list.filter(function (item) {
        if (deleteid != item.id) {
            return false

        }
        else {
            return true
        }
       

    })
    setfav([])
}


    return (
        <div>
            
            {
                fav.map(function (item) {
                    return (<h1 className="my-5 mx-5 g-10">{item.name}   <button onClick={()=>handledelete(item.id)} className="bg-red-800 p-1 text-[white] border rounded border medium justify-center">Remove</button></h1>)
                })
            }

        </div>


    )



}

export default FavouriteStudent