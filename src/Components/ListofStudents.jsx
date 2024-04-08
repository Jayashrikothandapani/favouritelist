
import { useContext } from "react"
import { Arrcontext } from "./ArrContextProvider"

function ListOfStudents() {
    const {listone, favone} = useContext(Arrcontext)

    const [list, setlist] = listone;
    const [fav, setfav] = favone;

    function addfav(deleteid) {
        var temparr = list.filter(function (item) {
            if (deleteid != item.id) {
                return false

            }
            else {
                return true
            }
           

        })
        setfav(temparr)
        

        








    }



    return (
        <>
            <div>
                <div className=" gap-20 my-10 mx-2">
                    {
                        list.map(function (item) {
                            return (<h1 className="my-5 mx-5 g-10">{item.name}   <button onClick={() => addfav(item.id)} className="bg-[black] p-1 text-[white] border rounded border medium justify-center">Add to Favourite</button></h1>)
                        })
                    }


                </div>

            </div></>
    )
}

export default ListOfStudents