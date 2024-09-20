import axios from "axios"

export const fetchNotes = async () => {
    try {
        var response = await axios.get("http://localhost:5143/notes");
        
        return response.data.notes;
    } catch(e){
        console.error(e);
    }
    
    

}