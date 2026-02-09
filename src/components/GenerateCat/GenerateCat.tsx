interface GenerateCatProps {
    numCats: number;
}
export function GenerateCat({numCats} : GenerateCatProps){
    
    const numberOfCatsArray: number[] = [];
    for(let i = 0; i < numCats; i++){
        numberOfCatsArray.push(i);
    }
    
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            {numberOfCatsArray.map(num => (<img key={num} src={`https://cataas.com/cat?random=${num}`} height="50px" width="50px" />))}
        </div>
    );
}