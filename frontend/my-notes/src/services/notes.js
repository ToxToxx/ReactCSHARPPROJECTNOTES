import axios from "axios"

export const fetchNotes = async (filter) => {
    try {
        var response = await axios.get("http://localhost:5143/notes",{
        params:{
            search: filter?.search,
            sortItem: filter?.sortItem,
            sortOrder: filter?.sortOrder,
        },
    });
        return response.data.notes;
    } catch(e){
        console.error(e);
    }
    
    

}